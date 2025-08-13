import SearchBar from './components/searchBar'
import HomePage from './page/HomePage'
import { Route,Routes } from 'react-router-dom'
import ViewPage from './page/ViewPage'
import { movieContext } from './context/ContextProvider'
import { useContext, useEffect } from 'react'

function App() {
const {movieCardView,searchMovie} = useContext(movieContext);

useEffect(() => {
  searchMovie("Batman");
},[])
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/view' element={<ViewPage/>}></Route>
    </Routes>
    
     
  )
}


export default App