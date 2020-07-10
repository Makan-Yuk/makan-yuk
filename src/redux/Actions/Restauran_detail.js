const GET_RESTAURANT_DETAIL = "GET_RESTAURANT_DETAIL";

const getRestaurantDetails = (datas) => {
    return {
        type: GET_RESTAURANT_DETAIL,
        datas,
    };
};

const fetchRestaurantDetails = () => async (dispatch) => {
    const url =
        "https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}";
    const option = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "user-key": "fbc186efae066a9143548813c862cc77",
        },
    };

    const response = await fetch(url, option);
    const result = await response.json();
    console.log(result)
    dispatch(getRestaurantDetails(result));
};

export { GET_RESTAURANT_DETAIL, getRestaurantDetails, fetchRestaurantDetails };