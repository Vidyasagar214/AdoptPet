import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Adopt from './Components/Adopt';
import List from './Components/List';
import Details from './Components/Details';

function App() {
  return (
   <>
   <Routes>
     <Route exact path='' element={<Home/>}/>
     <Route path='/List' element={<List/>}></Route>
     <Route path='/Details/:id' element={<Details/>}></Route>
     <Route path='/Adopt/:id' element={<Adopt/>}></Route>
     </Routes>
   </>
  );
}

export default App;
