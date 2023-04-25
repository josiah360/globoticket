const { generateReferralCode } = require('../../js/promotions/promotions')

describe('generateReferralCode', () => {
    test("Checks if correct referral code pattern is returne", () => {
        const userId = '1234'

        const referralCode = generateReferralCode(userId)

        expect(referralCode).toContain(userId)
        expect(referralCode).toMatch(/^#FRIEND-#\d{3}-#\d{4}$/)
    })

    test("returns correct referral code", () => {
        const randomMock = jest.spyOn(global.Math, 'random').mockReturnValue(12345)

        const referralCode = generateReferralCode('678')

        expect(referralCode).toBe('#FRIEND-#345-#678')

        expect(randomMock).toHaveBeenCalled()
    })
})