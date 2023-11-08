
import './App.css'
import AppRoutes from './Routes/AppRoutes'
import DrawerAppBar from './components/DrawerAppBar'
import { ErrorBoundary } from 'react-error-boundary'
import "leaflet/dist/leaflet.css";

function App() {
  
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <DrawerAppBar />
        <AppRoutes />
      </ErrorBoundary>

    </>
  )
}

export default App
