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
    import { Link } from 'react-router-dom';
    
    export default function PaymentMethods() {

        const [orders,setOrders] = useState([]) 
        const [quantity, setQuantity] = useState(1);
        const [data, setData] = useState("");
        const [time, setTime] = useState("");
        const [price, setPrice] = useState(""); 
        let access_token =localStorage.getItem('accesstokenCustomer');
        const [flag , setFlag] = useState()
        const [temp, setTemp] = useState("");
        const[date, setDate] = useState("");
        const[address, setAddresse] = useState("");
        function handleIncreaseQuantity() {
          console.log(temp);
          console.log(price);
          setQuantity(quantity + 1); 
          setPrice(temp + price);
        }
        function handleDecreaseQuantity() {
          if (quantity > 1) { 
          setQuantity(quantity - 1);
          setPrice(price - temp);
        }
        }

        useEffect(() => {
            axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/basket/' , {
              headers: {
                'Authorization': `JWT ${access_token}` 
              },
            })
            .then((res) => {
                setOrders(res.data.results) 
                setPrice(res.data.results[0].service.price)  
                setTemp(res.data.results[0].service.price)
                setTime(res.data.results[0].time)
                setDate(res.data.results[0].date)
                setAddresse(res.data.results[0].barber.area)
                setFlag(() => !flag)
                console.log("hi1")
                setData(res.data.results[0].barber.BarberShop)

                console.log(typeof res.data.results[0].barber.BarberShop)

            }).catch(err=> console.log(err))

        },[])

        useEffect(() => {
          //console.log(orders[0])
          //barberShopName=JSON.stringify(orders[0].barber.BarberShop)
          //setData(orders[0].barber.BarberShop)
          // setTime(order.time) 
        }, [flag])


        const handleClick = (event) =>
        {
          event.preventDefault();
        }
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
            
            {/* shoro style={{height: "18rem"}} style={{height: "10rem"}} */}
            <div>
              {orders.map((item) => (
                <MDBCardBody style={{height: "15rem"}} >
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
                      <strong>{item.service.service}</strong>
                    </p>

                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                  <p className="text-start text-md-center">
                      <strong>Price: {item.service.price}$</strong>
                    </p>
                    {/* <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <MDBBtn className="px-3 me-2 shopcartbutton" onClick={handleDecreaseQuantity}>
                      <span class="material-icons"  style={{justifyContent: 'center', display: 'flex'}}>remove_circle_outline</span>
                      </MDBBtn>
    
                      <MDBInput value={quantity} min={0} type="number" label="Quantity" />
    
                      <MDBBtn className="px-3 ms-2 shopcartbutton" onClick={handleIncreaseQuantity}> 
                      <span class="material-icons" style={{justifyContent: 'center', display: 'flex'}}>add_circle_outline</span>
                      </MDBBtn>
                    </div>
    
                    <p className="text-start text-md-center">
                      <strong>{item.service.price}</strong>
                    </p> */}
                  </MDBCol>
                </MDBRow>
    
                <hr className="my-4" />
              </MDBCardBody>
              ))}
            </div>

              {/* payan */}
            </MDBCard>

    
            <MDBCard className="mb-4 shopcartcolor">
              <MDBCardBody>
              <p>
                  <strong>Name of Salon</strong>
                </p>
                <p className="mb-0">{data} - {address}</p>
                <p>
                  <strong>Reserved Day & Time</strong>
                </p>
                <p className="mb-0">{date} - {time} </p>
                
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="mb-4 mb-lg-0 shopcartcolor">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <button onClick={handleClick} style={{ fontSize: '2em' }}>
                <i className="material-icons shopcarticon">account_balance_wallet</i>
              </button>
                {/* <MDBCardImage className="me-2" width="45px"
                  src="https://www.uplooder.net/img/image/10/7718108b13ad843b0d203d5cf657f016/856500019482-F.jpg"
                  alt="wallet" /> */}
                {/* <Link to="/safheye fargol"></Link> */}
                <MDBCardImage className="me-2 shopcarticon" 
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4 shopcartcolor">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0 ">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  {/* <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 shopcartcolor">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem> */}
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3 shopcartcolor">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0"></p>
                      </strong>
                    </div>
                    <span>
                      <strong>{orders.reduce((partialSum , o) => partialSum+o.service.price,0)}</strong>
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