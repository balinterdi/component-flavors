import Component, { tracked } from 'sparkles-component';

//NOTE: sparkles-component is a not an Ember Class, so you can't extend it

// export default Component.extend({
// });

export default class SparklesRatingComponent extends Component {
  @tracked('args')
  get stars() {
    let stars = [];
    let maxRating = this.args.maxRating || 5;
    for (let i=1; i <= maxRating; i++) {
      stars.push({ rating: i, isFull: this.args.rating >= i });
    }
    return stars;
  }
}
