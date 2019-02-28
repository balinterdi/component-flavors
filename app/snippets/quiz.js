/*
BEGIN-SNIPPET quiz-code-panel
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
END-SNIPPET
*/

/*
BEGIN-SNIPPET quiz-star-rating
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  init() {
    this._super();
    this.maxRating = this.maxRating || 5;
  }
});
END-SNIPPET
*/
