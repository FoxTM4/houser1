import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../ducks/reducer'

class Header extends Component {
    constructor(){
        super();
        this.state={

        }
        this.logout=this.logout.bind(this)
    }
  

    logout(){
        axios.get('/auth/logout').then(()=>{
            this.props.updateUser({})
        })
    }

    render(){
    return (
        <div className='header'>
            <div className="titleBox">
                <h1 className='titleHouser'>Houser</h1>
                <div id='dashboard'>Dashboard</div>
            </div>
            <div onClick={this.logout} className='logout'>Logout</div>
        </div>
    )
    }
}
function mapStateToProps(state){
    return{
        recommendedRent: state.recommendedRent,
        monthlyMortgage: state.monthlyMortgage,
        loanAmount: state.loanAmount,
        propertyName: state.propertyName,
        propertyDescription: state.propertyDescription,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        image: state.image
    }
}
export default connect(mapStateToProps, {updateUser})(Header)