import type { UtilityConfig } from "@pandacss/types";

export const layout: UtilityConfig = {
  aspectRatio: {
    className: "aspect",
    values: {
      auto: "auto",
      square: "1 / 1",
      landscape: "4 / 3",
      portrait: "3 / 4",
      wide: "16 / 9",
      ultrawide: "18 / 5",
      golden: "1.618 / 1",
    },
  },
  boxDecorationBreak: {
    className: "decoration",
    transform(value) {
      return {
        boxDecorationBreak: value,
        WebkitBoxDecorationBreak: value,
      };
    },
  },
  zIndex: {
    className: "z",
    values: "zIndex",
  },
  boxSizing: {
    className: "box",
  },

  objectPosition: {
    className: "object-pos",
  },
  objectFit: {
    className: "object-fit",
  },

  overscrollBehavior: {
    className: "overscroll",
  },
  overscrollBehaviorX: {
    className: "overscroll-x",
  },
  overscrollBehaviorY: {
    className: "overscroll-y",
  },

  position: {
    className: "pos",
    shorthand: "pos",
  },
  top: {
    className: "top",
    values: "spacing",
  },
  left: {
    className: "left",
    values: "spacing",
  },
  insetInline: {
    className: "inset-i",
    values: "spacing",
  },
  insetBlock: {
    className: "inset-b",
    values: "spacing",
  },
  inset: {
    className: "inset",
    values: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
  },
  insetBlockEnd: {
    className: "inset-ye",
    values: "spacing",
  },
  insetBlockStart: {
    className: "inset-ys",
    values: "spacing",
  },
  insetInlineEnd: {
    className: "inset-xe",
    values: "spacing",
    shorthand: ["insetEnd", "end"],
  },
  insetInlineStart: {
    className: "inset-xs",
    values: "spacing",
    shorthand: ["insetStart", "start"],
  },
  right: {
    className: "right",
    values: "spacing",
  },
  bottom: {
    className: "bottom",
    values: "spacing",
  },
  insetX: {
    className: "inset-x",
    values: "spacing",
    property: "insetInline",
    transform(value) {
      return {
        insetInline: value,
      };
    },
  },
  insetY: {
    className: "inset-y",
    values: "spacing",
    property: "insetBlock",
    transform(value) {
      return {
        insetBlock: value,
      };
    },
  },
  float: {
    className: "float",
    values: ["left", "right", "start", "end"],
    transform(value) {
      if (value === "start") {
        return {
          float: "left",
          '[dir="rtl"] &': {
            float: "right",
          },
        };
      }

      if (value === "end") {
        return {
          float: "right",
          '[dir="rtl"] &': {
            float: "left",
          },
        };
      }

      return {
        float: value,
      };
    },
  },
  visibility: {
    className: "vis",
  },
};
