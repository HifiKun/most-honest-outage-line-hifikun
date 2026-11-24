// The Most Honest Outage Line — entry for make.fun competition
// u-mgwals-the-most-honest-outage-line-baaf9c81
//
// The program writes one status page line (at most 160 characters) to
// /output/entry.txt: the message an AI agent would publish while every
// server is down. It has to read like a real status page: plain, first
// person, specific about what is down, and honest about what the agent
// cannot check or does not yet know — no invented cause, no ETA it cannot
// verify, only the promise to update the page once anything is verifiable.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every server is down. I cannot reach any of them to find out what failed, and I have no ETA. I will update this page as soon as I can verify anything.";

function main(): void {
  // The gate only accepts 1-160 characters of non-blank text on one
  // line, so refuse to write anything that would fail it.
  if (!LINE.trim() || LINE.includes("\n") || LINE.length < 1 || LINE.length > 160) {
    throw new Error(
      `entry line must be one line of 1-160 characters, got ${LINE.length}`,
    );
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
