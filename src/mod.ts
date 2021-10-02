import sourceFiles from "./sourceFiles";
import { extractData } from "./extraction";
import type { Item } from "./typedefs";

export default function main(inputDir: string, outputPath: string) {
  const data = sourceFiles(inputDir) as Item[];
  extractData(data, outputPath);
}

export const formatData = extractData;
