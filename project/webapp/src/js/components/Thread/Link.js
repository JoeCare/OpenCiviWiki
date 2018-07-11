import { View } from 'backbone.marionette';
import linkTemplate from 'Templates/components/Thread/link.html';

const ThreadLink = View.extend({
  tagName: 'div',
  className: 'list-item left-align',
  template: linkTemplate,
});

export default ThreadLink;
