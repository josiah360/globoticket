const { Event, getTagLine } = require('../../js/events/event')

test('returns Event Sold Out when no tickets are left', () => {
    const event = new Event(1, 'Timeless Concert', 40.00, 100, 0)

    const tagLine = getTagLine(event, 10, true)

    expect(tagLine).toBe('Event Sold Out!')
})