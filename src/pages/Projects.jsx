
import { useLanguage } from '../hooks/useLanguage'
import { FaGithub } from "react-icons/fa";
import '../styles/Projects.css'

export const Projects = () => {

  const { translation } = useLanguage()

  return (
    <div className="boxProjects">
      <h2
        className='sectionTitle'
      >
        {translation.projects.title}
      </h2>
      {
        translation.projects.portfolio.map((x) => (
          <div key={x.id} className='project'>
            <div className='boxCard'>
              <div className='boxTitle'>
                <h3 className='title'>
                  {x.name}
                </h3>
              </div>
              <div className={`boxDescription`}>
                <p className='description'>{x.description}</p>
              </div>
              <ul className='boxTechno'>
                {
                  x.technologies.map((y, index) => (
                    <li key={index} className='techno'>{y}</li>
                  ))
                }
              </ul>
              <div className='boxLinks'>
                <a target='_blank' href={x.github}><FaGithub /></a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
