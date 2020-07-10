import {GET_RESTAURANT_DETAIL} from '../Actions/Restauran_detail'


const initialState = {
    selectedRestaurant: null,
};
export default (state = initialState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case GET_RESTAURANT_DETAIL:
      return actions.datas;

    default:
      return state;
  }
};
