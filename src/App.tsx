import { CardContent } from './components'
import { Theme as ThemeProvider } from './styles/themes'
import GlobalStyle from './styles/global'

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <CardContent />
        </ThemeProvider>
    )
}

export default App
