import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './defaultTheme'

export const Theme: FC = ({ children, theme = defaultTheme }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
