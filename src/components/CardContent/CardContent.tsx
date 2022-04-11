import { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Shape, Button, HeadingSmall, SubtitleSmall, Paragraph } from '../index'

type CardProps = {
    heading: string
    subtitle: string
    paragraph: string
    buttonLabel: string
}

export const CardContent: FC<CardProps> = ({
    heading,
    subtitle,
    paragraph,
    buttonLabel,
}) => {
    const theme = useContext(ThemeContext)

    const CardContent = styled.div`
        background-color: #fff;
        width: 300px;
    `

    return (
        <CardContent>
            <Shape>
                <HeadingSmall content={heading} />
                <SubtitleSmall content={subtitle} />
                <Paragraph content={paragraph} />
                <Button label={buttonLabel} />
            </Shape>
        </CardContent>
    )
}
