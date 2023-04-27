const basket = require("../../js/basket/basket");
const { Event } = require("../../js/events/event");
const { BasketItem } = require("../../js/basket/basketitem");
const { User } = require("../../js/users/users")
let events = [];
let items = [];

describe("calculateTotal", () => {
    test("Test calculates total basket price when no discount applied", () => {
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
        const total = basket.calculateTotal(items);
    
        expect(total).toBeCloseTo(2770.00, 2)
    });
    
    test("Test calculates total basket price with discount", () => {
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
        const total = basket.calculateTotal(items, 800);
    
        expect(total).toBeCloseTo(1970.00, 2)
    });
})

describe("showAdverts", () => {
    test("returns truthy if user is not premium", () => {
        const user = new User(1, 'Josiah')

        expect(basket.showAdverts(user)).toBe(true)
    })

    test("returns falsy if user is premium", () => {
        const user = new User(1, 'Josiah')
        user.isPremium = true

        expect(basket.showAdverts(user)).toBe(false)
    })
})
