import React, { FC } from 'react'
import styled from 'styled-components'
import { Shape, Button, HeadingSmall, SubtitleSmall, Paragraph } from '../index'

type CardProps = {
    heading: string
    subtitle: string
    paragraph: string
    buttonLabel: string
}

const CardContentComponent = styled.div`
    background-color: ${({ theme }) => theme.color.neutral[1].value};
    width: 400px;
`

export const CardContent: FC<CardProps> = ({
    heading,
    subtitle,
    paragraph,
    buttonLabel,
}) => {
    return (
        <CardContentComponent>
            <Shape>
                <HeadingSmall content={heading} />
                <SubtitleSmall content={subtitle} />
                <Paragraph content={paragraph} />
                <Button label={buttonLabel} />
            </Shape>
        </CardContentComponent>
    )
}
