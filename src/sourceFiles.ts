import fs from "fs";

export function getJson(filePath: string): object {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

function getDir(dirPath: string): string[] {
  return fs.readdirSync(dirPath);
}

export default function sourceFiles(inputDir: string) {
  const fileList = getDir(inputDir);
  const jsonFiles = fileList.map((filename) =>
    getJson(`${inputDir}/${filename}`)
  );
  return jsonFiles;
}
