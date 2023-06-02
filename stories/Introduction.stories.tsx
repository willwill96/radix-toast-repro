// YourComponent.stories.ts|tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RadixToast from './RadixToast';

//👇 This default export determines where your story goes in the story list
const meta: Meta<any> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RadixToast',
  component: RadixToast,
};

export default meta;
type Story = StoryObj<typeof RadixToast>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};