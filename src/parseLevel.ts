import type { Type } from './typedefs'
import { Map } from 'immutable'

const possibleValues = Map({
  a: 10,
  b: 11,
  c: 12,
  d: 13
})

function getNumber(level: string, indexPos = 0): number {
  const rawLevel = level.charAt(indexPos)
  return possibleValues.get(rawLevel) ?? Number(rawLevel)
}

function decimalToHex(decimal: number): string {
  return decimal.toString(16)
}

export default function convertLevel(input: number): {
  scale: number
  level: number
} {
  const hexValue = decimalToHex(input)
  const scale = getNumber(hexValue, 0)
  const level = getNumber(hexValue, 6)
  return { scale, level }
}
