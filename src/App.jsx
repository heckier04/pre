
import NavBar from './componentes/NavBar'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer itemId={2} />
    </>
  )
}

export default App
