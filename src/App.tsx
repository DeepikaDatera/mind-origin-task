import './App.css'
import { WebcontextProvider } from './context/WebContext'
import Dasbhoard from './pages/dashboard/Dasbhoard'

function App() {
  return (
    <WebcontextProvider>
      <Dasbhoard />
    </WebcontextProvider>
  )
}

export default App
