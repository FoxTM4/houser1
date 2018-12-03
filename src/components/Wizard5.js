import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {step5} from '../ducks/reducer'
import axios from 'axios';


class Wizard5 extends Component {
    constructor() {
        super();
        this.state = {
            desiredRent:'',

            
        }

        this.handleDesiredRent=this.handleDesiredRent.bind(this)
        this.handleComplete=this.handleComplete.bind(this)
        this.quoteValidation=this.quoteValidation.bind(this)
    }

    handleDesiredRent(e){
        this.setState({desiredRent: e.target.value})
    }

    quoteValidation() {
        const { desiredRent } = this.state
        if (desiredRent) {
            this.handleComplete()
        }
        else { alert("Please provide your desired rent") }
    }

    handleComplete(){
        const {propertyName, propertyDescription, address, city,state, zip, image, loanAmount, monthlyMortgage, desiredRent, recommendedRent} = this.props
        axios.post('/api/auth/register',{propertyName, propertyDescription, address, city, state, zip, image, loanAmount, monthlyMortgage, desiredRent, recommendedRent}).then(()=>{
            console.log('I got to this point')
            this.props.history.push("/dashboard")
        })

    }

    

    render() {
        console.log(this.props)
        return (
            <div className='wizard'>
                <div className='subHeader'>
                    <div className='boxSize'>
                        <div id='subTitle'>Add new listing</div>
                    </div>
                    <Link to='/dashboard'><button className='cancelBtn'>Cancel</button></Link>
                </div>
                <div><img alt='A pic' src={require('../images/step5.png')} /></div>
                <div>
                    <div>Recommended Rent: ${this.props.recommendedRent}</div>
                    Desired Rent: $<input onChange={(e)=>this.props.step5(e.target.value)}/>
                </div>
                <div >
                    <Link to='/wizard/4'><button className='previousStepBtn'>previous step</button></Link>
                    <button onClick={()=>{
                        this.handleComplete()
                    }
                    } className='completeBtn'>complete</button>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        recommendedRent: state.recommendedRent,
        desiredRent: state.desiredRent,
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
export default connect(mapStateToProps, {step5})(Wizard5)