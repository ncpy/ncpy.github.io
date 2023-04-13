import Python from '../../assets/python_48.png'
import Java from '../../assets/java_48.png'
import JavaScript from '../../assets/javascript_48.png'
import TypeScript from '../../assets/typescript_48.png'
import React from '../../assets/react_48.png'
import NodeJS from '../../assets/nodejs_48.png'
import Node from '../../assets/node_48.png'
import PostgreSQL from '../../assets/postgresql_48.png'
import Prisma from '../../assets/prisma_48.png'

const WorkItems = ({ item }) => {

  return (
    <div className="work__card" key={item.id}>
      <div className='work__img__container'>
        <img className='work__img' src={item.image} alt="" />
        <div class="work__tags">
          {item.technologies.map(tech => <img src={tech} alt=""></img>)}
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