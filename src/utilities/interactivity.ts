import type { UtilityConfig } from "@pandacss/types";

export const interactivity: UtilityConfig = {
  accentColor: {
    className: "accent",
    values: "colors",
  },
  caretColor: {
    className: "caret",
    values: "colors",
  },
  scrollBehavior: {
    className: "scroll",
  },
  scrollbar: {
    className: "scrollbar",
    values: ["visible", "hidden"],
    transform(value) {
      if (value === "visible") {
        return {
          msOverflowStyle: "auto",
          scrollbarWidth: "auto",
          "&::-webkit-scrollbar": {
            display: "block",
          },
        };
      }
      if (value === "hidden") {
        return {
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        };
      }
    },
  },
  scrollMargin: {
    className: "scroll-m",
    values: "spacing",
  },
  scrollMarginX: {
    className: "scroll-m-x",
    values: "spacing",
    property: "scrollMarginInline",
    transform(value) {
      return {
        scrollMarginInline: value,
      };
    },
  },
  scrollMarginY: {
    className: "scroll-m-y",
    values: "spacing",
    property: "scrollMarginBlock",
    transform(value) {
      return {
        scrollMarginBlock: value,
      };
    },
  },
  scrollMarginLeft: {
    className: "scroll-ml",
    values: "spacing",
  },
  scrollMarginRight: {
    className: "scroll-mr",
    values: "spacing",
  },
  scrollMarginTop: {
    className: "scroll-mt",
    values: "spacing",
  },
  scrollMarginBottom: {
    className: "scroll-mb",
    values: "spacing",
  },
  scrollMarginBlock: {
    className: "scroll-my",
    values: "spacing",
  },
  scrollMarginBlockEnd: {
    className: "scroll-mye",
    values: "spacing",
  },
  scrollMarginBlockStart: {
    className: "scroll-mys",
    values: "spacing",
  },
  scrollMarginInline: {
    className: "scroll-mx",
    values: "spacing",
  },
  scrollMarginInlineEnd: {
    className: "scroll-mxe",
    values: "spacing",
  },
  scrollMarginInlineStart: {
    className: "scroll-mxs",
    values: "spacing",
  },
  scrollPadding: {
    className: "scroll-p",
    values: "spacing",
  },
  scrollPaddingBlock: {
    className: "scroll-py",
    values: "spacing",
  },
  scrollPaddingBlockStart: {
    className: "scroll-pys",
    values: "spacing",
  },
  scrollPaddingBlockEnd: {
    className: "scroll-pye",
    values: "spacing",
  },
  scrollPaddingInline: {
    className: "scroll-px",
    values: "spacing",
  },
  scrollPaddingInlineEnd: {
    className: "scroll-pxe",
    values: "spacing",
  },
  scrollPaddingInlineStart: {
    className: "scroll-pxs",
    values: "spacing",
  },
  scrollPaddingX: {
    className: "scroll-p-x",
    values: "spacing",
    property: "scrollPaddingInline",
    transform(value) {
      return {
        scrollPaddingInline: value,
      };
    },
  },
  scrollPaddingY: {
    className: "scroll-p-y",
    values: "spacing",
    property: "scrollPaddingBlock",
    transform(value) {
      return {
        scrollPaddingBlock: value,
      };
    },
  },
  scrollPaddingLeft: {
    className: "scroll-pl",
    values: "spacing",
  },
  scrollPaddingRight: {
    className: "scroll-pr",
    values: "spacing",
  },
  scrollPaddingTop: {
    className: "scroll-pt",
    values: "spacing",
  },
  scrollPaddingBottom: {
    className: "scroll-pb",
    values: "spacing",
  },
  scrollSnapAlign: {
    className: "snap-align",
  },
  scrollSnapStop: {
    className: "snap-stop",
  },
  scrollSnapType: {
    className: "snap-type",
    values: {
      none: "none",
      x: "x var(--scroll-snap-strictness)",
      y: "y var(--scroll-snap-strictness)",
      both: "both var(--scroll-snap-strictness)",
    },
  },
  scrollSnapStrictness: {
    className: "strictness",
    values: ["mandatory", "proximity"],
    transform(value) {
      return {
        "--scroll-snap-strictness": value,
      };
    },
  },
  scrollSnapMargin: {
    className: "snap-m",
    values: "spacing",
  },
  scrollSnapMarginTop: {
    className: "snap-mt",
    values: "spacing",
  },
  scrollSnapMarginBottom: {
    className: "snap-mb",
    values: "spacing",
  },
  scrollSnapMarginLeft: {
    className: "snap-ml",
    values: "spacing",
  },
  scrollSnapMarginRight: {
    className: "snap-mr",
    values: "spacing",
  },
  touchAction: {
    className: "touch",
  },
  userSelect: {
    className: "select",
    transform(value) {
      return {
        WebkitUserSelect: value,
        userSelect: value,
      };
    },
  },
};
