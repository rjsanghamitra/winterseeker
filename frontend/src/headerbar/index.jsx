import { Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function HeaderBar() {
  const isNonMobileScreens = useMediaQuery("(min-width:800px)");
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isNonMobileScreens ? "3rem" : "1.5rem",
          }}
          padding="2rem 4rem"
          fontFamily={"Dela Gothic One"}
          letterSpacing={isNonMobileScreens ? "4px" : "2px"}
          color="#7D7C7C"
        >
          <WbSunnyIcon fontSize="3rem" />
          WinterSeeker
        </Typography>
      </Link>
    </>
  );
}

export default HeaderBar;
