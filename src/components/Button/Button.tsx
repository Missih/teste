import React, { FC } from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.size.xs.value};
    line-height: ${({ theme }) => theme.line.height.tight.value};
    border: ${({ theme }) => theme.border.radius.size.none.value};
    padding: ${({ theme }) => theme.spacing.squish.size.sm.stack.value};

    font-weight: ${({ theme }) => theme.font.weight.medium.value};
    color: ${({ theme }) => theme.color.neutral[1].value};
    background-color: ${({ theme }) => theme.color.brand.primary[3].value};

    &:hover {
        background-color: ${({ theme }) => theme.color.brand.primary[4].value};
    }
`

export const Button: FC<{ label: string }> = ({ label }) => {
    return <ButtonComponent>{label}</ButtonComponent>
}
