import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Shape } from '../Shape'

export default {
    title: 'Components/Shape',
    component: Shape,
} as ComponentMeta<typeof Shape>

const Template: ComponentStory<typeof Shape> = (args) => (
    <div
        style={{
            position: 'relative',
            border: '40px solid rgba(12, 238, 47, 0.32)',
            backgroundColor: '#fff',
            height: 430,
            width: 300,
        }}
    >
        <Shape {...args} />
    </div>
)

export const ShapeComponent = Template.bind({})
