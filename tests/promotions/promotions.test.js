const { generateReferralCode } = require('../../js/promotions/promotions')

describe("generateReferralCode", () => {
    test('Test to see that it returns the right referral code', () => {
        const userId = '1234'

        referralCode = generateReferralCode(userId)

        expect(referralCode).toContain('#1234')
        expect(referralCode).toMatch(/^#FRIEND-#\d{3}-#\d{4}$/)
    })
})