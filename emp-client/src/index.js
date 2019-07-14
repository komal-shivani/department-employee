import React from 'react'
import ReactDOM from 'react-dom'
import EmployeeForm from './components/employee/list'

class App extends React.Component{
    render(){
        return(
            <div>
                <h3>employee details</h3>
                <EmployeeForm/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))