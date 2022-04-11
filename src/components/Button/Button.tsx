import React, { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

export const Button: FC<{ label: string }> = ({ label }) => {
    const { font, color, border, spacing, line } = useContext(ThemeContext)

    // styled theme?
    const Button = styled.button`
        cursor: pointer;
        font-size: ${font.size.xs.value};
        line-height: ${line.height.tight.value};
        border: ${border.radius.size.none.value};
        padding: ${spacing.squish.size.sm.stack.value};

        font-weight: ${font.weight.medium.value};
        color: ${color.neutral[1].value};
        background-color: ${color.brand.primary[3].value};

        &:hover {
            background-color: ${color.brand.primary[4].value};
        }
    `
    return <Button>{label}</Button>
}
