import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Theme'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Articles from './pages/Articles'
import Header from './components/Header'
import Switch from 'react-switch'
import { useDarkMode } from './components/useDarkMode'
import Toggle from './components/Toggler'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import appCss from './app.css'



function App() {

  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (<ThemeProvider theme={themeMode} >
    <>
    <div className='app'>

    
      <GlobalStyles />
          <Header theme={theme} toggleTheme={themeToggler}/>
          <NavBar />
          
        <Routes>
          <Route path='/react-bootstrap-portfolio' element={<Home/>}/>
          <Route path='react-bootstrap-portfolio/projects' element={<Projects/>}/>
          <Route path='react-bootstrap-portfolio/articles' element={<Articles/>}/>
    
        </Routes>
        <Footer />
        </div>
    </>
    
  </ThemeProvider>

  );
}

export default App;
