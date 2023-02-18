import React from 'react';
import { HashRouter, BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from './Layouts/PublicPageLayout'
import Home from './Home';
import AboutOne from './AboutOne';
import AboutTwo from './AboutTwo';
import AboutThree from './AboutThree';
import AboutFour from './AboutFour';
import AboutFive from './AboutFive';
function App() {
  return (
    <HashRouter>
      <Routes> 
        <Route  exact path="/"  element={ <PublicPageLayout/>}>
          <Route path="" element={<Home />} />
          <Route path="about-1" element={<AboutOne />} />
          <Route path="about-2" element={<AboutTwo />} />
          <Route path="about-3" element={<AboutThree />} />
          <Route path="about-4" element={<AboutFour />} />
          <Route path="about-5" element={<AboutFive />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
