import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HeadingSmall } from '../HeadingSmall'

export default {
    title: 'Components/HeadingSmall',
    component: HeadingSmall,
} as ComponentMeta<typeof HeadingSmall>

const Template: ComponentStory<typeof HeadingSmall> = (args) => (
    <HeadingSmall {...args} />
)

export const HeadingSm = Template.bind({})
HeadingSm.args = {
    content: 'Heading SM',
}
