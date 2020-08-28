export const Sizes = {
  small: "576",
  medium: "768",
  large: "992",
  xl: "1200"
};

export const Devices = {
  small: `@media only screen and (min-width: ${Sizes.small}px)`,
  medium: `@media only screen and (min-width: ${Sizes.medium}px)`,
  large: `@media only screen and (min-width: ${Sizes.large}px)`,
  xl: `@media only screen and (min-width: ${Sizes.xl}px)`
};
