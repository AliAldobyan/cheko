
import {
  Box,
  Typography,
  Grid,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useMenuItems } from "../hooks/useMenuItems";
import { useUIStore } from "../store/useUIStore";
import type { MenuItem } from "../hooks/useMenuItems";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";

import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import SetMealIcon from "@mui/icons-material/SetMeal";
import DescriptionIcon from "@mui/icons-material/Description";

// Images for cards
import img1 from "../assets/breakfast1.png";
import img2 from "../assets/breakfast2.png";
import img3 from "../assets/breakfast3.png";

const filters = [
  { type: "Breakfast", icon: <BakeryDiningIcon />, color: "#F4CBDF" },
  { type: "Drinks", icon: <CoffeeIcon />, color: "#CDDFEC" },
  { type: "Soups", icon: <SoupKitchenIcon />, color: "#E7DEE3" },
  {
    type: "Sushi",
    icon: <SetMealIcon />,
    color: "#D1D1EF",
    divider: <Divider orientation="vertical" flexItem />,
  },
  { type: "Others", icon: <DescriptionIcon />, color: "#D0EAE3" },
];

export default function Home() {
  const { data: menuItems = [] } = useMenuItems();
  const {search, setSearch, counts, increaseCount, decreaseCount, selectedItem, setSelectedItem, activeFilter, setActiveFilter } = useUIStore();


  const images = [img1, img2, img3];

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter ? item.type === activeFilter : true;
    return matchesSearch && matchesFilter;
  });

  // Group by type
  const grouped = filteredItems.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);


  return (
    <Box sx={{ p: 2 }}>
      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Filters */}
      <CategoryFilter
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        menuItems={menuItems}
      />

      {/* Grouped Items */}
      {Object.entries(grouped).map(([category, items]) => (
        <Box key={category} sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {items.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <MenuCard
                  item={item}
                  count={counts[item.id] || 0}
                  onIncrease={() => increaseCount(item.id)}
                  onDecrease={() => decreaseCount(item.id)}
                  onClick={() => setSelectedItem(item)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Modal for details */}
      <Dialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        maxWidth="sm"
        fullWidth
        sx={{ "& .MuiDialog-paper": { borderRadius: 7 } }}
      >
        {selectedItem && (
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                {selectedItem.name}

                {selectedItem?.bestSale && (
                  <Box
                    sx={{
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
              </Typography>

              <IconButton onClick={() => setSelectedItem(null)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {selectedItem.calories} Cal
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: "#8f8b8bff" }}>
              {selectedItem.description}
            </Typography>
            <Box
              component="img"
              src={images[selectedItem.id % images.length]}
              alt={selectedItem.name}
              sx={{ width: "100%", borderRadius: "16px", mb: 2 }}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 2 }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 550, color: "#F4CBDF" }}
              >
                {selectedItem?.price} SR
              </Typography>
              <Stack direction="row" spacing={1} alignItems={"center"}>
                <IconButton
                  size="small"
                  sx={{ bgcolor: "#F4CBDF", borderRadius: "8px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    decreaseCount(selectedItem.id);
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography>{counts[selectedItem.id] || 0}</Typography>
                <IconButton
                  size="small"
                  sx={{ bgcolor: "#F4CBDF", borderRadius: "8px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    increaseCount(selectedItem.id);
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
}
