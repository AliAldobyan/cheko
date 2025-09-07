import { Box, Stack, Typography } from "@mui/material";
import type { MenuItem } from "../hooks/useMenuItems";

interface CategoryFilterProps {
  filters: {
    type: string;
    icon: React.ReactNode;
    color: string;
    divider?: React.ReactNode;
  }[];
  activeFilter: string | null;
  onFilterChange: (val: string | null) => void;
  menuItems: MenuItem[];
}

export default function CategoryFilter({
  filters,
  activeFilter,
  onFilterChange,
  menuItems,
}: CategoryFilterProps) {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
      {filters.map((f) => {
        const isActive = activeFilter === f.type;
        const typeCount = menuItems.filter(
          (item) => item.type === f.type
        ).length;

        return (
          <>
            <Box
              key={f.type}
              onClick={() => onFilterChange(isActive ? null : f.type)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.5,
                py: 1.5,
                borderRadius: "8px",
                bgcolor: isActive ? f.color : "white",
                boxShadow: isActive ? 2 : 0,
                cursor: "pointer",
                border: isActive
                  ? "1px solid #d0caccff"
                  : "1px solid #f8f5f5ff",
                "&:hover": { boxShadow: 2 },
              }}
            >
              <Box
                sx={{
                  p: 1,
                  borderRadius: "8px",
                  bgcolor: isActive ? "white" : f.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {f.icon}
              </Box>

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography fontWeight="600">{f.type}</Typography>
                <Typography color="text.secondary">{typeCount}</Typography>
              </Stack>
            </Box>
            {f.divider && f.divider}
          </>
        );
      })}
    </Stack>
  );
}
