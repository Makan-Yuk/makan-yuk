import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRestaurantDetails } from '../../redux/Actions';

function RestaurantDetail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const restaurantDetails = useSelector(
        (state) => state.restaurant.selectedRestaurant
    );

    useEffect(() => {
        dispatch(getRestaurantDetails(id));

        // eslint-disable-next-line
    }, []);

    const restaurantView = restaurantDetails !== null && (
        <>
            <img src={restaurantDetails.thumb} alt={restaurantDetails.name} />
            <h1>{restaurantDetails.name}</h1>
            <p>{restaurantDetails.location.address}</p>
            <p>
                Average price for 2 persons:{' '}
                {restaurantDetails.average_cost_for_two}
            </p>
        </>
    );

    return <div>{restaurantView}</div>;
}

export default RestaurantDetail;

