import './App.css';
import Navbar from './Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DisplayAll from './DisplayAll';
import ReviewDisplayByMovie from './ReviewDisplayByMovie';
import CreateMovie from './CreateMovie';
import CreateReview from './CreateReview';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="movie/create" element={<CreateMovie />} />
        <Route exact path="movie/get-all" element={<DisplayAll />} />
        <Route exact path="review/create" element={<CreateReview/>}/>
        <Route exact path="review/get-by-movie/:id" element={<ReviewDisplayByMovie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
