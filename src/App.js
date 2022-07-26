import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage/Homepage'
import About from './About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage';
import Business from './Bussiness/Bussiness';
import Contact from './Contact';
import Careers from './Careers/Careers';
import Media from './Media';
import Investor from './Investor';
import Security from './Security';
import AboutOverview from './About/Overview';
import Vision from './About/Vision';
import Directors from './About/Directors';
import Management from './About/Management';
import BussinessOverview from './Bussiness/Overview';
import Recruitment from './Bussiness/Recruitment';
import Productdevelopment from './Bussiness/Productdevelopment';
import Advisor from './Bussiness/Advisors'
import Backendverification from './Bussiness/Backendverification';
import Sass from './Bussiness/Sass';
import Projects from './About/Projects';
import Digitalmarketing from './Bussiness/Digitalmarketing'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Mainpage />}>        
            <Route index element={<Homepage />}></Route>
            <Route exact path='about' element={<About />}>
              <Route index element={<AboutOverview />}></Route>
              <Route  path='vision' element={<Vision />}></Route>
              <Route  path='directors' element={<Directors />}></Route>
              <Route path='management' element={<Management />}></Route>
              <Route path="projects" element={<Projects />}></Route>
            </Route>
            <Route exact path='business' element={<Business />}>
              <Route index element={<BussinessOverview />}></Route>
              <Route  path="recruitment" element={<Recruitment />}></Route>
              <Route  path="advisors" element={<Advisor/>}></Route>
              <Route  path="productdevelopment" element={<Productdevelopment />}></Route>
              <Route  path="backendverification" element={<Backendverification />}></Route>
              <Route path="sass" element={<Sass />}></Route>
              <Route  path="digitalmarketing" element={<Digitalmarketing />}></Route>
            </Route>
            <Route  path='careers' element={<Careers />}></Route>
            <Route  path='media' element={<Media />}></Route>
            <Route  path='investor' element={<Investor />}></Route>
            <Route  path='security' element={<Security />}></Route>
            <Route  path='contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
