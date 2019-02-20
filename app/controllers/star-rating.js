import Controller from '@ember/controller';

export default Controller.extend({
  blocks: Object.freeze([
    { id: 'component', label: 'Component', snippet: 'star-rating.js' },
    { id: 'template', label: 'Template', snippet: 'star-rating.hbs' },
    { id: 'call', label: 'Call', snippet: 'star-rating-call.hbs' },
    { id: 'html', label: 'HTML', snippet: 'star-rating-classic.html' }
  ]),
});
