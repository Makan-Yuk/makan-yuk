import React, { useEffect } from "react";
import { fetchRestaurantDetails } from "../../redux/Actions/Restauran_detail";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function RestaurantDetail(props) {
    let {id} = useParams();
    
    useEffect(() => {
        props.dispatch(fetchRestaurantDetails(id));

        // eslint-disable-next-line
    }, []);

     return (
        <div>
            <div></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      resto: state.resto,
    };
  };
  
export default connect(mapStateToProps, null)(RestaurantDetail);
