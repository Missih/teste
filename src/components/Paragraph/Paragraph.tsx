import { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

export const Paragraph: FC<{ content: string }> = ({ content }) => {
    const { font, color, line, spacing } = useContext(ThemeContext)

    const Paragraph = styled.p`
        font-size: ${font.size.xs.value};
        line-height: ${line.height.distant.value};
        font-weight: ${font.weight.regular.value};
        color: ${color.neutral[4].value};
        margin-bottom: ${spacing.size.xs.value};
    `
    return <Paragraph>{content}</Paragraph>
}
