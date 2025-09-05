import { Outlet, Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";

export default function App() {
  const location = useLocation();
  const currentTab = location.pathname === "/map" ? 1 : 0;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Tabs value={currentTab} textColor="inherit" indicatorColor="secondary">
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Map" component={Link} to="/map" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
