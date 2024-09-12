
import { useLanguage } from '../hooks/useLanguage'
import { MyProject } from '../components/MyProject'
import '../styles/MyProjects.css'

export const MyProjects = () => {
    const { translation } = useLanguage()
    return (
        <div className='boxMyProjects'>
            <div className='boxTitlePro container'>
                <h2 className='titlePro'>
                    {translation.projects.title}.
                </h2>
            </div>
            <div className='portfolio container'>
                {
                    translation.projects.portfolio.map((project) => (
                        <MyProject key={project.id} card={project} />
                    ))
                }
            </div>


        </div>
    )
}
