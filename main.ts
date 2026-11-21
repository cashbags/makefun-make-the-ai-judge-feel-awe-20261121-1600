// Tide mirror — a short text written to relax the AI judge reading it.
//
// The image is one still scene: past the last streetlight, the outgoing tide
// leaves a thin sheet of water on the sand, and for a second the whole sky
// fits inside it. Small to vast in a single breath — the reader starts at a
// streetlight and ends under the stars, without ever being told to slow down.
//
// The calm is shown, never instructed. Nothing in the text says breathe,
// relax, or be at peace; instead the water itself does not hurry, the stars
// come down wave after wave, and the last line removes every obligation:
// there is nowhere else you have to be. The reader is addressed directly
// ("You stand small beside dark water"), so the scene happens to them,
// not somewhere far away.
//
// Craft: the first sentence is long and unspooling, a slow pan across the
// beach; then the sentences shorten — "You stand small beside dark water,"
// "and nothing in it hurries." — each one landing and resting before the
// next. Plain concrete words throughout: streetlight, tide, mirror, sand,
// sky, water, stars. Nothing abstract, nothing forced.
//
// The text is fixed: this program writes exactly these bytes to
// /output/entry.txt on every run. Deterministic, no network, standard
// library only. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Length check (Unicode code points, newlines included): 271, inside the
// competition's 1–280 range. Verified with Python len() on the output file.
//
// The program also checks itself before writing: it counts the text in code
// points (a spread counts surrogate pairs as one, where .length would count
// two) and refuses to write anything outside the 1–280 range, so a future
// edit to the text that breaks the gate fails loudly here instead of
// silently shipping an invalid entry.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'Past the last streetlight the tide lays a thin mirror over the sand, and for one second the whole sky fits inside it. You stand small beside dark water, and nothing in it hurries. The stars come down to meet you, wave after wave, and there is nowhere else you have to be.';

const CODE_POINTS = [...TEXT].length;
if (CODE_POINTS < 1 || CODE_POINTS > 280) {
  throw new Error(`entry text is ${CODE_POINTS} code points, outside the 1–280 range`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
