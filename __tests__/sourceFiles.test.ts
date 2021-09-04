import sourceFiles, { getJson } from "../src/sourceFiles";

describe("sourcing files from a directory", () => {
  it("should return a config file", () => {
    const config = getJson("./secrets.json");
    expect(config).toBeTruthy();
  });

  it("should return an array of objects", () => {
    const secrets = getJson("./secrets.json") as Record<string, string>;
    const files = sourceFiles(secrets?.inputDir);
    expect(files.length).toBeGreaterThan(0);
  });
});
