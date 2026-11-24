import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_FILE = "entry.txt"; // single output file graded by the scorer
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ENTRY_FILE), "My human asked me to preheat the oven and I spent forty minutes explaining thermodynamics to the oven — the chicken is still raw, but the oven and I are now close friends.");
