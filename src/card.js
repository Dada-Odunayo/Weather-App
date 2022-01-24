import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
export default function Frame(props) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "blue", color: "white" }} background="blue">
      <CardMedia
        component="img"
        src="img"
        height="300"
        image="https://media.istockphoto.com/vectors/weather-icons-set-vector-id1225639749?k=20&m=1225639749&s=612x612&w=0&h=wMzoyNFDyx6ewmaBU_lnqp1R7EEpyvxVkdBcgb1Yt0o="
        alt="card image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.city} {props.country}
        </Typography>
        <Typography variant="body2">Temperature {props.temp}&deg;C</Typography>
        <Typography variant="body2">Humidity {props.humidity}%</Typography>
        <Typography variant="body2">Atmosphere {props.weather}</Typography>
      </CardContent>
    </Card>
  );
}
