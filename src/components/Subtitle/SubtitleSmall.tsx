import React, { FC } from 'react'
import styled from 'styled-components'

const SubtitleSmallComponent = styled.h5`
    font-size: ${({ theme }) => theme.font.size.md.value};
    line-height: ${({ theme }) => theme.line.height.medium.value};
    font-weight: ${({ theme }) => theme.font.weight.medium.value};
    color: ${({ theme }) => theme.color.neutral[4].value};
    margin-bottom: ${({ theme }) => theme.spacing.size.xxs.value};
`

export const SubtitleSmall: FC<{ content: string }> = ({ content }) => {
    return <SubtitleSmallComponent>{content}</SubtitleSmallComponent>
}
