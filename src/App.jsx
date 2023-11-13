import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import AppRoutes from './Routes/AppRoutes'
import DrawerAppBar from './components/DrawerAppBar'
import { ErrorBoundary } from 'react-error-boundary'
import "leaflet/dist/leaflet.css";



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#EF6461',
      },
      secondary: {
        main: '#ce8247',
      },
    },
  });
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <ThemeProvider theme={theme}>
        <DrawerAppBar />
        </ThemeProvider>
        <AppRoutes />
      </ErrorBoundary>

    </>
  )
}

export default App
