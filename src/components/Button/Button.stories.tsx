import React from "react";

import {ComponentStory, ComponentMeta} from '@storybook/react';

import { ButtonProps} from "./Button";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'solid',
    label: 'Primary',
    size: 'sm',
}

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    variant: 'outline',
    label: 'Secondary',

}

// Standard Buttons
// primary, secondary, success, warning, danger

// Outlined Buttons
// same but with primary color on Border

// Icon Buttons

// Floating Action Button