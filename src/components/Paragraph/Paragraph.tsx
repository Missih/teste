import React, { FC } from 'react'
import styled from 'styled-components'

const ParagraphContent = styled.p`
    font-size: ${({ theme }) => theme.font.size.xs.value};
    line-height: ${({ theme }) => theme.line.height.distant.value};
    font-weight: ${({ theme }) => theme.font.weight.regular.value};
    color: ${({ theme }) => theme.color.neutral[4].value};
    margin-bottom: ${({ theme }) => theme.spacing.size.xs.value};
`

export const Paragraph: FC<{ content: string }> = ({ content }) => {
    return <ParagraphContent>{content}</ParagraphContent>
}
