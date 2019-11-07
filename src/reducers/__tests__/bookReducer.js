import { bookReducer } from '../bookReducer'

describe('bookReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = bookReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should handle SET_BOOKS', () => {
    const book = ""
    const mockAction = {
      type: "SET_BOOKS",
      books
    }
    const expected = '';
    const result = bookReducer('', mockAction)
    expect(result).toEqual(expected)
  })

})
