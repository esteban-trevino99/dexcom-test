const router = require("../router")


describe("Router", () => {
    it('should call a POST /excercise1', async () => {
        const appMock = {
            post: jest.fn((url)=>{
                return url;
            }),
        }
        jest.doMock('express', () => {
            return () => {
              return app
            }
          })
          
        router(appMock)
        expect(appMock.post).toHaveNthReturnedWith(1, "/exercise1")
    })

    it('should call a POST /excercise2', async () => {
        const appMock = {
            post: jest.fn((url)=>{
                return url;
            }),
        }
        jest.doMock('express', () => {
            return () => {
              return app
            }
          })
          
        router(appMock)
        expect(appMock.post).toHaveNthReturnedWith(2, "/exercise2")
    })
})