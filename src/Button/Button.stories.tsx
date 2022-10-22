import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// // Primary.args = {
// //   // primary: true,
// //   children: 'Button',
// // };
const handleClick = () => {
  alert(1)
}
export const Basic = () => {
  return (
    <>
    <Button type="primary" style={{marginRight: '12px'}} onClick={handleClick}>Primary Button</Button>
    <Button style={{marginRight: '12px'}}>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text" style={{marginRight: '12px'}}>Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
  )
}