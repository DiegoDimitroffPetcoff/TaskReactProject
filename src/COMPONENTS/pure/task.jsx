import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({task}) => {
  return (
    <div>
   <h1> Nombre:{ task.name }</h1>
   <h2> Descripcion:{ task.description }</h2>
     <h1> Level:{task.level}</h1>
   <h5>This task is: { task.complete ? 'COMPLETE' : 'PENDING' }</h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task)
}

export default TaskComponent