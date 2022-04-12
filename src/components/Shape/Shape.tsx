import { FC } from 'react'
import styled from 'styled-components'

const ShapeComponent = styled.div`
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
`

export const Shape: FC = ({ children }) => {
    return <ShapeComponent>{children}</ShapeComponent>
}
