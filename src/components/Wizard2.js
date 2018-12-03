import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {step2} from '../ducks/reducer'


class Wizard2 extends Component {
    constructor() {
        super();
        this.state = {
            address:'',
            city:'',
            state:'',
            zip:''
        }
        this.handleAddress=this.handleAddress.bind(this)
        this.handleCity=this.handleCity.bind(this)
        this.handleState=this.handleState.bind(this)
        this.handleZip=this.handleZip.bind(this)
        
    }
    handleAddress(e){
        this.setState({address: e.target.value})
    }
    handleCity(e){
        this.setState({city: e.target.value})
    }
    handleState(e){
        this.setState({state: e.target.value})
    }
    handleZip(e){
        this.setState({zip: e.target.value})
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
                <div><img alt='' src={require('../images/step2.png')} /></div>
                <div>

                    <div className='addressIn'>
                        <h2>Address</h2>
                        <input  onChange={this.handleAddress} />
                    </div>
                    <br></br>
                    <div className='cityAddressIn'>
                        <h2>City</h2>

                        <input onChange={this.handleCity} className='inputSmall' />
                        <br></br>
                        <h2>State</h2>
                        <input onChange={this.handleState} className='inputSmall' />
                    </div>
                    <div className='zipIn'>
                        <h2>Zip</h2>
                        <input onChange={this.handleZip} className='inputSmall' />
                    </div>
                    <div >
                        <Link to='/wizard/1'><button  className='previousStepBtn'>previous step</button></Link>
                        <Link to='/wizard/3'> <button onClick={()=> this.props.step2(this.state.address, this.state.city, this.state.state, this.state.zip)} className='nextStepBtn'>Next Step</button></Link>

                    </div>
                </div >

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
        zip: state.zip
    }
}
export default connect(mapStateToProps,{step2})(Wizard2)