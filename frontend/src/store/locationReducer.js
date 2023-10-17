const initialState = {
    locationData: null,
};

const locationReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_LOCATION_DATA":
            return { ...state, locationData: action.payload };
        default:
            return state;
    }
}

export default locationReducer;