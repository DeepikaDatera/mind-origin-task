import { useEffect } from 'react';
import './App.css'
import { WebcontextProvider } from './context/WebContext'
import Dasbhoard from './pages/dashboard/Dasbhoard'
import { generateToken } from './notification/firebase';
function App() {
  useEffect(() => {
    generateToken().then((token) => {
      if (token) {
        new Notification("Welcome!", {
          body: "Thanks for visiting our Mindorigin Portfolio 🎉",
        });
      }
    });
  }, []);
  return (
    <WebcontextProvider>
      <Dasbhoard />
    </WebcontextProvider>
  )
}

export default App
