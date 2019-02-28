export function initialize(application) {
  application.inject('controller', 'coolness', 'service:coolness');
}

export default {
  initialize
};
