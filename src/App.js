import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import DeleteCourse from './components/DeleteCourse';
import ViewCourse from './components/ViewCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddCourse/>}/>
    <Route path='/search' element={<SearchCourse/>}/>
    <Route path='/delete' element={<DeleteCourse/>}/>
    <Route path='/view' element={<ViewCourse/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
