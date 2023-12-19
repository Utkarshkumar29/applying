import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import PostDetailPage from "./views/postDetailPage";

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
