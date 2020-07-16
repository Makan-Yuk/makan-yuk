import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Badge,
} from "reactstrap";

import { getRestaurantDetails } from "../../redux/Actions";

function RestaurantDetail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const restaurantDetails = useSelector(
      (state) => state.restaurant.selectedRestaurant
    )

    useEffect(() => {
        dispatch(getRestaurantDetails(id));

        // eslint-disable-next-line
    }, []);

    const restaurantView = restaurantDetails !== null && (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5px",
                    marginRight: "5px",
                    marginLeft: "5px",
                }}
            >
                <Card>
                    <CardImg
                        style={{ maxWidth: "700px", maxHeight: "400px" }}
                        top
                        width="100%"
                        src={restaurantDetails.featured_image}
                        alt={restaurantDetails.name}
                    />

                    <CardBody>
                        <CardTitle
                            style={{ fontSize: "20px", fontWeight: "bold" }}
                        >
                            {restaurantDetails.name}
                        </CardTitle>
                        <CardSubtitle>
                            {restaurantDetails.cuisines}
                        </CardSubtitle>
                        <CardText
                            style={{ fontSize: "13px", marginTop: "10px" }}
                        >
                            <span style={{ color: "green" }}>Open:</span>{" "}
                            {restaurantDetails.timings}
                        </CardText>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <Button
                                    outline
                                    color="danger"
                                    size="sm"
                                    style={{ marginRight: "5px" }}
                                >
                                    Taambah Ulasan &nbsp;
                                    <Badge color="warning">
                                        {restaurantDetails.all_reviews_count}
                                    </Badge>
                                </Button>
                                <Button
                                    outline
                                    color="info"
                                    size="sm"
                                    style={{ marginRight: "5px" }}
                                >
                                    Petunjuk
                                </Button>
                                <Button
                                    outline
                                    color="success"
                                    size="sm"
                                    style={{ marginRight: "5px" }}
                                >
                                    Arsip
                                </Button>
                            </div>
                            <div>
                                <span style={{ fontSize: "13px" }}>
                                    Ratings:{" "}
                                </span>
                                <Badge color="info">
                                    {
                                        restaurantDetails.user_rating
                                            .aggregate_rating
                                    }
                                </Badge>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
    return <div>{restaurantView}</div>;
}

export default RestaurantDetail;