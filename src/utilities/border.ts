import type { UtilityConfig } from "@pandacss/types";

export const border: UtilityConfig = {
  borderRadius: {
    className: "rounded",
    shorthand: "rounded",
    values: "radii",
  },
  borderTopLeftRadius: {
    className: "rounded-tl",
    shorthand: "roundedTopLeft",
    values: "radii",
  },
  borderTopRightRadius: {
    className: "rounded-tr",
    shorthand: "roundedTopRight",
    values: "radii",
  },
  borderBottomRightRadius: {
    className: "rounded-br",
    shorthand: "roundedBottomRight",
    values: "radii",
  },
  borderBottomLeftRadius: {
    className: "rounded-bl",
    shorthand: "roundedBottomLeft",
    values: "radii",
  },
  borderTopRadius: {
    className: "rounded-t",
    shorthand: "roundedTop",
    property: "borderRadius",
    values: "radii",
    transform(value) {
      return {
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      };
    },
  },
  borderRightRadius: {
    className: "rounded-r",
    shorthand: "roundedRight",
    property: "borderRadius",
    values: "radii",
    transform(value) {
      return {
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      };
    },
  },
  borderBottomRadius: {
    className: "rounded-b",
    shorthand: "roundedBottom",
    property: "borderRadius",
    values: "radii",
    transform(value) {
      return {
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      };
    },
  },
  borderLeftRadius: {
    className: "rounded-l",
    shorthand: "roundedLeft",
    values: "radii",
    property: "borderRadius",
    transform(value) {
      return {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      };
    },
  },
  borderStartStartRadius: {
    className: "rounded-ss",
    shorthand: "roundedStartStart",
    values: "radii",
  },
  borderStartEndRadius: {
    className: "rounded-se",
    shorthand: "roundedStartEnd",
    values: "radii",
  },
  borderStartRadius: {
    className: "rounded-s",
    values: "radii",
    property: "borderRadius",
    shorthand: "roundedStart",
    transform(value) {
      return {
        borderStartStartRadius: value,
        borderEndStartRadius: value,
      };
    },
  },
  borderEndStartRadius: {
    className: "rounded-es",
    shorthand: "roundedEndStart",
    values: "radii",
  },
  borderEndEndRadius: {
    className: "rounded-ee",
    shorthand: "roundedEndEnd",
    values: "radii",
  },
  borderEndRadius: {
    className: "rounded-e",
    shorthand: "roundedEnd",
    property: "borderRadius",
    values: "radii",
    transform(value) {
      return {
        borderStartEndRadius: value,
        borderEndEndRadius: value,
      };
    },
  },
  border: {
    className: "border",
    values: "borders",
  },
  borderColor: {
    className: "border-c",
    values: "colors",
  },
  borderInline: {
    className: "border-x",
    values: "borders",
    shorthand: "borderX",
  },
  borderInlineWidth: {
    className: "border-xw",
    values: "borderWidths",
    shorthand: "borderXWidth",
  },
  borderInlineColor: {
    className: "border-xc",
    values: "colors",
    shorthand: "borderXColor",
  },
  borderBlock: {
    className: "border-y",
    values: "borders",
    shorthand: "borderY",
  },
  borderBlockWidth: {
    className: "border-yw",
    values: "borderWidths",
    shorthand: "borderYWidth",
  },
  borderBlockColor: {
    className: "border-yc",
    values: "colors",
    shorthand: "borderYColor",
  },
  borderLeft: {
    className: "border-l",
    values: "borders",
  },
  borderLeftColor: {
    className: "border-lc",
    values: "colors",
  },
  borderInlineStart: {
    className: "border-xs",
    values: "borders",
    shorthand: "borderStart",
  },
  borderInlineStartWidth: {
    className: "border-xsw",
    values: "borderWidths",
    shorthand: "borderStartWidth",
  },
  borderInlineStartColor: {
    className: "border-xsc",
    values: "colors",
    shorthand: "borderStartColor",
  },
  borderRight: {
    className: "border-r",
    values: "borders",
  },
  borderRightColor: {
    className: "border-rc",
    values: "colors",
  },
  borderInlineEnd: {
    className: "border-xe",
    values: "borders",
    shorthand: "borderEnd",
  },
  borderInlineEndWidth: {
    className: "border-xew",
    values: "borderWidths",
    shorthand: "borderEndWidth",
  },
  borderInlineEndColor: {
    className: "border-xec",
    values: "colors",
    shorthand: "borderEndColor",
  },
  borderTop: {
    className: "border-t",
    values: "borders",
  },
  borderTopColor: {
    className: "border-tc",
    values: "colors",
  },
  borderBottom: {
    className: "border-b",
    values: "borders",
  },
  borderBottomColor: {
    className: "border-bc",
    values: "colors",
  },
  borderBlockEnd: {
    className: "border-be",
    values: "borders",
  },
  borderBlockEndColor: {
    className: "border-bec",
    values: "colors",
  },
  borderBlockStart: {
    className: "border-bs",
    values: "borders",
  },
  borderBlockStartColor: {
    className: "border-bsc",
    values: "colors",
  },
};
