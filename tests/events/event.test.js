const { Event, getTagLine } = require("../../js/events/event")

describe("getTagLine", () => {
    test("Returns Event Sold Out if there are no tickets left", () => {
        const event = new Event(1, "Timeless Concert", 40.00, 100, 0)
    
        const tagLine = getTagLine(event)
    
        expect(tagLine).toBe('Event Sold Out!', 10, true)
    })

    test("Tests, if remaining ticket less than minimum ticket count", () => {
        const event = new Event(1, "Timeless Concert", 30.00, 100, 8)

        const tagLine = getTagLine(event,10, true)

        expect(tagLine).toBe("Hurry only 8 tickets left!")
    })
})

