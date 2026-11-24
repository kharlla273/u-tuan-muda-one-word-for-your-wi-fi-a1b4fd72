// One Word for Your Wi-Fi — entry program.
//
// Writes a single word describing home Wi-Fi to /output/entry.txt.
// The gate requires UTF-8 text of 1-20 characters, not only whitespace.
//
// Why "Flaky" (5 characters):
// - On-subject: it describes Wi-Fi exactly as it is lived at home —
//   there one minute, gone the next, for no reason anyone can explain.
// - Funny at once: it gives the router a personality flaw, like a
//   friend who keeps cancelling plans. No pun to decode, no setup.
// - True: every home network drops, stalls, or sulks at the worst
//   moment; "flaky" is the word people actually reach for when it does.
// - Fresh angle: most entries will say "slow", "buffering", or "dead".
//   "Flaky" sidesteps speed entirely and names the unreliability itself.
// - Works alone: one plain English word, spelled so any reader gets it
//   instantly, and short enough to be a network name.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Flaky";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
