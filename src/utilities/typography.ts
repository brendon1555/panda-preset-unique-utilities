import type { UtilityConfig } from "@pandacss/types";

export const typography: UtilityConfig = {
  color: {
    className: "color",
    values: "colors",
  },
  fontFamily: {
    className: "font-f",
    values: "fonts",
  },
  fontSize: {
    className: "fs",
    values: "fontSizes",
  },
  fontWeight: {
    className: "font-w",
    values: "fontWeights",
  },
  fontSmoothing: {
    className: "smoothing",
    values: {
      antialiased: "antialiased",
      "subpixel-antialiased": "auto",
    },
    transform(value) {
      return {
        WebkitFontSmoothing: value,
      };
    },
  },
  fontVariantNumeric: {
    className: "numeric",
  },
  letterSpacing: {
    className: "tracking",
    values: "letterSpacings",
  },
  lineHeight: {
    className: "leading",
    values: "lineHeights",
  },
  textAlign: {
    className: "text-align",
  },
  textDecoration: {
    className: "text-decor",
  },
  textDecorationColor: {
    className: "text-decor-col",
    values: "colors",
  },
  textEmphasisColor: {
    className: "text-emphasis-col",
    values: "colors",
  },
  textDecorationStyle: {
    className: "decoration-style",
  },
  textDecorationThickness: {
    className: "decoration-thick",
  },
  textUnderlineOffset: {
    className: "underline-offset",
  },
  textTransform: {
    className: "text-trans",
  },
  textIndent: {
    className: "indent",
    values: "spacing",
  },
  textShadow: {
    className: "text-shadow",
    values: "shadows",
  },
  textOverflow: {
    className: "text-ov",
  },
  verticalAlign: {
    className: "align",
  },
  wordBreak: {
    className: "break",
  },
  textWrap: {
    className: "text-wrap",
    values: ["wrap", "balance", "nowrap"],
    transform(value) {
      return { textWrap: value };
    },
  },
  truncate: {
    className: "truncate",
    values: { type: "boolean" },
    transform(value) {
      if (!value) return {};
      return {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      };
    },
  },
  lineClamp: {
    className: "clamp",
    transform(value) {
      if (value === "none") {
        return {
          WebkitLineClamp: "unset",
        };
      }
      return {
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: value,
        WebkitBoxOrient: "vertical",
      };
    },
  },
};
