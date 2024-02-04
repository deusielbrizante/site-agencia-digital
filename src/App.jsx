import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/index.jsx';
import Header from './components/Header/index.jsx';
import SectionBanner from './components/SectionBanner/index.jsx';
import SectionWorkExperiences from './components/SectionWorkExperiences/index.jsx';

function App() {
  const [themeDark, setThemeDark] = useState(false)

  const changeTheme = () => {
    setThemeDark(!themeDark)
  }

  return (
    <div className="App">
      <Header themeFunction={changeTheme} theme={themeDark} />
      <SectionBanner theme={themeDark} />
      <SectionWorkExperiences theme={themeDark} />
      <Footer theme={themeDark} />
    </div>
  );
}

export default App;
