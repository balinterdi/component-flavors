// BEGIN-SNIPPET star-rating
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['rating-panel'],

  rating: 0,
  maxRating: 5,
  onClick() {},

  stars: computed('rating', 'maxRating', function() {
    let stars = [];
    for (let i=1; i <= this.maxRating; i++) {
      stars.push({ rating: i, isFull: this.rating >= i });
    }
    return stars;
  }),

  actions: {
    setRating(newRating) {
      return this.onClick(newRating);
    }
  }

});
// END-SNIPPET
