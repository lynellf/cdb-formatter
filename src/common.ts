import sourceFiles from './sourceFiles'
type TRecord = Record<string, unknown>
export function getCard(query: string): TRecord {
  const cards = sourceFiles('./testdata/output').flat()
  const card = cards.find((c) => (c as TRecord).name === query) as TRecord
  return card
}
