const { InvalidEventNameError, InvalidEventPriceError } = require('../../js/error-handling/exceptions')
const { Event, getTagLine, createEvent } = require('../../js/events/event')

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


describe('createEvent', () => {
    test('Throws error if price is not type of string || name.length > 200', () =>{
        expect(() => createEvent(200, 40.00, 100)).toThrow(new InvalidEventNameError("Event name cannot exceed 200 characters"))
    })

    test('Throws error if price is not type of number || is less than 0', () => {
        expect(() => createEvent('Timeless', -1, 100)).toThrow(new InvalidEventPriceError("Event price must be more or equal to 0"))
    })

    test('Throws error if available ticket is not a number || is less than 1', () => {
        expect(() => createEvent('Timeless', 40.00, 0)).toThrow(new InvalidEventPriceError("Event tickets must be more than 0"))
    })
})


