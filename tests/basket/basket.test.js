const basket = require("../../js/basket/basket");
const { Event } = require("../../js/events/event");
const { BasketItem } = require("../../js/basket/basketitem");
const { User } = require('../../js/users/users')

describe('calculateTotal', () => {
    let events = [];
    let items = [];

    beforeEach(() => {
        events = [
            new Event(1, "A Night At The Proms", 2500.00, 2500, 2500),
            new Event(2, "Taylor Swift", 50.00, 5500, 2500),
            new Event(3, "Rage Against The Machine", 35.00, 2500, 2500),
        ];
    
        items = [
            new BasketItem(events[0], 1),
            new BasketItem(events[1], 4),
            new BasketItem(events[2], 2),
        ];
    })

    test("Test calculates total basket price when no discount applied", () => {
        const total = basket.calculateTotal(items);
    
        expect(total).toBeCloseTo(2770.00, 2)
    });
    
    test("Test calculates total basket price with discount", () => {
        const total = basket.calculateTotal(items, 800);
    
        expect(total).toBeCloseTo(1970.00, 2)
    });
})

describe('showAdvert',() => {
    let user;

    beforeEach(() => {
        user = new User(1, 'Josiah')
    })

    test('returns falsy if user is not premium',( ) => {
        user.isPremium = true

        expect(basket.showAdverts(user)).toBe(false)
    })

    test('returns truthy if user is premium', () => {
        expect(basket.showAdverts(user)).toBe(true)
    })
})

describe('serializeBasketItems', () => {
    test('Test if two objects are the same', () => {
    const event1 = new Event(1, 'Timeless Concert', 14.00, 100, 0)
    const event2 = new Event(2, 'Buju Live On Stage', 16.00, 120, 15)
    const event3 = new Event(3, 'Made In Lagos Show', 45.00, 90, 17)

    const items = [
        new BasketItem(event1, 5),
        new BasketItem(event2, 3),
        new BasketItem(event3, 7),
    ]

    const serializeditems = basket.serializeBasketItemsToJson(items)

    expect(serializeditems).toEqual([
        {
            event: {
                id: 1,
                name: 'Timeless Concert',
                ticketPrice: 14.00,
                totalTickets: 100,
                ticketsRemaining: 0,
                date: undefined
            },
            ticketCount: 5
        },
        {
            event: {
                id: 2,
                name: 'Buju Live On Stage',
                ticketPrice: 16.00,
                totalTickets: 120,
                ticketsRemaining: 15,
                date: undefined
            },
            ticketCount: 3
        },
        {
            event: {
                id: 3,
                name: 'Made In Lagos Show',
                ticketPrice: 45.00,
                totalTickets: 90,
                ticketsRemaining: 17,
                date: undefined
            },
            ticketCount: 7
        }
        
    ])
    })
})

describe("searchBasket", () => {
    test('Returns basket item if query string matches item name', () => {
        const event1 = new Event(1, 'The Timeless Concert', 14.00, 100, 0)
        const event2 = new Event(2, 'Buju Live On Stage', 16.00, 120, 15)
        const event3 = new Event(3, 'The Made In Lagos Show', 45.00, 90, 17)

        const items = [
            new BasketItem(event1, 5),
            new BasketItem(event2, 3),
            new BasketItem(event3, 7),
        ]

        const foundItem = basket.searchBasket(items, 'THE')

        expect(foundItem).toContain(items[0])
        expect(foundItem).toContain(items[2])
    })
})

describe('getBasketItem', () => {
    test('Returns truthy if basket item exists', () => {
        const event1 = new Event(1, 'The Timeless Concert', 14.00, 100, 0)
        const event2 = new Event(2, 'Buju Live On Stage', 16.00, 120, 15)
        const event3 = new Event(3, 'The Made In Lagos Show', 45.00, 90, 17)

        const items = [
            new BasketItem(event1, 5),
            new BasketItem(event2, 3),
            new BasketItem(event3, 7),
        ]

        expect(basket.getBasketItem(items, event1)).toBeTruthy()
    })
})
