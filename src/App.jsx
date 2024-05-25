

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'
import { Contact } from './pages/Contact'
import { Nav } from './components/Nav'
import {Footer} from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <header>
      <Nav />
      </header>
      <section>
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills' >
        <Skills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
