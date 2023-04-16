const { Event, getTagLine } = require('../../js/events/event')

test("return Sold Out tag when no tickets are left", () => {
    const event = new Event(1, 'Summer BBQ', 40, 100, 0)
    const tagLine = getTagLine(event, 10, true)

    expect(tagLine).toBe('Event Sold Out!')
})