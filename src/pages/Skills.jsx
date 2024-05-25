import { useLanguage } from '../hooks/useLanguage'
import '../styles/Skills.css'

export const Skills = () => {

  const {translation} = useLanguage()
  
  return (
    <div className="boxSkills">
      <h2 className='sectionTitle'>{translation.skills.title}</h2>
      <div className='boxGrid'>
        
        <div className='boxFront boxType'>
          <h3 className='skillTitle'>{translation.skills.frontend}</h3>
          <ul className='listSkills'>
            <li className='skill'>React JS</li>
            <li className='skill'>HTML</li>
            <li className='skill'>CSS</li>
            <li className='skill'>Angular</li>
            <li className='skill'>Javascript</li>
            <li className='skill'>ES6</li>
            <li className='skill'>Typescript</li>
            <li className='skill'>Bootstrap</li>
            <li className='skill'>ASP.NET MVC</li>
          </ul>
        </div>
        <div className='boxBack boxType'>
          <h3 className='skillTitle'>{translation.skills.backend}</h3>
          <ul className='listSkills'>
            <li className='skill'>C#</li>
            <li className='skill'>ASP.NET</li>
            <li className='skill'>Entity Framework Core</li>
            <li className='skill'>ADO.NET</li>
            <li className='skill'>SQL</li>
            <li className='skill'>Node JS</li>
            <li className='skill'>Express</li>
            <li className='skill'>MongoDB</li>
            <li className='skill'>Mongoose</li>
          </ul>
        </div>
        <div className='boxTools boxType'>
          <h3 className='skillTitle'>{translation.skills.tools}</h3>
          <ul className='listSkills'>
            <li className='skill'>Visual Studio</li>
            <li className='skill'>VS Code</li>
            <li className='skill'>Swagger</li>
            <li className='skill'>Insomnia</li>
            <li className='skill'>Postman</li>
            <li className='skill'>SOLID Principles</li>
            <li className='skill'>Design Patterns</li>
            <li className='skill'>GitHub</li>
            <li className='skill'>Regular Expressions</li>
            <li className='skill'>Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
