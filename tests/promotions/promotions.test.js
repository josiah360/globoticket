const { generateReferralCode } = require("../../js/promotions/promotions")


describe('generateReferralCode', () => {
    test('Referral code contains userId', () => {
        const userId = '1234'
        const referralCode = generateReferralCode(userId)

        expect(referralCode).toContain(userId)
        expect(referralCode).toMatch(userId)
    })

    test('Referral code has the correct format', () => {
        const userId = '1234'
        const referralCode = generateReferralCode(userId)

        expect(referralCode).toMatch(/^#FRIEND-#\d{3}-#\d{4}$/)
    })

    test('Returns correct refferal code', () => {
        const randomMock = jest.spyOn(global.Math, 'random').mockReturnValue(12345)

        const referralCode = generateReferralCode(657)

        expect(referralCode).toBe('#FRIEND-#657-#12345')
    })
})