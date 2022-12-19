const space_pixel_value = 8

export const spacing = (spaceV, spaceH) =>
  spaceH !== null && spaceH !== undefined ?
    `${spaceV * space_pixel_value}px ${spaceH * space_pixel_value}px` :
    `${spaceV * space_pixel_value}px`