// One Emoji, One Smile — entry program.
// Writes exactly one emoji to /output/entry.txt and nothing else.
// Deterministic and offline: no input, no randomness, no network, no time.
//
// Choice: 🌞 (sun with face). Warmth at first glance — a smiling sun reads
// as kind and cheerful to any stranger, with no irony, intimacy or in-joke.
// It is picked rather than default: not the first plain smiley that comes to
// mind, yet instantly readable at a glance. A plain 🙂 or 😊 would lose on
// the "chosen rather than default" criterion, and hearts or hugs would risk
// reading as intimate coming from a stranger.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌞";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
