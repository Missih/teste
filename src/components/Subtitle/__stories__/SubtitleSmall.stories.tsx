import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SubtitleSmall } from '../SubtitleSmall'

export default {
    title: 'Components/SubtitleSmall',
    component: SubtitleSmall,
} as ComponentMeta<typeof SubtitleSmall>

const Template: ComponentStory<typeof SubtitleSmall> = (args) => (
    <SubtitleSmall {...args} />
)

export const SubtitleTag = Template.bind({})
SubtitleTag.args = {
    content: 'Subtitle SM',
}
