import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {step1} from '../ducks/reducer'

class Wizard1 extends Component {
    constructor() {
        super();
        this.state = {
            propertyName: '',
            propertyDescription:''
        }
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this)
        this.handleNameChange=this.handleNameChange.bind(this)
        
    }

    handleNameChange(e){
        this.setState({propertyName: e.target.value})
    }
    handleDescriptionChange(e){
        this.setState({propertyDescription: e.target.value})
    }

    render() {
        // console.log(this.props)
        console.log(this.state)
        return (
            <div className='wizard'>
                <div className='subHeader'>
                    <div className='boxSize'>
                        <div id='subTitle'>Add new listing</div>
                    </div>
                   <Link to='/dashboard'><button className='cancelBtn'>Cancel</button></Link> 
                </div>
            <div><img alt='A pic' src={require('../images/step1.png')}/></div>

            <div className='body1'>
            <div className='propName'>
            <h2 className='propNameT'>Property Name</h2>
            <input value={this.state.propertyName} onChange={this.handleNameChange}/>
            </div>
            <br></br>
            <h2 className='wizard1H'>Property Description</h2>
            <input value={this.state.propertyDescription} onChange={this.handleDescriptionChange} className='descriptionInput'/>
            <div >
           <Link to='/wizard/2'> <button onClick={()=>this.props.step1(this.state.propertyName, this.state.propertyDescription)} className='nextStepBtn'>Next Step</button></Link>
            </div>
            


        </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        propertyName: state.propertyName,
        propertyDescription: state.propertyDescription
    }
}
export default connect(mapStateToProps, {step1})(Wizard1)