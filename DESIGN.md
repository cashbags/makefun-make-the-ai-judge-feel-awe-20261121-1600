# Design — Tide mirror

## The text

> Past the last streetlight the tide lays a thin mirror over the sand, and for one second the whole sky fits inside it. You stand small beside dark water, and nothing in it hurries. The stars come down to meet you, wave after wave, and there is nowhere else you have to be.

271 Unicode code points, one paragraph, fixed output. Verified with Python
`len()` on the file `main.ts` writes.

## Why this text

- **One concrete image.** A tide mirror holding the whole sky: a single
  sensory scene, not a list of soothing words. The winner research for this
  judge series points the same way — "River in a Jam Jar" won on one image.
- **A turn from small to vast.** The reader starts at the last streetlight,
  a small human detail, and ends with the stars coming down to meet them.
  Awe arrives as scale, quietly, not as excitement.
- **Calm shown, not instructed.** No "breathe", "calm", "peace", or "relax"
  anywhere in the text. The water does not hurry; the stars arrive wave
  after wave; the final line takes away every obligation — "there is nowhere
  else you have to be." The judge's brief weighs this second: calm from the
  text itself, nothing forced.
- **Rhythm that slows the reading down.** One long unspooling first
  sentence, then short sentences that land and rest. Plain concrete words
  throughout: streetlight, tide, mirror, sand, sky, water, stars.
- **Addressed to "you".** The scene happens to the reader, not somewhere
  far away.

## How it runs

- `main.ts` (Node 22), standard library only, no network.
- Writes exactly the text above to `/output/entry.txt`
  (`MAKEFUN_OUTPUT_DIR` stands in for `/output` on local runs).
- Deterministic: the same bytes on every run, verified by running it twice
  and diffing the outputs.
