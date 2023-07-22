package models

// SystemMessageEvent is a message displayed in chat on behalf of the server.
type SystemMessageEvent struct {
	Event
	MessageEvent
	DisplayName string
}

// GetBroadcastPayload will return the object to send to all chat users.
func (e *SystemMessageEvent) GetBroadcastPayload() EventPayload {
	return EventPayload{
		"id":        e.ID,
		"timestamp": e.Timestamp,
		"body":      e.Body,
		"type":      SystemMessageSent,
		"user": EventPayload{
			"displayName": e.DisplayName,
		},
	}
}

// GetMessageType will return the event type for this message.
func (e *SystemMessageEvent) GetMessageType() EventType {
	return SystemMessageSent
}
