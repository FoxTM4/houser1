var initialState={
    user:{},
    propertyName:'',
    propertyDescription: '',
    address:'',
    city:'',
    state:'',
    zip:'',
    image:'',
    loanAmount:'',
    monthlyMortgage:'',
    desiredRent:'',
    recommendedRent:''
}

const UPDATE_USER = 'UPDATE_USER'
const STEP_ONE = 'STEP_ONE'
const STEP_TWO = 'STEP_TWO'
const STEP_THREE = 'STEP_THREE'
const STEP_FOUR = 'STEP_FOUR'
const STEP_FIVE = 'STEP_FIVE'


export function updateUser(data){
    return{
        type: UPDATE_USER,
        payload: data
    }
}

export function step1(propertyName, propertyDescription){
    return{
        type: STEP_ONE,
        payload: {propertyName, propertyDescription}
    }
}

export function step2(address, city, state,zip){
    return{
        type: STEP_TWO,
        payload: {address, city, state,zip}
    }
}
export function step3(image){
    return{
        type: STEP_THREE,
        payload: {image}
    }
}
export function step4(loanAmount, monthlyMortgage, recommendedRent){
    return{
        type: STEP_FOUR,
        payload: {loanAmount, monthlyMortgage, recommendedRent}
    }
}

export function step5(desiredRent){
    return{
        type: STEP_FIVE,
        payload: {desiredRent}
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USER:
        return Object.assign({}, state, {user: action.payload})
        case STEP_ONE:
        return Object.assign({}, state, {propertyName: action.payload.propertyName, propertyDescription: action.payload.propertyDescription})
        case STEP_TWO:
        return Object.assign({}, state, {address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip} )
        case STEP_THREE:
        return Object.assign({}, state, {image: action.payload.image})
        case STEP_FOUR:
        return Object.assign({}, state, {loanAmount: action.payload.loanAmount, monthlyMortgage: action.payload.monthlyMortgage, recommendedRent: action.payload.recommendedRent})
        case STEP_FIVE:
        return Object.assign({}, state, {desiredRent: action.payload.desiredRent})
        default:
        return state;
    }

    
}