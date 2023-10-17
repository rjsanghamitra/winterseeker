import HeaderBar from "../headerbar/index.jsx";
import SearchForm from "../search-location/index.jsx";
import { Box } from "@mui/material";

function Homepage() {
  return (
    <>
      <HeaderBar />
      <Box padding="5rem 4rem">
        <SearchForm />
      </Box>
    </>
  );
}

export default Homepage;
