// One-Line Office Jokes — entry writer.
// Writes the single-line joke to /output/entry.txt with no trailing newline.
// Plain TypeScript, no dependencies, no network calls.
// The entry must stay exactly 124 characters on one line: the sealed scorer
// accepts 1–199 UTF-8 characters, and the judge reads it as a single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Facilities locked the thermostat at 21 degrees, so I wear my winter coat indoors and HR logged it as a dress-code violation.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
