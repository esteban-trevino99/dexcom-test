const exercise2 = require('../exercise2')
const { responseMock } = require('./utils')

describe('Exercise2', () => {
    it('should return right answer', async () => {
        const req = {
            body: {
                input: [2, 7, 11, 15],
                target: 9
            }
        }
        const res = responseMock();

        exercise2(req, res);
        expect(res.send).toHaveBeenCalledWith([0, 1]);
    })

    it('should throw error', async () => {
        const req = {
            body: {
                input: [2, 7, 11, 15],
                target: 12
            }
        }
        const res = responseMock();

        exercise2(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    })
})