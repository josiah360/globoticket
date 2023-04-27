const { Event, getTagLine } = require("../../js/events/event")

describe("getTagLine", () => {
    test("Returns Event Sold Out if there are no tickets left", () => {
        const event = new Event(1, "Timeless Concert", 40.00, 100, 0)
    
        const tagLine = getTagLine(event)
    
        expect(tagLine).toBe('Event Sold Out!', 10, true)
    })

    test("Tests if remaining ticket is less than minimum ticket count", () => {
        const event = new Event(1, "Timeless Concert", 30.00, 100, 8)

        const tagLine = getTagLine(event,10, true)

        expect(tagLine).toBe("Hurry only 8 tickets left!")
    })

    test("Tests if remaining ticket is greater than minimum ticket count and is popular", () => {
        const event = new Event(1, "Timeless Concert", 30.00, 100, 15)

        const tagLine = getTagLine(event,10, true)

        expect(tagLine).toBe("This Event is getting a lot of interest. Don't miss out, purchase your ticket now!")
    })

    test("Tests if remaining ticket i greater than minimum ticket count but not popular", () => {
        const event = new Event(1, "Timeless Concert", 30.00, 100, 15)

        const tagLine = getTagLine(event,10, false)

        expect(tagLine).toBe("Don't miss out, purchase your ticket now!")
    })
})

