import React, { Component } from 'react'
import axios from 'axios';



export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: ''
        }
        this.login=this.login.bind(this)
        this.register=this.register.bind(this)
    }

    login() {
        const { username, password } = this.state
        if (username && password) {
            axios.post('/api/login', { username: username, password: password }).then(res => {
                console.log(res.data)
                if (res.data.length !== 0) {
                    this.props.history.push('/dashboard')
                } else {
                    alert('Wrong')
                }
            })
        } else {
            alert('Please fill in both fields')
        }
    }
    register() {
        const {username, password} = this.state
        if(username && password) {
          axios.post('/api/register', {username: username.toLowerCase(), password: password}).then(res => {
            if (res.data.length !== 0) {
              console.log(res.data)
                        this.props.history.push('/dashboard')
                    } else {
                        alert('Error')
                    }
          })
        } else {
          this.setState({error: 'Please fill in both fields'})
        }
      }

    render() {
        console.log(this.props)
        return (
            <div>
                <img alt="hello"></img>
                <h1>Houser</h1>
                <div>
                    <h3>UserName</h3>
                    <input onChange={(e) => this.setState({ username: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={(e) => this.setState({ password: e.target.value })} />
                    <div>
                        <button onClick={()=>this.login()}>Login</button>
                        <button onClick={()=>this.register()}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}