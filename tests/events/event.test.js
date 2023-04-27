const { Event, getTagLine } = require("../../js/events/event")

test("Returns Event Sold Out if there are no tickets left", () => {
    const event = new Event(1, "Timeless Concert", 40.00, 100, 80)

    const tagLine = getTagLine(event)

    expect(tagLine).toBe('Event Sold Out!')
})