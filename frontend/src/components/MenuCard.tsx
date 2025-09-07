// MenuCard.tsx
import { Card, Box, Typography, Stack, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import type { MenuItem } from "../hooks/useMenuItems";

import img1 from "../assets/breakfast1.png";
import img2 from "../assets/breakfast2.png";
import img3 from "../assets/breakfast3.png";

const images = [img1, img2, img3];

interface MenuCardProps {
  item: MenuItem;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onClick?: () => void;
}

export default function MenuCard({
  item,
  count,
  onIncrease,
  onDecrease,
  onClick,
}: MenuCardProps) {
  const image = images[item.id % images.length];

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* Image */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt={item.name}
          sx={{
            width: { xs: "100%", sm: 140 },
            height: { xs: 180, sm: 140 },
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
        {item?.bestSale && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              bgcolor: "#D0EAE3",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#599887",
            }}
          >
            Best Sale
          </Box>
        )}
      </Box>

      {/* Info */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" fontWeight="bold">
          {item?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.calories} Cal
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 2 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 550, color: "#F4CBDF" }}>
            {item?.price} SR
          </Typography>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <IconButton
              size="small"
              sx={{ bgcolor: "#F4CBDF", borderRadius: "8px" }}
              onClick={(e) => {
                e.stopPropagation();
                onDecrease();
              }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{count}</Typography>
            <IconButton
              size="small"
              sx={{ bgcolor: "#F4CBDF", borderRadius: "8px" }}
              onClick={(e) => {
                e.stopPropagation();
                onIncrease();
              }}
            >
              <AddIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
