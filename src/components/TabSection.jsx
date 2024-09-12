import { useState } from 'react'

import '../styles/TabSection.css'

export const TabSection = ({ translation, onDataChange }) => {

    const [isBackend, setIsBackend] = useState(true)
    const [isFrontend, setIsFrontend] = useState(false)
    const [isTools, setIsTools] = useState(false)

    const setStates = (x, y, z) => {
        setIsBackend(x)
        setIsFrontend(y)
        setIsTools(z)
        const result = {
            isBackend: x,
            isFrontend: y,
            isTools: z
        }

        return result

    }

    const setActive = (e) => {
        let result = {}
        switch (e.currentTarget.name) {
            case "backend":
                result = setStates(true, false, false)
                break;
            case "frontend":
                result = setStates(false, true, false)
                break;
            case "tools":
                result = setStates(false, false, true)
                break;
            default:
                break;
        }

        onDataChange(result)
    }
    const backendSelector = isBackend ? 'sectionActive' : ''
    const frontendSelector = isFrontend ? 'sectionActive' : ''
    const toolsSelector = isTools ? 'sectionActive' : ''

    return (
        <ul className="nav  boxTabSection ">
            <li className={`nav-item itemSection ${backendSelector}`}>

                <button onClick={(e) => setActive(e)} className="nav-link"
                    name='backend'
                >{translation.skills.backend}</button>
            </li>
            <li className={`nav-item itemSection ${frontendSelector}`}>
                <button onClick={(e) => setActive(e)} className="nav-link" name='frontend'
                >{translation.skills.frontend}</button>
            </li>
            <li className={`nav-item itemSection ${toolsSelector}`}>
                <button onClick={(e) => setActive(e)} className="nav-link"
                    name='tools'>
                    <i className="bi bi-tools"></i>
                </button>
            </li>

        </ul>
    )
}
