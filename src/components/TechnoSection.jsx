

import '../styles/TechnoSection.css'

export const TechnoSection = ({ list }) => {
    return (
        <div className='technoSec'>
            {
                list.map((image, i) => (
                    <div key={i} className='card techMS'>
                        <img src={image} alt="" />
                    </div>
                ))
            }

        </div>
    )
}
