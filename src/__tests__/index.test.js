import fatFingered from '../'

describe('fatFingered', () => {
    it('returns empty array for invalid emails', () => {
        expect(fatFingered('foobar')).toHaveLength(0)
        expect(fatFingered('nana')).toHaveLength(0)
    })

    it('returns empty array for no mistakes', () => {
        expect(fatFingered('test@example.com')).toHaveLength(0)
        expect(fatFingered('test@hotmail.com')).toHaveLength(0)
        expect(fatFingered('test@gmail.com')).toHaveLength(0)
    })

    it('returns array of possible mistakes', () => {
        expect(fatFingered('test@gnail.com')).toHaveLength(1)
        expect(fatFingered('test@gmail.con')).toHaveLength(1)
        expect(fatFingered('test@gnail.con')).toHaveLength(2)
    })
})