const { Event, getTagLine } = require('../../js/events/event')

describe('getTagLine', () => {
    test('returns Event Sold Out when there are no tickets left', () => {
        const event = new Event(1, 'Elegushi Beach', 40, 100, 0)
        const tagLine = getTagLine(event, 10, true)
    
        expect(tagLine).toBe('Event Sold Out!')
    })

    test('returns amount of tickets left', () => {
        const event = new Event(2, 'Davido Show', 50, 100, 7)
        const tagLine = getTagLine(event, 10, true)

        expect(tagLine).toBe('Hurry only 7 tickets left!')
    })

    test('returns if event is popular', () => {
        const event = new Event(3, 'Made In Lagos', 80, 100, 12)
        const tagLine = getTagLine(event, 10, true)

        expect(tagLine).toBe("This Event is getting a lot of interest. Don't miss out, purchase your ticket now!")
    })

    test('returns if event is not popular', () => {
        const event = new Event(3, 'Made In Lagos', 80, 100, 12)
        const tagLine = getTagLine(event, 10, false)

        expect(tagLine).toBe("Don't miss out, purchase your ticket now!")
    })
})

