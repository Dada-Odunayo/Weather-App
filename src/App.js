import { Fragment, useState, useEffect, useRef } from "react";
import Frame from "./card";
import Box from "@mui/material/Box";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { fontSize } from "@mui/system";

function App() {
  const [city, setCity] = useState("Lagos");
  const [country, setCountry] = useState("NG");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weather, setWeather] = useState("");
  const textRef = useRef();

  const API_KEY = "1c47f9c78f7420e7e598df755946dba9";

  useEffect(
    () => {
      getData();
    },
    [city]
  );

  const getData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.data;
    setTemp(Math.round(data.main.temp - 273.15));
    setCountry(data.sys.country);
    setWeather(data.weather[0].main);
    setHumidity(data.main.humidity);
  };

  const searchHandler = () => {
    setCity(textRef.current.value);
    //setC
  };
  return (
    <Fragment>
      <AppBar
        position="relative"
        sx={{
          p: 5
        }}
      >
        <Typography align="center" color="white" variant="h3">
          Weather App
        </Typography>
      </AppBar>

      <Box
        component="span"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          m: 2,
          bgcolor: "white"
        }}
      >
        <Box component="span" sx={{ display: "inline-block", pl: 5 }}>
          <TextField
            sx={{ fontSize: 30 }}
            inputRef={textRef}
            autoFocus
            label="City Name"
            helperText="Enter City"
            type="search"
          />
          <Button
            variant="contained"
            sx={{
              ml: 5,
              fontSize: 22
            }}
            onClick={searchHandler}
          >
            Search
          </Button>
        </Box>
        <Frame city={city} temp={temp} country={country} weather={weather} humidity={humidity} />
      </Box>
    </Fragment>
  );
}

export default App;
