import './App.css';
import Navbar from './components/navbar/navbar.js';
import SectionOne from './components/section_one/section_one.js'
import SectionTwo from './components/section_two/section_two.js'

function App() {
  return (
  <div className="App">
    <Navbar />

    <SectionOne />

    <SectionTwo />
    <SectionOne />
  </div>
  );
}

export default App;
