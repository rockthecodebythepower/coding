const SPACE_PIXELS_VALUE = 8;

export const spacing = (spaceV, spaceH) =>
  spaceH !== null && spaceH !== undefined
    ? `${spaceV * SPACE_PIXELS_VALUE}px ${spaceH * SPACE_PIXELS_VALUE}px`
    : `${spaceV * SPACE_PIXELS_VALUE}px`;
