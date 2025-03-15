export type Color = {
  /**
   * The name of the dye.
   */
  name: string;

  /**
   * The base RGB values.
   */
  base_rgb: Color.RGB;

  /**
   * Detailed information on its appearance when applied on cloth armor.
   */
  cloth: Color.DetailedInfo;

  /**
   * Detailed information on its appearance when applied on leather armor.
   */
  leather: Color.DetailedInfo;

  /**
   * Detailed information on its appearance when applied on metal armor.
   */
  metal: Color.DetailedInfo;

  /**
   * Detailed information on its appearance when applied on fur armor.
   */
  fur: Color.DetailedInfo;

  /**
   * The item id of the dye.
   */
  item: number;

  /**
   * Categories of the dye.
   */
  categories: string[];
};

export namespace Color {
  export type RGB = [number, number, number];

  export type DetailedInfo = {
    /**
     * The brightness.
     */
    brightness: number;

    /**
     * The contrast.
     */
    contrast: number;

    /**
     * The hue in the HSL colorspace.
     */
    hue: number;

    /**
     * The saturation in the HSL colorspace.
     */
    saturation: number;

    /**
     * The lightness in the HSL colorspace.
     */
    lightness: number;

    /**
     * The precalculated RGB values.
     */
    rgb: RGB;
  };
}
