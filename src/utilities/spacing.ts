import type { UtilityConfig, PropertyValues } from "@pandacss/types";

const marginValues: PropertyValues = (theme) => ({
  auto: "auto",
  ...theme("spacing"),
});

export const spacing: UtilityConfig = {
  padding: {
    className: "p",
    shorthand: "p",
    values: "spacing",
  },
  paddingLeft: {
    className: "pl",
    shorthand: "pl",
    values: "spacing",
  },
  paddingRight: {
    className: "pr",
    shorthand: "pr",
    values: "spacing",
  },
  paddingTop: {
    className: "pt",
    shorthand: "pt",
    values: "spacing",
  },
  paddingBottom: {
    className: "pb",
    shorthand: "pb",
    values: "spacing",
  },
  paddingBlock: {
    className: "py",
    values: "spacing",
    shorthand: ["py", "paddingY"],
  },
  paddingBlockEnd: {
    className: "pye",
    values: "spacing",
  },
  paddingBlockStart: {
    className: "pys",
    values: "spacing",
  },
  paddingInline: {
    className: "px",
    values: "spacing",
    shorthand: ["paddingX", "px"],
  },
  paddingInlineEnd: {
    className: "pxe",
    shorthand: ["pe", "paddingEnd"],
    values: "spacing",
  },
  paddingInlineStart: {
    className: "pxs",
    shorthand: ["ps", "paddingStart"],
    values: "spacing",
  },

  marginLeft: {
    className: "ml",
    shorthand: "ml",
    values: marginValues,
  },
  marginRight: {
    className: "mr",
    shorthand: "mr",
    values: marginValues,
  },
  marginTop: {
    className: "mt",
    shorthand: "mt",
    values: marginValues,
  },
  marginBottom: {
    className: "mb",
    shorthand: "mb",
    values: marginValues,
  },
  margin: {
    className: "m",
    shorthand: "m",
    values: marginValues,
  },
  marginBlock: {
    className: "my",
    values: marginValues,
    shorthand: ["my", "marginY"],
  },
  marginBlockEnd: {
    className: "mye",
    values: marginValues,
  },
  marginBlockStart: {
    className: "mys",
    values: marginValues,
  },
  marginInline: {
    className: "mx",
    values: marginValues,
    shorthand: ["mx", "marginX"],
  },
  marginInlineEnd: {
    className: "mxe",
    shorthand: ["me", "marginEnd"],
    values: marginValues,
  },
  marginInlineStart: {
    className: "mxs",
    shorthand: ["ms", "marginStart"],
    values: marginValues,
  },
};
