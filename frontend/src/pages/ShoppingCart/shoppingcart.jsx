import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React, { useEffect, useState } from "react";
    import "./shoppingcart.css"
    import axios from "axios";
    
    export default function PaymentMethods() {
        const [orders,setOrders] = useState([]) 
        useEffect(() => {
            axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/order/')
            .then((res) => {
                setOrders(res.data.results) 
            }).catch(err=> console.log(err))

        },[])
        const handleSubmit = (event) =>
        {
            event.preventDefault();
        }
    return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4 ">
          <MDBCol md="8">
            <MDBCard className="mb-4 shopcartcolor">
              <MDBCardHeader className="py-3" >
                <MDBTypography tag="h5" className="mb-0">
                  Cart 
                </MDBTypography>
              </MDBCardHeader>
            <div></div>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                    <MDBRipple rippleTag="div" rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        className="w-100" />
                      <a href="#!">
                        <div className="mask">
                        </div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
    
                  <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0 ">
                    <p>
                      <strong>Blue denim shirt</strong>
                    </p>
                    <p>Color: blue</p>
                    <p>Size: M</p>
    

                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <MDBBtn className="px-3 me-2 shopcartbutton">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>
    
                      <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />
    
                      <MDBBtn className="px-3 ms-2 shopcartbutton">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
    
                    <p className="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                  </MDBCol>
                </MDBRow>
    
                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>

    
            <MDBCard className="mb-4 shopcartcolor">
              <MDBCardBody>
                <p>
                  <strong>Reserved Day & Time</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="mb-4 mb-lg-0 shopcartcolor">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage className="me-2" width="45px"
                  src="https://www.uplooder.net/img/image/10/7718108b13ad843b0d203d5cf657f016/856500019482-F.jpg"
                  alt="wallet" />
            
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4 shopcartcolor">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
    
                <MDBBtn block size="lg" className="shopcartbutton" onClick={handleSubmit}>
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }