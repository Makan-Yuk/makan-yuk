import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { createGlobalStyle } from 'styled-components'
import Image from "../../Assets/Image/zomato.png"

const Container = createGlobalStyle`
    body {
        margin-top : 5%;
        background-color: #f1f1f1;
    }
`;

const LandingPage = () => {
  return (
      <div>
          <Container/>
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                <MDBJumbotron className="p-0">
                    <MDBCardImage
                    className="img-fluid"
                    src={Image}
                    />
                    <MDBCardBody>
                        <MDBCardText className="h3">
                            Temukan makanan & minuman terbaik di Jakarta.
                        </MDBCardText>
                        <MDBBtn href="login"  rounded>
                            SIGN IN
                        </MDBBtn>
                        <MDBBtn href="register" rounded>
                            REGISTER
                        </MDBBtn>
                    </MDBCardBody>
                </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </div>
    
  )
}

export default LandingPage;