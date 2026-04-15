package controllers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"net/url"
	"os"
	"testing"

	"github.com/owncast/owncast/core/data"
	"github.com/owncast/owncast/persistence/configrepository"
)

func TestMain(m *testing.M) {
	dbFile, err := os.CreateTemp(os.TempDir(), "owncast-test-db.db")
	if err != nil {
		panic(err)
	}
	defer os.Remove(dbFile.Name())

	if err := data.SetupPersistence(dbFile.Name()); err != nil {
		panic(err)
	}

	os.Exit(m.Run())
}

func TestWebfingerHandlerWithIDNHost(t *testing.T) {
	tests := []struct {
		name     string
		resource string
	}{
		{
			name:     "unicode account host",
			resource: "acct:retrots3m@live.retrospection.みんな",
		},
		{
			name:     "punycode account host",
			resource: "acct:retrots3m@live.retrospection.xn--q9jyb4c",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			configRepository := configrepository.Get()
			configRepository.SetFederationEnabled(true)
			configRepository.SetFederationUsername("retrots3m")
			configRepository.SetServerURL("https://live.retrospection.みんな")

			req := httptest.NewRequest(http.MethodGet, "/.well-known/webfinger?resource="+url.QueryEscape(tt.resource), nil)
			w := httptest.NewRecorder()

			WebfingerHandler(w, req)

			if w.Code != http.StatusOK {
				t.Fatalf("status = %d, want %d", w.Code, http.StatusOK)
			}

			var response struct {
				Subject string   `json:"subject"`
				Aliases []string `json:"aliases"`
				Links   []struct {
					Rel  string `json:"rel"`
					Href string `json:"href"`
				} `json:"links"`
			}
			if err := json.NewDecoder(w.Body).Decode(&response); err != nil {
				t.Fatal(err)
			}

			expectedActorURL := "https://live.retrospection.xn--q9jyb4c/federation/user/retrots3m"
			if response.Subject != "acct:retrots3m@live.retrospection.xn--q9jyb4c" {
				t.Errorf("subject = %v, want acct:retrots3m@live.retrospection.xn--q9jyb4c", response.Subject)
			}
			if len(response.Aliases) != 1 || response.Aliases[0] != expectedActorURL {
				t.Errorf("aliases = %v, want [%s]", response.Aliases, expectedActorURL)
			}

			var self string
			var avatar string
			var alternate string
			for _, link := range response.Links {
				switch link.Rel {
				case "self":
					self = link.Href
				case "http://webfinger.net/rel/avatar":
					avatar = link.Href
				case "alternate":
					alternate = link.Href
				}
			}

			if self != expectedActorURL {
				t.Errorf("self href = %v, want %v", self, expectedActorURL)
			}
			if avatar != "https://live.retrospection.xn--q9jyb4c/logo/external" {
				t.Errorf("avatar href = %v, want punycode logo URL", avatar)
			}
			if alternate != "https://live.retrospection.xn--q9jyb4c/hls/stream.m3u8" {
				t.Errorf("alternate href = %v, want punycode stream URL", alternate)
			}
		})
	}
}
