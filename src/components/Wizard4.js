import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {step4} from '../ducks/reducer'

class Wizard4 extends Component{
    constructor(){
        super();
        this.state={
            loanAmount:'',
            monthlyMortgage:'',
            recommendedRent:'',
            percent: .25,
        }
        this.handleMortgage=this.handleMortgage.bind(this)
        this.handleLoan=this.handleLoan.bind(this)
    }

    handleLoan(e){
        this.setState({loanAmount: e.target.value})
    }
    
    handleMortgage(e){
        this.setState({monthlyMortgage: e.target.value},this.handleRecommendedRent)
    }
    handleRecommendedRent(){
        const {monthlyMortgage,percent}= this.state
        let addedAmount = monthlyMortgage * percent
        let recommendedRent = +monthlyMortgage + addedAmount;
        this.setState({recommendedRent: recommendedRent})
    }
    

    render(){
        console.log(this.props)
        // console.log(this.state)
        return(
            <div className='wizard'>
            <div className='subHeader'>
                <div className='boxSize'>
                    <div id='subTitle'>Add new listing</div>
                </div>
                <Link to='/dashboard'><button className='cancelBtn'>Cancel</button></Link>
            </div>
        <div><img alt='A pic' src={require('../images/step4.png')}/></div>
        <div>
            <div>Loan Amount</div>
            <input onChange={this.handleLoan}/>
            <div>Monthly Mortgage</div>
            <input onChange={this.handleMortgage}/>
            
        </div>
        <div >
        <Link to='/wizard/3'><button className='previousStepBtn'>previous step</button></Link>
           <Link to='/wizard/5'> <button onClick={()=>this.props.step4(this.state.loanAmount,this.state.monthlyMortgage, this.state.recommendedRent)} className='nextStepBtn'>Next Step</button></Link>
            </div>
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
export default connect(mapStateToProps, {step4})(Wizard4)