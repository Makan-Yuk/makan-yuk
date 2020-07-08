import React, { useEffect } from "react";
import {
    Col,
    Card,
    CardBody,
    CardDeck,
    CardText,
    CardImg, 
} from "reactstrap";
import { fetchRestaurant } from "../../redux/Actions/Restaurant.js";
import { connect } from "react-redux";


function Restaurant(props) {
    useEffect(() => {
        props.dispatch(fetchRestaurant());
        
        //eslint-disable-next-line
    }, []);

    
    return (
        <>
           {props.resto.restaurants !== undefined &&
                    props.makan.restaurants.map((data) => {
                    return (
                    <span>{data.restaurant
                        .phone_numbers}</span>
                    );
                })}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        resto: state.resto,
    };
};

export default connect(mapStateToProps, null)(Restaurant);
