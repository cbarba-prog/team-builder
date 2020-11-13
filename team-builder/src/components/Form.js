import React, {useState} from 'react';
import List from './List'


const Form = () => {

    const initialFormValues = {
    name:"",
    email: "",
    role: ""
    }

    const [team, setTeam] = useState([{ 
        name: "", 
        email: "", 
        role: ""
      }])
      const [formValues, setFormValues] = useState(initialFormValues)

      const onChange = (event) => { 
          const {name, value} = event.target
          setFormValues({...formValues, [name]: value})
      }

      const clearForm = () => { 
          setFormValues(initialFormValues)
      }

      const handleSubmit = (event)=> { 
          event.preventDefault()
          const newTeammate = { 
              name:formValues.name.trim(),
              email:formValues.email.trim(),
              role:formValues.role.trim()
          }
          setTeam([...team, newTeammate])
          clearForm()

      }
    return ( 
    <div className="app-container">
        
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-container"> 
            Name:  <input name='name' 
            type='text'
            value={formValues.name}
            onChange={onChange}/>
            </div>
            <div className="input-container">
            Email: <input name='email' 
            type='text' 
            value={formValues.email}
            onChange={onChange}/>
            </div>
            <div className="input-container"> 
            Role: <input name='role' 
            type='text'
            value={formValues.role}
            onChange={onChange}/>
            </div>  
            <button>Submit</button>  
        </form>
    <List team={team}/>
    </div> );
}
 
export default Form;