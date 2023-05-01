const { getPastPurchases } = require('../../js/users/account/account')
const purchaseHistory = require('../../js/users/account/purchaseHistory/purchaseHistory')

jest.unmock('../../js/users/account/account')

describe("getPastPurchases", () => {
    test("returns purchased events if ready state is 4", () => {
        const userId = '123'

        expect(getPastPurchases(userId)).toEqual([
                {
                    name: "Punk Goes Pop - 90s",
                    tickets: 2,
                    price: 40.00,
                },
                {
                    name: "Adventures Live!",
                    tickets: 5,
                    price: 120.00,       
                },
                {
                    name: "Folk dance party!",
                    tickets: 3,
                    price: 75.00,
                }
            ]
        )
    })

    test("Throws error if readyState is not 4", () => {
        jest.spyOn(purchaseHistory, 'getPurchaseHistory').mockReturnValue({
            readyState: 2,
            onreadystatechange: null,
            response: {
                events: []
            }
        })

        const userId = '123'

        expect(() => getPastPurchases(userId)).toThrow(new Error("Failed to get purchase history"))
    })
})