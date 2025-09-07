// components/RestaurantPopup.tsx
import { Box, Typography, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { Restaurant } from "../hooks/useRestaurants";

interface Props {
  restaurant: Restaurant;
  logo: string;
}

export default function RestaurantPopup({ restaurant, logo }: Props) {
  return (
    <Box
      sx={{
        width: 322,
        height: 156,
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        borderRadius: 2,
        bgcolor: "white",
        boxShadow: 3,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={restaurant.name}
        sx={{ width: 100, height: 100, borderRadius: 2, objectFit: "cover" }}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography fontSize={18} fontWeight={600} color="black">
          {restaurant.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "auto",
          }}
        >
          <Typography fontSize={14} color="text.secondary">
            Menu list
          </Typography>
          <IconButton
            size="small"
            sx={{
              bgcolor: "#F4CBDF",
              "&:hover": { bgcolor: "#ff4f81", color: "white" },
            }}
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
