import { Outlet, Link, useLocation } from "react-router-dom";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import breakfastImg from "./assets/breakfast1.png";

export default function App() {
  const location = useLocation();
  const currentTab = location.pathname === "/map" ? 1 : 0;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "95%",
          height: "125px",
          borderRadius: "0 0 16px",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 95%), rgba(0, 0, 0, 80%)), url(${breakfastImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(6px)",
            transform: "scale(1.1)",
          }}
        />
      </Box>

      <AppBar
        position="static"
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <Tabs
          value={currentTab}
          sx={{
            minHeight: "48px",
            "& .MuiTabs-flexContainer": {
              gap: 1,
              marginLeft: 6,
            },
            "& .MuiTab-root": {
              textTransform: "none",
              minHeight: "60px",
              borderRadius: "0 0 10px 10px",
              fontWeight: 600,
              fontSize: "1rem",
              px: 3,
              color: "white",
              bgcolor: "transparent",
              "&.Mui-selected": {
                bgcolor: "#f5cde3",
                color: "black",
              },
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Map" component={Link} to="/map" />
        </Tabs>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
