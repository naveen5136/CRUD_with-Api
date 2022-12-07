import { Router, Routes,Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddStudent from './CRUD/AddStudent';
import Edit from './CRUD/Edit';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/edit/:id' element={<Edit/>}></Route>
    <Route path='/' element={<AddStudent/>}></Route>
    </Routes>
    </BrowserRouter>
   
     
    </div>
  );
}

export default App;
