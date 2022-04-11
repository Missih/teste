import { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

export const HeadingSmall: FC<{ content: string }> = ({ content }) => {
    const { font, color, line, spacing } = useContext(ThemeContext)

    const HeadingSmall = styled.h4`
        font-size: ${font.size.lg.value};
        line-height: ${line.height.distant.value};
        font-weight: ${font.weight.bold.value};
        color: ${color.neutral[5].value};
        margin-bottom: ${spacing.size.xxxs.value};
    `
    return <HeadingSmall>{content}</HeadingSmall>
}
