import { useState } from "react"

const AddTask = () => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <div className="form-control">
            <label>Day and time</label>
            <input type='text' placeholder="Add Day and Time"/>
        </div>

        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type='checkbox'/>
        </div>

        <input className="btn btn-block" type='submit' value='Save task' />
    </form>
  )
}

export default AddTask