const exercise1 = require('../exercise1')
const { responseMock } = require('./utils')

describe('Exercise1', () => {
    it('should return right answer', async () => {
        const req = {
            body: [4, 3, 2, 7, 8, 2, 3, 1]
        }
        const res = responseMock();

        exercise1(req, res);
        expect(res.send).toHaveBeenCalledWith([5, 6]);
    })

    it('should throw error', async () => {
        const req = {
            body: [1,4]
        }
        const res = responseMock();

        exercise1(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    })
})