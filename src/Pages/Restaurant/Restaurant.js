import React, { useEffect } from "react";
import { Col, Card, CardTitle, Container, Row } from "reactstrap";
import { fetchRestaurants } from "../../redux/Actions";
import { useDispatch, useSelector } from 'react-redux';

import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
  width: 318px;
  height: 180px;
`;
const Container1 = styled.div`
  width: 318px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px black solid;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardText = styled.p`
  text-align: center;
`;

function Restaurant() {
  const dispatch = useDispatch()
  const restaurant =useSelector(
    (state) => state.restaurant.restaurants
  )
  
  useEffect(() => {
    dispatch(fetchRestaurants());
    //eslint-disable-next-line
  }, []);
  

 
  return (
    <Container style={{ textAlign: "center" }}>
      <h1>Makan Yuk</h1>
      <Row style={{ height: "400px" }} xs="3" sm="4" md="4">
        {restaurant !== null &&
          restaurant.map((data) => {
            return (
              <Col key={data.restaurant.id}>
                <Card>
                  <CardTitle>{data.restaurant.name}</CardTitle>

                  <img
                    width="100%"
                    height="180px"
                    src={data.restaurant.featured_image}
                    alt="poster"
                  />
                  <CardBody>
                    <CardText>
                      Rating : {data.restaurant.user_rating.aggregate_rating}{" "}
                    </CardText>

                    <CardText>
                      Location : {data.restaurant.location.locality_verbose}
                    </CardText>

                    <Link to={`/restaurant/${data.restaurant.id}`}>
                      <button>Detail</button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}


export default Restaurant;
