import { GET_RESTAURANT_DETAILS } from "../Actions";

const initialState = {
    selectedRestaurant: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANT_DETAILS:
            return {
                ...state,
                selectedRestaurant: action.payload,
            };
        default:
            return state;
    }
};