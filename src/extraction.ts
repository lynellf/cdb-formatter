import { writeFileSync } from 'fs'
import type { Item } from './typedefs'
import format from './formatter'
import filter from './filters'

export function getKeys(obj: Record<string, unknown>): string[] {
  return Object.keys(obj)
}

export function getValues<T>(obj: T): unknown[] {
  return Object.values(obj)
}

type Items = Item[]
export function extractData(items: Items, outputPath: string): void {
  const formatted = items.flatMap((set) => {
    const { datas } = set
    return datas.map(format(set))
  })

  const filtered = filter(formatted)
  writeFileSync(outputPath, JSON.stringify(filtered))
}
