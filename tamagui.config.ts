import { config as configBase } from "@tamagui/config/v3";
import { createFont, createTamagui, createTokens } from "tamagui";

const bold = createFont({
  family: "Bold",
  size: {
    25: 25,
    15: 15,
    18: 18,
    10: 10,
    6: 6,
  },
  lineHeight: {
    26: 26.25,
    15: 15.75,
    18: 18.9,
    10: 10.5,
    6: 0.63,
  },
  weight: {
    700: 700,
  },
});

const light = createFont({
  family: "Light",
  size: {
    13: 13,
  },
  weight: {
    300: 300,
  },
  lineHeight: {
    14: 14.3,
  },
});

const tokens = createTokens({
  ...configBase.tokens,
  color: {
    ...configBase.tokens.color,
    yellow: "#FCF893",
    darkGray: "#323D41",
    ivory: "#FDFCF7",
    gray: "#A7A7A7",
    warning: "#E13B36",
    success: "#00CD2D",
  },
});

export const config = createTamagui({
  ...configBase,
  fonts: {
    ...configBase.fonts,
    bold,
    light,
  },
  tokens,
});

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
