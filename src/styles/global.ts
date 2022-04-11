import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    
    body{
        background: ${({ theme }) => theme.color.neutral[2].value};
        font-size: ${({ theme }) => theme.font.size.xs.value};
        font-family: ${({ theme }) => theme.font.family.highlight.value};
    }
    `
