import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {step3} from '../ducks/reducer'

class Wizard3 extends Component{
    constructor(){
        super();
        this.state={
            image:''
        }
        this.handleImage=this.handleImage.bind(this)
    }

    handleImage(e){
        this.setState({image: e.target.value})
    }

    render(){
        console.log(this.props)
        return(
            <div className='wizard'>
            <div className='subHeader'>
                <div className='boxSize'>
                    <div id='subTitle'>Add new listing</div>
                </div>
                <Link to='/dashboard'><button className='cancelBtn'>Cancel</button></Link>
            </div>
        <div><img alt='A pic' src={require('../images/step3.png')}/></div>
        <div>
            Image URL
            <input onChange={this.handleImage}/>
        </div>
        <div >
           <Link to='/wizard/2'><button className='previousStepBtn'>previous step</button></Link>
           <Link to='/wizard/4'> <button onClick={()=>this.props.step3(this.state.image)} className='nextStepBtn'>Next Step</button></Link>
            </div>
        </div>
        )
    }
}
function mapStateToProps(state){
    return{
        propertyName: state.propertyName,
        propertyDescription: state.propertyDescription,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        image: state.image
    }
}
export default connect(mapStateToProps,{step3})(Wizard3)