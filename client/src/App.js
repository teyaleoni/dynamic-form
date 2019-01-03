import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  state = {
    form: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      this.setState({
        form: resp.data
      })
    })
  }


  

  render() {
    let fieldResult = []
    this.state.form.forEach(field => {
      if (field.type === "text") {
        fieldResult.push(
        <div key = {field.id}>
          <i className = {"fa " + field.icon}/> <input type = {field.type} placeholder={field.label}/>
        </div>
        )
        
  
      } else if (field.type === "email") {
        fieldResult.push(
          <div key = {field.id}>
          <i className = {"fa " + field.icon} /><input type = {field.type} placeholder={field.label}/>
        </div>)


      } else if (field.type === "select"){
        fieldResult.push(
            <select key={field.id}>
              <option value= "lang">Select Language</option>
              {field.options.map((opt, i) => {
                return <option key={'opt' + i} value={opt.value}>{opt.label}</option>
              })}
            </select>
          

      )} else if (field.type === "textarea") {
        fieldResult.push( 
        <div key = {field.id}>
          <i className = {"fa " + field.icon} /><input type = {field.type} placeholder={field.label}/>
        </div>)

      } else if (field.type === "tel") {
        fieldResult.push(
        <div key = {field.id}>
          <i className = {"fa " + field.icon} /><input type = {field.type} placeholder={field.label}/>
        </div>
        )
      }
    })

    return (
      <div>
        <h1>Sign Up For My Web App!</h1>
        {fieldResult}
        <button>Submit</button>
      </div>
      
    )
    
  }
}

export default App;
