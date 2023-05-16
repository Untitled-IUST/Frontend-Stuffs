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
    import React, { useEffect, useState, useCallback  } from "react";
    import { useNavigate } from 'react-router-dom';
    import "./shoppingcart.css"
    import axios from "axios";
    import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";
    
    export default function PaymentMethods() {
      const navigate = useNavigate();
        const [money, setMoney] = useState('');

        const [orders,setOrders] = useState([]) 
        const [quantity, setQuantity] = useState(1);
        const total= orders.reduce((partialSum , o) => partialSum+o.totalCost,0);
        const [data, setData] = useState("");
        const [time, setTime] = useState("");
        const [price, setPrice] = useState(""); 
        let access_token =localStorage.getItem('accessTokenCustomer');
        const [flag , setFlag] = useState()
        const [temp, setTemp] = useState("");
        //const[date, setDate] = useState("");
        const[area, setArea] = useState("");
        const [addresse, setAddresse] = useState("");
        //const [servicelist, setServicelist] = useState(orders);
        const totalCosts = orders.reduce((partialSum, o) => partialSum + o.totalCost, 0);
        const [stateorder, setStateorde] = useState([]) ;
        const orderIds = orders.map((order) => order.id);
        const quantities = orders.map((order) => order.quantity);
        const statuses = ['paid']; 
        const [paymentSuccessful, setPaymentSuccessful] = useState(false);

        const orderData = {};
        orderIds.forEach((id, index) => {
          orderData[id] = {
            quantity: quantities[index],
            status: statuses[index]
  };
});




        function handleDelete(id) {
          axios.delete(`https://amirmohammadkomijani.pythonanywhere.com/barber/basket/${id}`, {
            headers: {
              'Authorization': `JWT ${access_token}`,
              'Content-Type': 'application/json'
            }
          }).then(response => {
            // Remove the item from the orders list
            const updatedList = orders.filter(item => item.id !== id);
            setOrders(updatedList);
          }).catch(error => {
            console.error(error);
          });
        }
        
        function handleIncreaseQuantity(id) {
          const updatelist = orders.map((item) => {
            if(item.id === id){
              const newQuantity = item.quantity + 1; 
              const newPrice = (item.totalCost + item.service.price);
              
              return{
                ...item,
                quantity : newQuantity,
                totalCost : newPrice
              };

            }
            return item;
          });
          setOrders(updatelist);
        }
        const handleDecreaseQuantity = useCallback((id) => {
          setOrders((prevOrders) => {
            const updatedList = prevOrders.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  quantity: Math.max(item.quantity - 1, 0),
                  totalCost: item.service.price * Math.max(item.quantity - 1, 0),
                };
              }
              return item;
            });
            return updatedList;
          });
        },[]);


        useEffect(() => {
            axios.get('https://amirmohammadkomijani.pythonanywhere.com/barber/basket/' , {
              headers: {
                'Authorization': `JWT ${access_token}`,
                'Content-Type': 'application/json', 
              },
            })
            .then((res) => {
                setOrders(res.data.results) 
                setPrice(res.data.results[0].service.price)  
                setTemp(res.data.results[0].service.price)
                setTime(res.data.results[0].time)
                //setDate(res.data.results[0].date)
                setArea(res.data.results[0].barber.area)
                setAddresse(res.data.results[0].barber.address)
                setFlag(() => !flag)
                console.log("hi1")
                setData(res.data.results[0].barber.BarberShop)


                console.log(typeof res.data.results[0].barber.BarberShop)

            }).catch(err=> console.log(err))

        },[])
        useEffect(() => {
          let access_token = localStorage.getItem('accessTokenCustomer');
          console.log(access_token);
          axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/wallet/add_credits/', {
            headers: {
              'Authorization': `JWT ${access_token}`,
              'Content-Type': 'application/json',
            }
          })
          .then((response) => {
            setMoney(response.data.credit);
            console.log("got it darling", money)
          })
          .catch(err => console.log(err))
        }, [])

        useEffect(() => {
          //console.log(orders[0])
          //barberShopName=JSON.stringify(orders[0].barber.BarberShop)
          //setData(orders[0].barber.BarberShop)
          // setTime(order.time) 
        }, [flag])

        console.log("damn money",total)
        const handleClick = () => {
          if (total<= money) {
            // User can pay by wallet
            // Deduct totalCost from credit and update the credit in the backend 
            const newCredit = -total;
            let access_token = localStorage.getItem('accessTokenCustomer');
            console.log(newCredit);
            axios.put('https://amirmohammadkomijani.pythonanywhere.com/customer/wallet/add_credits/', { credit : newCredit }, {
              headers: {
                'Authorization': `JWT ${access_token}`,
                'Content-Type': 'application/json',
              }
            })
              .then(response => {
                // handle success
                console.log(response);
                handlePay();
                setPaymentSuccessful(true); 
                alert("You Payment was succsessful!");
                axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/wallet/add_credits/', {
                    headers: {
                      'Authorization': `JWT ${access_token}`,
                      'Content-Type': 'application/json',
                    }
                  })
                  .then((response) => {
                    setMoney(response.data.credit);
                    console.log("got it darling", money)
                  })
                  .catch(err => console.log(err))
              })
              .catch(error => {
                // handle error
                console.log(error);
              });
              
            // Update the credit in the backend using an API call
          }  else if (money > 0) {
            // User pays by wallet and pays the rest of the money with payment page
            // Deduct credit from totalCost and redirect user to payment page with the remaining amount
            const remainingAmount = total - money;
            const value1= -money
            // Update the credit in the backend to zero using an API call
            // Update the total cost in the backend using an API call
            let access_token = localStorage.getItem('accessTokenCustomer');
            axios.put('https://amirmohammadkomijani.pythonanywhere.com/customer/wallet/add_credits/', { credit : value1}, {
              headers: {
                'Authorization': `JWT ${access_token}`,
                'Content-Type': 'application/json',
              }
            })
              .then(response => {
                navigate(`/paymentcard?value=${remainingAmount}`);
                handlePay();
                setPaymentSuccessful(true); 
                // handle success
                console.log(response);
                axios.get('https://amirmohammadkomijani.pythonanywhere.com/customer/wallet/add_credits/', {
                    headers: {
                      'Authorization': `JWT ${access_token}`,
                      'Content-Type': 'application/json',
                    }
                  })
                  .then((response) => {
                    setMoney(response.data.credit);
                    console.log("got it darling", money)
                  })
                  .catch(err => console.log(err))
              })
              .catch(error => {
                // handle error
                console.log(error);
              });
              
          } else {
            // Credit is zero, give an error to user
            // Display an error message to the user
            alert("Insufficient credit. Please add more credit to your wallet or choose another payment method.");
          }
        }

      console.log(money)
      const handlePay1 = async () => {
        navigate(`/paymentcard?value=${totalCosts}`);
        handlePay();
      }
      const  handlePay =  async () => {
        try {
          for (const id of orderIds) {
            const { quantity, status } = orderData[id];
            const response = await axios.put(`https://amirmohammadkomijani.pythonanywhere.com/barber/basket/${id}/`, {
              quantity: quantity,
              status: status
            }, {
              headers: {
                'Authorization': `JWT ${access_token}`,
                'Content-Type': 'application/json'
              }
            });
            console.log('request succsessful')
            console.log(response.data); // Output: the updated order object
          }
          setPaymentSuccessful(true); 
        } catch (error) {
          console.error(error);
        }
      };
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
              {orders.filter((item) => item.quantity > 0).map((item) => (
                <MDBCardBody key={item.id}>
                <MDBRow> 
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                    <MDBRipple rippleTag="div" rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay">
                      <img
                        src = {item.service.servicePic}
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
                    <p>
                  <strong>Reserved Day & Time</strong>
                  </p>
                  <p className="mb-0">{item.date} - {item.time} </p>
                  <button onClick={() => handleDelete(item.id)}>
                  <span className="material-icons" style={{ justifyContent: 'left', display: 'flex' }}>
                    delete_outline
                  </span>
                  </button>
                  

                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                  {/* <p className="text-start text-md-center">
                      <strong>Price: {item.service.price}$</strong>
                    </p> */}
                    
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <MDBBtn className="px-3 me-2 shopcartbutton" onClick={() => handleDecreaseQuantity(item.id)}>
                      <span className="material-icons"  style={{justifyContent: 'center', display: 'flex'}}>remove_circle_outline</span>
                      </MDBBtn>
    
                      <MDBInput value={item.quantity} min={0} type="number" label="Quantity" />
    
                      <MDBBtn className="px-3 ms-2 shopcartbutton" onClick={() => handleIncreaseQuantity(item.id)}> 
                      <span className="material-icons" style={{justifyContent: 'center', display: 'flex'}}>add_circle_outline</span>
                      </MDBBtn>
                    </div>
    
                    <p className="text-start text-md-center">
                      <strong>{item.totalCost}</strong>
                    </p>

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
                <p className="mb-0">{data} - {area} - {addresse}</p>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="mb-4 mb-lg-0 shopcartcolor">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <button onClick={handleClick} disabled={paymentSuccessful} style={{ fontSize: '2em' }}>
                <i className="material-icons shopcarticon">account_balance_wallet</i>
              </button><br></br>
              <button onClick={handlePay1} disabled={paymentSuccessful}>
                <MDBCardImage className="me-2 shopcarticon" 
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
                </button> 
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
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3 shopcartcolor">
                    <div>
                      <strong>Total amount</strong><br></br>
                      <strong>Your Wallet's Balance</strong><br></br>
                      <strong>
                        <p className="mb-0"></p>
                      </strong>
                    </div>
                    <span>
                      
                      <strong>{totalCosts}</strong><br></br>
                      <strong>{money < 0 ? 0 : money}</strong><br></br>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }