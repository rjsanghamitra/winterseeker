import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { setLocationData } from "../store/actions.js";

function SearchForm() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLocationData(location));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "10rem",
        }}
      >
        <Input
          placeholder="Enter the Location"
          variant="soft"
          size="lg"
          sx={{
            width: "30rem",
          }}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Link to={`/${location}`}>
          <Button
            type="submit"
            sx={{
              height: "2.8rem",
              marginLeft: "1rem",
              width: "5rem",
              backgroundColor: "#7D7C7C",
              color: "white",
            }}
            onClick={() => {
              dispatch(setLocationData(location));
            }}
          >
            Find
          </Button>
        </Link>
      </Box>
    </form>
  );
}

export default SearchForm;
