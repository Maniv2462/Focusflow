export default function Taskform(){
    return(
        <form>
            <div>
                <input type="text" placeholder="Enter the task"/>
                <button type="submit">Add Task</button>
            </div>
            <div>
                <select name="" id="">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select name="" id="">
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}