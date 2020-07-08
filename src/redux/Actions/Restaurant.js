const GET_RESTAURANT = "GET_RESTAURANT";

const getRestaurant = (datas) => {
    return {
        type: GET_RESTAURANT,
        datas,
    };
};

const fetchRestaurant = () => async (dispatch) => {
    const url =
        "https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city";
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
    dispatch(getRestaurant(result));
};

export { GET_RESTAURANT, getRestaurant, fetchRestaurant };