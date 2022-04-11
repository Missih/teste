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
    heading: 'Heading SM',
    subtitle: 'Subtitle SM',
    paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    buttonLabel: 'Button Label',
}
