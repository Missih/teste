import { CardContent } from './components'
import { Theme as ThemeProvider } from './styles/themes'
import GlobalStyle from './styles/global'

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <CardContent
                buttonLabel="Button Label"
                heading="Heading SM"
                subtitle="Subtitle SM"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled."
            />
        </ThemeProvider>
    )
}

export default App
