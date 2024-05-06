import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const UserNavbar = () => {
  return (
    <header>
    <AppBar style={{ backgroundColor: "yellow" }} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React-Router-Dom (Admin)
        </Typography>
        <Button color="inherit">
          <Link to={"/"}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/usercountries"}>UserCountries</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/usercountrydetail/id"}>UserCountryDetail</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/about"}>About</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/contact"}>Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  </header>
  )
}

export default UserNavbar
