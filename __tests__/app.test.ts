import app from '../src/mod'
import sourceFiles from '../src/sourceFiles'

describe('sourcing files from a directory', () => {
  it('output cards', () => {
    app('./testdata/input', './testdata/output/output.json')
    const cards = sourceFiles('./testdata/output').flat()
    expect(cards.length).toEqual(11420)
  })
})
