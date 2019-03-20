import { configure } from '@storybook/react';

function loadStories() {
  require('../client/ts/stories/Component.stories');
}

configure(loadStories, module);
