import { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

export const SubtitleSmall: FC<{ content: string }> = ({ content }) => {
    const { font, color, line, spacing } = useContext(ThemeContext)

    const SubtitleSmall = styled.h5`
        font-size: ${font.size.md.value};
        line-height: ${line.height.medium.value};
        font-weight: ${font.weight.medium.value};
        color: ${color.neutral[4].value};
        margin-bottom: ${spacing.size.xxs.value};
    `
    return <SubtitleSmall>{content}</SubtitleSmall>
}
