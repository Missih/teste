import { Theme as ThemeProvider } from '../src/styles/themes'
import GlobalStyle from '../src/styles/global'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    ),
]
