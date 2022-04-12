import React, { FC } from 'react'
import styled from 'styled-components'

const HeadingSmallComponent = styled.h4`
    font-size: ${({ theme }) => theme.font.size.lg.value};
    line-height: ${({ theme }) => theme.line.height.distant.value};
    font-weight: ${({ theme }) => theme.font.weight.bold.value};
    color: ${({ theme }) => theme.color.neutral[5].value};
    margin-bottom: ${({ theme }) => theme.spacing.size.xxxs.value};
`

export const HeadingSmall: FC<{ content: string }> = ({ content }) => {
    return <HeadingSmallComponent>{content}</HeadingSmallComponent>
}
