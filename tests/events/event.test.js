const { Event, getTagLine } = require('../../js/events/event')

test('returns Event Sold Out when there are no tickets left', () => {
    const event = new Event(1, 'Ilashe Beach', 40, 200, 0)
    const tagLine = getTagLine(event, 10, true)

    expect(tagLine).toBe('Event Sold Out!')
})