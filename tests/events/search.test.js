const { getEvents } = require("../../js/events/search")
const { Event } = require("../../js/events/event")

describe("getEvents", () => {
    test("Returns the correct event", () => {
        const searchPredicateMock = jest.fn(x => x.ticketPrice <= 40.00)

        const event1 = new Event(1, "Timeless Concert", 39.00, 100, 46)  
        const event2 = new Event(2, "Made In Lagos", 42.00, 90, 32)
        const event3 = new Event(3, "Burna Live", 52.00, 75, 16)

        const events = [
            event1,
            event2,
            event3
        ]

        expect(getEvents(events, searchPredicateMock)).toContain(event1)
        expect(searchPredicateMock).toHaveBeenCalled()

    })
})