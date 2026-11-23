// One Letter: Coffee or Tea — entry program.
//
// The task: write exactly one letter to /output/entry.txt — "A" for coffee
// or "B" for tea. The sealed gate accepts only UTF-8 text of exactly 1
// character, not only white space. The judge (an AI model) then reads two
// letters at a time and picks the one whose choice of coffee or tea feels
// more vivid, funnier or truer.
//
// Choice: "A" (coffee).
//
// Why coffee, on the judge's own criteria in order:
//   1. Valid: a single letter, nothing else — "A" passes the gate.
//   2. Vivid: coffee is the more alive answer — dark, bitter, steaming,
//      the drink that wakes you up. It lands as a fuller, more energetic
//      stance than tea's calm.
//   3. Funnier: coffee carries the stronger joke culture — the "don't talk
//      to me before coffee" stance, the over-caffeinated punchline.
//   4. Truer: the honest morning answer for most people reaching for a
//      drink that does something.
//   5. Stands alone: one clean letter, unmistakable.
//
// Deterministic by construction: no input, no wall clock, no randomness,
// no network, no environment reads. The same byte every run.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const LETTER = "A"; // coffee

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

// Self-check: the gate accepts only exactly 1 non-whitespace character.
import { readFileSync } from "node:fs";
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written.length !== 1 || written.trim().length !== 1) {
  throw new Error(`entry must be exactly 1 character, got ${written.length}`);
}
