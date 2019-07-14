import React from 'react'
import axios from 'axios'
import EmployeeShow from './show';

class EmployeeForm extends React.Component{
    constructor(){
        super()
        this.state={
            departments:[],
            department:'',
            employees:[],
            employee:'',
            isClicked:false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3003/departments`)
            .then((response) => {
                console.log(response.data)
                this.setState(() => ({
                    departments: response.data
                }))
            })
    }
    handleChangedept=(e)=>{
        const id=e.target.value
        console.log(id)
        axios.get(`http://localhost:3003/departments/${id}`)
        .then(response=>{
            console.log(response.data.employees)
            this.setState(()=>({
                employees:response.data.employees
            }))
        })
    }
    handleSumbit=(e)=>{
        e.preventDefault()
       this.setState((prevState)=>({
           isClicked:!prevState.isClicked
       }))
    }
    handleChangeemp=(e)=>{
      e.persist()
      this.setState(()=>({
          employee:e.target.value
      }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                    <label> Departments
                        <select value={this.state.department} onChange={this.handleChangedept}>
                            <option value="">select</option>
                            {this.state.departments.map((dprt)=>{
                                return <option key={dprt._id}
                                value={dprt._id}>{dprt.name}</option>
                            })}
                        </select>
                    </label>
                    

                    <label>Employees
                        <select value={this.state.employee} onChange={this.handleChangeemp}>
                            <option value="">select</option>
                            {this.state.employees.map((empItem)=>{
                                return <option key={empItem.employee._id} value={empItem.employee._id}>{empItem.employee.name}</option>
                            })}
                        </select>
                    </label> 

                    <input type="submit" value='Get details'/>

                </form>
                    {console.log(this.state.isClicked)}
                {this.state.isClicked && <EmployeeShow id={this.state.employee}/>}
            </div>
        )
    }
}
export default EmployeeForm