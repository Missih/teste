import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './defaultTheme'

export const Theme = ({ children, theme = defaultTheme }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
