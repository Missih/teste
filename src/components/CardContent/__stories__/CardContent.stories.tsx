import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardContent } from '../CardContent'

export default {
    title: 'Components/CardContent',
    component: CardContent,
} as ComponentMeta<typeof CardContent>

const Template: ComponentStory<typeof CardContent> = (args) => (
    <CardContent {...args} />
)

export const Card = Template.bind({})
Card.args = {
    label: 'Card content',
}
