import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const AddminNavbar = () => {
  return (
    <header>
    <AppBar style={{ backgroundColor: "pink" }} position="static">
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
          <Link to={"/admin"}>Dashboard</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/admin/countries"}>Countries</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/admin/countrydetail"}>CountryDetail</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/admin/addcountry"}>Addcountry</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/admin/login"}>Login</Link>
        </Button>
      </Toolbar>
    </AppBar>
  </header>
  )
}

export default AddminNavbar
