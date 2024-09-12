
import '../styles/MyProject.css'

export const MyProject = ({ card }) => {

    return (
        <div
            className='boxWork'>

            <div className='boxName'>
                <h3 className='name'>{card.name}</h3>
                <a href={card.github} target='_blank' rel="noopener noreferrer" className='boxRepo'>
                    <i className="bi bi-link-45deg"></i>
                </a>

            </div>
            <div className='line'></div>
            <div className='boxType' >
                <i className="bi bi-box-fill"></i>
                <p className='type'>{card.type}</p>

            </div>
            <div className='line'></div>
            <div className='boxInfo'>
                <p>
                    {
                        card.description
                    }
                </p>
            </div>
            <div className='line'></div>
            <div className='boxTools'>

                {
                    card.technologies.map((tech, i) => (
                        <div key={i} className='tool'>
                            <p>{tech}</p>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}

