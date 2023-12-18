import PostDetailPage from './components/postDetailPage';
import LandingPage from './views/landingPage';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/details/:id' element={<PostDetailPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
