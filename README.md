# :panda_face: PandaCSS preset with a unique className for every utility

Unique className for every utility in `@pandacss/preset-base`. Useful when using atomic styling and you want to avoid conflicts between utilities or setting up deduplication of classes based on properties.

## Installation

```bash
# npm
npm install -D @brendon1555/panda-preset-unique-utilities

# yarn
yarn add -D @brendon1555/panda-preset-unique-utilities

# pnpm
pnpm add -D @brendon1555/panda-preset-unique-utilities
```

## Usage

Add the preset to your PandaCSS configuration (`panda.config.ts`)  
This example assumes you are not using `eject: true` in your PandaCSS configuration as we are extending the utilities included in `@pandacss/preset-base`

```ts
import { defineConfig } from "@pandacss/dev";

import uniqueUtilsPreset from "@brendon1555/panda-preset-unique-utilities";

export default defineConfig({
  presets: [
    uniqueUtilsPreset,
    // Be sure to include the panda preset if you want
    // to keep the defaults provided by PandaCSS.
    // See: https://panda-css.com/docs/customization/presets
    "@pandacss/preset-panda",
  ],
});
```