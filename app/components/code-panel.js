import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  init() {
    this._super();
    this.activeBlocks = this.blocks.reduce((active, block) => {
      active[block.id] = true;
      return active;
    }, {});
  },

  actions: {
    toggleActiveBlock(blockId) {
      let currentState = this.activeBlocks[blockId];
      set(this.activeBlocks, blockId, !currentState);
    }
  }
});
