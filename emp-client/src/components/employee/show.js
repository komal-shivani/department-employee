import React from 'react'
import axios from 'axios'

class EmployeeShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            department:''
        }
    }

    componentDidMount() {
        const id = this.props.id
        axios.get(`http://localhost:3003/employees/${id}`)
            .then(response => {
                this.setState(() => ({
                    name: response.data.name,
                    department: response.data.department.name


                }))
            })
    }


    render() {
        return (
            <div>
                <h2>Name: {this.state.name}</h2>
                <h2>Department: {this.state.department}</h2>
            </div>
        )
    }
}

export default EmployeeShow
