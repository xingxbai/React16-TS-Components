import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './index';

export default {
  title: 'Example/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Tag',
};

export const Basic = () => {
  return <>
    <Tag type="primary">Primary Tag</Tag>
  </>
}
