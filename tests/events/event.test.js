const { Event, getTagLine, createEvent } = require('../../js/events/event')
const { InvalidEventNameError, InvalidEventPriceError } = require('../../js/error-handling/exceptions')

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

describe('createEvent', () => {
    test('Throws an error if typeof name is not a string', () => {
        expect(() => createEvent(1, 55.00, 200)).toThrow(new InvalidEventNameError("Event name cannot exceed 200 characters"))
    })

    test('Throws an error if name characters exceed 200', () => {
        const name = 'veryLongName'.repeat(20).substring(0, 201)

        expect(() => createEvent(name, 55.00, 200)).toThrow(new InvalidEventNameError("Event name cannot exceed 200 characters"))
    })

    test('Throws an error if typeof price is not a number', () => {
        expect(() => createEvent('Davido Show', '12.00', 200)).toThrow(new InvalidEventPriceError("Event price must be more or equal to 0"))
    })

    test('Throws an error if typeof availableTickets is not a number', () => {
        expect(() => createEvent('Davido Show', 12.00, '200')).toThrow(new InvalidEventPriceError("Event tickets must be more than 0"))
    })
})