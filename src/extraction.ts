import { writeFileSync } from "fs";
import type { Item } from "./typedefs";
import * as utils from "./utils";

export function getKeys(obj: Record<string, unknown>): string[] {
  return Object.keys(obj);
}

export function getValues<T>(obj: T): unknown[] {
  return Object.values(obj);
}

type Items = Item[];
export function extractData(items: Items, outputPath: string): void {
  const output = items
    .flatMap((set) => {
      const { datas, texts } = set;
      return datas.map(({ ot, type, atk, def, level, race, attribute, id }) => {
        const { name, desc } = texts.find((item) => item.id === id) ?? {
          name: "No Name",
          desc: "No Desc",
        };
        return {
          id,
          name,
          desc,
          ot: utils.ot[ot] ?? ot,
          type: utils.type[type] ?? type,
          atk,
          def,
          level,
          race: utils.race[race] ?? race,
          attribute: utils.attributes[attribute] ?? attribute,
        };
      });
    })
    .filter(
      (card) =>
        ![
          "RUSH",
          "ANIME",
          "ILLEGAL",
          "VIDEOGAME",
          "SPEED",
          1536,
          4112,
        ].includes(card.ot)
    )
    .filter((card) =>
      [!card.name.includes("Anime"), !card.name.includes("Speed World")].some(
        (bool) => bool
      )
    )
    .filter(
      (card) =>
        ![
          "MISC",
          "MONSTER - TOKEN",
          "TOKEN",
          "MONSTER / ANIME",
          "SPELL - NORMAL / ANIME",
          "TRAP - NORMAL / ANIME",
          "MONSTER - NORMAL / ANIME",
          "MONSTER - EFFECT / ANIME",
          "MONSTER - FUSION / ANIME",
          "MONSTER - RITUAL / ANIME",
          "MONSTER - SPIRIT / ANIME",
          "MONSTER - UNION / ANIME",
          "MONSTER - GEMINI / ANIME",
          "MONSTER - TUNER / ANIME",
          "MONSTER - SYNCHRO / ANIME",
          "MONSTER - TOKEN",
          "SPELL - QUICKPLAY / ANIME",
          "SPELL - CONTINUOUS / ANIME",
          "SPELL - EQUIP / ANIME",
          "SPELL - FIELD / ANIME",
          "TRAP - COUNTER / ANIME",
          "MONSTER - FLIP / ANIME",
          "MONSTER - TOON / ANIME",
          "MONSTER - XYZ / ANIME",
          "MONSTER - PENDULUM / ANIME",
          "MONSTER - NOMI / ANIME",
          "MONSTER - LINK / ANIME",
        ].includes(card.type)
    );

  writeFileSync(outputPath, JSON.stringify(output));
}
