const { Event, getTagLine } = require('../../js/events/event')

describe('getTagLine', () => {
    test('returns Event Sold Out when no tickets are left', () => {
        const event = new Event(1, 'Timeless Concert', 40.00, 100, 0)
    
        const tagLine = getTagLine(event, 10, true)
    
        expect(tagLine).toBe('Event Sold Out!')
    })

    test("Returns tickets with letter 's' if there are more than 1 tickets left", () => {
        const event = new Event(1, 'Made In Lagos', 20.00, 100, 5)

        const tagLine = getTagLine(event, 10, true)

        expect(tagLine).toBe(`Hurry only ${event.ticketsRemaining} tickets left!`)
    })

    test("Returns ticket without letter 's' if there is eactly 1 ticket left", () => {
        const event = new Event(1, 'Made In Lagos', 20.00, 100, 1)

        const tagLine = getTagLine(event, 10, true)

        expect(tagLine).toBe(`Hurry only ${event.ticketsRemaining} ticket left!`)
    })

    test('Checks if event is popular and returns appropriate tagLine', () => {
        const event = new Event(1, 'Made In Lagos', 20.00, 100, 15)

        const tagLine = getTagLine(event, 10, true)

        expect(tagLine).toBe(`This Event is getting a lot of interest. Don't miss out, purchase your ticket now!`)
    })

    test('Checks if event is not popular and returns appropriate tagLine', () => {
        const event = new Event(1, 'Made In Lagos', 20.00, 100, 15)

        const tagLine = getTagLine(event, 10, false)

        expect(tagLine).toBe(`Don't miss out, purchase your ticket now!`)
    })
})

