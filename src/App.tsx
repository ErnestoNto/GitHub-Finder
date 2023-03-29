import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './Routes'

import classes from './App.module.css'

function App() {

  return (
    <BrowserRouter >
      <h1 className={classes.h1}>GitHub Fider</h1>
      <RoutesApp />
    </BrowserRouter>
  )
}

export default App
