import {GET_RESTAURANT} from '../Actions/Restaurant'
const initialState = [];

export default (state = initialState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case GET_RESTAURANT:
      return actions.datas;

    default:
      return state;
  }
};
