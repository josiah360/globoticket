const { Event } = require('../../js/events/event')
const { getEvents } = require('../../js/events/search')

describe('getEvents', () => {
    test('Returns events that meets the search predicate', () => {
        const mockSearchPredicate = jest.fn(e => e.ticketPrice > 10.00)

        const event1 = new Event(1, 'The Beachside', 12.00, 100, 0)
        const event2 = new Event(3, 'Eko Hotel Vibe', 50.00, 100, 0)
        const event3 = new Event(6, 'Bad Man Thing', 60.00, 100, 0)

        
        const events = [
            event1,
            new Event(2, 'The Timeless Concert', 8.00, 100, 0),
            event2,
            new Event(4, 'Buju Live On Stage', 5.00, 120, 15),
            new Event(5, 'The Made In Lagos Show', 9.00, 90, 17),
            event3,
            new Event(7, 'Feelz in Abuja', 4.00, 90, 17)
        ]

        const filteredEvents = getEvents(events, mockSearchPredicate)

        expect(filteredEvents).toEqual([
            event1,
            event2,
            event3
        ])

        expect(mockSearchPredicate).toHaveBeenCalled()

        expect(mockSearchPredicate.mock.calls.length).toBe(events.length)

        expect(mockSearchPredicate.mock.calls[0][0]).toBe(events[0])
        expect(mockSearchPredicate.mock.calls[1][0]).toBe(events[1])
        expect(mockSearchPredicate.mock.calls[2][0]).toBe(events[2])
        expect(mockSearchPredicate.mock.calls[3][0]).toBe(events[3])
        expect(mockSearchPredicate.mock.calls[4][0]).toBe(events[4])
        expect(mockSearchPredicate.mock.calls[5][0]).toBe(events[5])
        expect(mockSearchPredicate.mock.calls[6][0]).toBe(events[6])
    })
})