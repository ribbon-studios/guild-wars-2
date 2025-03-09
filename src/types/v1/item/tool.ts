import { BaseItem, ItemType } from './base';

export type ToolItem = BaseItem & {
  type: ItemType.TOOL;

  /**
   * Tool specific properties.
   */
  tool: {
    /**
     * The tool type.
     */
    type: 'Salvage';

    /**
     * The number of charges of the tool.
     */
    charges: number;
  };
};
