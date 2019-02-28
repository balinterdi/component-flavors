import Service from '@ember/service';

export default class CoolnessService extends Service {
  key = 'component-flavors:coolness-factor';

  constructor() {
    super();
    this._initFactor();
  }

  get factor() {
    return JSON.parse(window.localStorage.getItem(this.key));
  }

  _initFactor() {
    if (!this.factor) {
      let inititalValues = {
        classic: "?",
        namedArgs: "?",
        templateOnly: "?",
        angleBracket: "?",
        sparkles: "?",
      };
      window.localStorage.setItem(this.key, JSON.stringify(inititalValues));
    }
  }
}
