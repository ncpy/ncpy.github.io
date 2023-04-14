import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const WorkItems = ({ item }) => {

  return (
    <div className="work__card" key={item.id}>
      <div className='work__img__container'>
        <img className='work__img' src={item.image} alt="" />
        <div class="work__tags">
          {Object.keys(item.technologies).map((tech) =>
            <>
              <img src={item.technologies[tech]} alt="" data-tooltip-id={`my_tooltip_${tech}`} data-tooltip-content={tech} />
              <Tooltip id={`my_tooltip_${tech}`} />
            </>
          )}
          {/* <i class='bx bxl-javascript' style={{ fontSize: '3em'}}></i> */}
        </div>
      </div>
      <h3 className="work__title">{item.title}</h3>

      <div className='code__demo__button'>
        <a href={item.source_github} className="work__button" target="_blank">Github</a>
        <a href={item.source_demo} className="work__button fill" target="_blank">Live Demo</a>
      </div>
    </div>
  )
}

export default WorkItems