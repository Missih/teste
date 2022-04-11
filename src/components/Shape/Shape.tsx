import { FC } from 'react'
import styled from 'styled-components'

export const Shape: FC = ({ children }) => {
    const Shape = styled.div`
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
    `

    return <Shape>{children}</Shape>
}
