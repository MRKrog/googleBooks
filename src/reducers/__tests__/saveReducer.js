import { saveReducer } from '../saveReducer'

describe('saveReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = saveReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should handle SET_BOOKS', () => {
    const book = ""
    const mockAction = {
      type: "SET_BOOKS",
      books
    }
    const expected = '';
    const result = saveReducer('', mockAction)
    expect(result).toEqual(expected)
  })

})
