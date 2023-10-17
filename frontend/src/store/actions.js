export function setLocationData(location) {
    return {
        type: "SET_LOCATION_DATA",
        payload: location,
    }
};

const initialState = {
    location: "",
};

export const locationReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_LOCATION_DATA":
            return {...state, location: action.payload};
        default:
            return state;
    }
}