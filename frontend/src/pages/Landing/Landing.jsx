import * as React from "react";
import "./Landing.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

export const Landing = () => {
  const navigate = useNavigate();
  const [landingState, setLandingState] = useState("");
  const tiers = [
    {
      title: "1 MONTH",
      price: "5",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "BUY",
      buttonVariant: "contained",
    },
    {
      title: "3 MONTHS",
      subheader: "Most popular",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "BUY",
      buttonVariant: "contained",
    },
    {
      title: "6 MONTHS",
      price: "25",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "BUY",
      buttonVariant: "contained",
    },
  ];
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

  // useEffect(() => {
  //     getLanding(1).then (m => {
  //       setLandingState(m.data)
  //       console.log(m.data);
  //     }).catch()
  //     console.log (landingState)
  //   },[])

  return (
    <div className="landingAll">
      <div className="landingNav">
        <button className="nameButton" onClick={() => navigate("/")}>
          UNTITLED
        </button>
        <button className="navButtons" onClick={() => navigate("/user/home")}>
          Hairdressers
        </button>
        <button className="navLogin" onClick={() => navigate("/login")}>
          Login/Register
        </button>
      </div>
      <div className="landingTitleHolder">
        <p className="landingTitle">Fargol Beauty</p>
        <br></br>
        <br></br>
        <br></br>

        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles
            styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
          />
          <CssBaseline />

          <Container maxWidth="md" component="main" className="middleContainer">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map((tier) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === "Enterprise" ? 12 : 6}
                  md={4}
                >
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center" }}
                      action={tier.title === "Pro" ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: "center",
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                      >
                        <Typography
                          component="h2"
                          variant="h3"
                          color="text.primary"
                        >
                          ${tier.price}
                        </Typography>
                      </Box>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button
                        fullWidth
                        variant={tier.buttonVariant}
                        sx={{
                          backgroundColor: "#ac3b61",
                          "&:hover": {
                            backgroundColor: "#eee2dc",
                            color: "#000000",
                          },
                        }}
                      >
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </ThemeProvider>

        <button className="landingButton" onClick={() => navigate("/login")}>
          LOGIN NOW !
        </button>
      </div>
      <div className="landingFooter">
        <div className="landingPhoneNumber">
          <p className="landingPhoneTitle">Phone number</p>
          <p className="landingPhoneDetail">{landingState.phonenumber}</p>
        </div>
        <div className="landingAddress">
          <p className="landingPhoneTitle">Company address</p>
          <p className="landingPhoneDetail">{landingState.address}</p>
        </div>
      </div>
    </div>
  );
};
