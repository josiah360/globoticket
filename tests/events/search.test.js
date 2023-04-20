const { Event } = require("../../js/events/event")
const { getEvents } = require("../../js/events/search")

describe('getEvent', () => {
    test('Returns events with ticket prices less than 30', () => {
        const mockSearchPredicate = jest.fn(e => e.ticketPrice < 30)

        const expectedEvent1 = new Event(1, "A Night At The Proms", 29.00, 2500, 2500)
        const expectedEvent2 = new Event(4, "Taylor Swift", 20.00, 5500, 2500)
        const expectedEvent3 = new Event(7, "Rage Against The Machine", 15.00, 2500, 2500)

        const events = [
            expectedEvent1,
            new Event(2, 'Timeless Night', 40.00, 100, 80),
            new Event(3, 'Made in Lagos', 100, 500, 30),
            expectedEvent2,
            new Event(2, 'Industry Night', 60.00, 120, 40),
            new Event(3, 'Sunday At Ilashe', 100, 500, 30),
            expectedEvent3
        ];

        const filterResults = getEvents(events, mockSearchPredicate)

        expect(filterResults).toEqual([
            expectedEvent1,
            expectedEvent2,
            expectedEvent3
        ])

        expect(mockSearchPredicate).toHaveBeenCalled()

        expect(mockSearchPredicate.mock.calls.length).toBe(events.length)

        expect(mockSearchPredicate.mock.calls[0][0]).toEqual(events[0])
        expect(mockSearchPredicate.mock.calls[1][0]).toEqual(events[1])
        expect(mockSearchPredicate.mock.calls[2][0]).toEqual(events[2])
        expect(mockSearchPredicate.mock.calls[3][0]).toEqual(events[3])
        expect(mockSearchPredicate.mock.calls[4][0]).toEqual(events[4])
        expect(mockSearchPredicate.mock.calls[5][0]).toEqual(events[5])
        expect(mockSearchPredicate.mock.calls[6][0]).toEqual(events[6])
    })
})