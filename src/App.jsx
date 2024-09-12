
import { Contact } from './pages/Contact'
import { Nav } from './components/Nav'
import { Main } from './pages/Main'
import { Aboutme } from './pages/Aboutme'
import { MySkills } from './pages/MySkills'
import { MyProjects } from './pages/MyProjects'
import { MyFooter } from './components/MyFooter'
import './App.css'

function App() {

  return (
    <>
      <header>
      <Nav />
      </header>
      <section>
      <section id='home'>
        <Main/>
      </section>
      <section id='about'>
        <Aboutme/>
      </section>
      <section id='skills' >
        <MySkills/>
      </section>
      <section id='projects'>
        <MyProjects/>
      </section>
      <section id='contact'>
        <Contact />
      </section>
      </section>
      <footer>
        <MyFooter/>
      </footer>
    </>
  )
}

export default App
