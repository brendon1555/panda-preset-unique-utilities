import type { UtilityConfig } from "@pandacss/types";

export const sizing: UtilityConfig = {
  width: {
    className: "w",
  },
  inlineSize: {
    className: "xw",
  },

  minWidth: {
    className: "min-w",
  },
  minInlineSize: {
    className: "min-xw",
  },

  maxWidth: {
    className: "max-w",
  },
  maxInlineSize: {
    className: "max-xw",
  },

  height: {
    className: "h",
  },
  blockSize: {
    className: "yh",
  },

  minHeight: {
    className: "min-h",
  },
  minBlockSize: {
    className: "min-yh",
  },

  maxHeight: {
    className: "max-h",
  },
  maxBlockSize: {
    className: "max-yh",
  },
};
