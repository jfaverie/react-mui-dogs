import "./styles.css";
import DogPage from "./components/pages/DogPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00a997"
    },
    secondary: {
      main: "#494949"
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <DogPage/>
      </main>
    </ThemeProvider>
  );
}


export default App