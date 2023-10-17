import { Box, Grid, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlaceIcon from "@mui/icons-material/Place";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import TodayIcon from "@mui/icons-material/Today";
import ErrorIcon from "@mui/icons-material/Error";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HeaderBar from "../headerbar";
import ProgressBar from "./progress-bar";

function Description() {
  const isNonMobileScreens = useMediaQuery("(min-width:800px)");
  const location = useSelector((state) => state.location.locationData);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [place, setPlace] = useState(null);
  const [status, setStatus] = useState(null);
  const [condition, setCondition] = useState(null);
  const [icon, setIcon] = useState(null);
  const [date, setdate] = useState(null);
  const [time, setTime] = useState(null);
  const baseUrl = `https://winterseeker-backend.vercel.app/current-weather/${location}`;
  useEffect(() => {
    axios
      .get(baseUrl)
      .then(async (response) => {
        setTemperature(response.data.current.temp_c);
        setHumidity(response.data.current.humidity);
        setPrecipitation(response.data.current.precip_mm);
        setPlace(
          `${response.data.location.name}, ${response.data.location.region}, ${response.data.location.country}`
        );
        setStatus(response.status);
        setCondition(response.data.current.condition.text);
        setIcon(`https:${response.data.current.condition.icon}`);
        setdate(response.data.location.localtime.substring(0, 10));
        setTime(response.data.location.localtime.substring(11));
      })
      .catch((error) => {
        return error;
      });
  }, []);
  console.log(
    temperature,
    humidity,
    precipitation,
    place,
    status,
    condition,
    icon,
    date,
    time
  );
  return (
    <>
      <HeaderBar />
      {status == 200 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <p
              style={{
                fontSize: isNonMobileScreens ? "7rem" : "4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "7rem",
                height: "1rem",
              }}
            >
              {temperature}॰
            </p>
            <p
              style={{
                fontSize: isNonMobileScreens ? "2rem" : "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1rem",
              }}
            >
              {condition} <img src={icon} />
            </p>
            <h3
              style={{
                fontSize: isNonMobileScreens ? "1.5rem" : "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1rem",
                marginTop: isNonMobileScreens ? "10rem" : "5rem",
              }}
            >
              <PlaceIcon />
              {place}
            </h3>
            <h5
              style={{
                fontSize: isNonMobileScreens ? "1.5rem" : "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1rem",
              }}
            >
              <TodayIcon />
              {date}
            </h5>
            <h5
              style={{
                fontSize: isNonMobileScreens ? "1.5rem" : "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "1rem",
              }}
            >
              <AccessTimeIcon />
              {time}
            </h5>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p
              style={{
                fontSize: isNonMobileScreens ? "2rem" : "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: isNonMobileScreens ? "13rem" : "3rem",
                height: "0rem",
              }}
            >
              <WaterDropIcon />
              {precipitation} mm
            </p>
            <p
              style={{
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Precipitation
            </p>
            <p
              style={{
                fontSize: isNonMobileScreens ? "1.5rem" : "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5rem",
                height: "0.5rem",
              }}
            >
              <ProgressBar color="#7D7C7C" progress={humidity} />
              {humidity}%
            </p>
            <p
              style={{
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Humidity
            </p>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10rem",
            }}
          >
            <ErrorIcon />
            Page Not Found.
          </h2>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            The entered location does not exist. Please enter a valid location
          </p>
        </Box>
      )}
    </>
  );
}

export default Description;
