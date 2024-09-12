import { useLanguage } from '../hooks/useLanguage'
import { useState } from 'react'
import { TechnoSection } from '../components/TechnoSection'
import { TabSection } from '../components/TabSection'
import '../styles/MySkills.css'


export const MySkills = () => {
    const { translation } = useLanguage()
    const {listBackend, listFrontend, listTools} = translation.skills.icons


    const [isBackend, setIsBackend] = useState(true)
    const [isFrontend, setIsFrontend] = useState(false)
    const [isTools, setIsTools] = useState(false)

    const handleActive = ({ isBackend, isFrontend, isTools }) => {

        setIsBackend(isBackend)
        setIsFrontend(isFrontend)
        setIsTools(isTools)
    }

    return (
        <div className='boxMySkills '>
            <div className='boxTitleMS container'>
                <h2 className='titleMS'>{translation.skills.title}.</h2>

            </div>
            <div className='boxTab container'>
                <TabSection translation={translation} onDataChange={handleActive} />
            </div>
            <div className='boxTechnos container'>
                {
                    isBackend && <TechnoSection list={listBackend} />
                }
                {
                    isFrontend && <TechnoSection list={listFrontend} />
                }
                {
                    isTools && <TechnoSection list={listTools} />
                }
            </div>
        </div>
    )
}


