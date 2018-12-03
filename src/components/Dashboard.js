import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            properties: [],
            desiredRentInput: ''
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleInput=this.handleInput.bind(this)
        this.handleReset=this.handleReset.bind(this)


    }
    componentDidMount() {
        axios.get('/api/properties').then(res => {
            this.setState({ properties: res.data })
            
        })
    }

    handleDelete(index) {
        axios.delete(`/api/properties/${index}`).then(res => {
         
            this.setState({ properties: res.data })

        })
    }

    handleReset(){
        this.setState({desiredRentInput: '',})
    }

    handleInput(e){
        this.setState({desiredRentInput: e.target.value})
    }   

    render() {
        console.log(this.state)
        let filteredHouses= this.state.properties.filter((property)=>{
            return property.desired_rent > this.state.desiredRentInput;
        })
        return (
            <div className='dashboard'>
                <div className='newBtnBox'>
                    <Link to='./wizard/1'> <button className='addNewBtn'>Add new Property</button></Link>
                </div>
                <div className='searchBox'>
                    <div className='inputLine'>List properties with "desired rent" greator than: $<input value={this.state.desiredRentInput} type='number' onChange={this.handleInput}/></div>
                    <button>Filter</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>


                <div className='listingsBox'>
                    <h2>Home listings</h2>
                    <div className='eachListingBox'>
                        {filteredHouses.map((property) => {
                            return (
                                <div id='theMap' key={property.property_id}>
                                    <div className='imgBox'><img src={property.image} alt='This is a house' /></div>
                                    <div className='nameDesBox'>
                                        <div className='name'>{property.property_name}</div>
                                        <div className='description'>{property.property_description}</div>
                                    </div>
                                    <div className='detailsBox'>
                                        <ul>
                                            <li>Loan: ${property.loan_amount}</li>
                                            <li>Monthly Mortgage: ${property.monthly_mortgage}</li>
                                            <li>Recommended Rent: ${property.recommended_rent}</li>
                                            <li>Desired Rent: ${property.desired_rent}</li>
                                            <li>Address: {property.address}</li>
                                            <li>City: {property.city}</li>
                                            <li>State: {property.state}</li>
                                            <li>Zip: {property.zip}</li>
                                        </ul>
                                    </div>
                                    <div onClick={() => this.handleDelete(property.property_id)}>X</div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        )
    }
}