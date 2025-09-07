import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Box, TextField } from "@mui/material";
import { useRestaurants } from "../hooks/useRestaurants";
import type { Restaurant } from "../hooks/useRestaurants";
import resturant from "../assets/restaurant.png";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ id: number; marker: mapboxgl.Marker }[]>([]);
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<number | null>(null);

  // fetch restaurants from API
  const { data: restaurants = [] } = useRestaurants();

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [46.6753, 24.7136], // Riyadh
      zoom: 11,
    });
  }, []);

  useEffect(() => {
    const filtered = restaurants.filter((r: Restaurant) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    );

    // add new markers
    filtered.forEach((restaurant) => {
      const marker = new mapboxgl.Marker({
        color: activeId === restaurant.id ? "#ff4f81" : "black",
      })
        .setLngLat([restaurant.lng, restaurant.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div style="
              // width:322px;
              height:156px;
              display:flex;
              align-items:center;
              gap:16px;
            ">
              <img 
                src="${resturant}" 
                alt="logo" 
                style="width:80px;height:80px;border-radius:12px;object-fit:cover;" 
              />
              <div style="flex:1;display:flex;flex-direction:column;justify-content:space-between;height:100%;">
                <div>
                  <h3 style="margin:0;font-size:18px;font-weight:600;color:#111;">${restaurant.name}</h3>
                </div>
                <div style="display:flex; justify-content:space-between;align-items:center; gap:10px;">
                <p style="margin:0;font-size:14px;color:#555;">
                 Menu list
                </p>

                  <IconButton size="small">
                    <ChevronRightIcon
                      fontSize="small"
                      style={{ color: "#ff4f81" }}
                    />
                  </IconButton>

                 <button style="
                  align-self:flex-end;
                  background:#ff4f81;
                  border:none;
                  color:white;
                  padding:6px 14px;
                  border-radius:8px;
                  font-size:14px;
                  cursor:pointer;
                  display:flex;
                  align-items:center;
                  gap:6px;
                ">
                  →
                </button>
                </div>
              </div>
            </div>
          `)
        )
        .addTo(map.current!);

      marker.getElement().addEventListener("click", () => {
        setActiveId(restaurant.id);
        marker.getPopup()?.addTo(map.current!);
      });

      markers.current.push({ id: restaurant.id, marker });
    });
  }, [restaurants, search, activeId]);

  return (
    <Box>
      <TextField
        fullWidth
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: "95%",
          mb: 2,
          borderRadius: "15px",
          bgcolor: "white",
          "& .MuiOutlinedInput-root": {
            borderRadius: "15px",
          },
        }}
      />
      <div ref={mapContainer} style={{ width: "100%", height: "600px" }} />
    </Box>
  );
}
