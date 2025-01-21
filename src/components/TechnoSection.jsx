
import { useEffect } from 'react'
import {useTooltip} from '../hooks/useTooltip.js'

import '../styles/TechnoSection.css'

export const TechnoSection = ({ list }) => {
    const {getTooltip, disposeTooltip} = useTooltip()

    useEffect(() => {
        const tooltipList = getTooltip()

        return () => {
            disposeTooltip(tooltipList)
        };

    }, []) 
    return (
        <div className='technoSec'>
            {
                list.map((tech, i) => (
                    <div data-bs-toggle="tooltip" data-bs-title={tech.name} key={i} className='card techMS'>
                        <img src={tech.logo} alt="" />
                    </div>
                ))
            }

        </div>
    )
}
