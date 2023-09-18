import type { Preset } from "@pandacss/types";

import { utilities } from "./utilities";

const definePreset = <T extends Preset>(preset: T) => preset;

export const preset = definePreset({
  utilities: {
    extend: utilities,
  },
});

export default preset;
