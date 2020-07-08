import { GET_USER_REGISTER } from "../Actions/Register";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_USER_REGISTER:
            console.log(actions.data);
            return actions.data;

        default:
            return state;
    }
};