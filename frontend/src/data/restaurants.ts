export interface Restaurant {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export const restaurants: Restaurant[] = [
  { id: 1, name: "Cheko Downtown", lat: 24.7136, lng: 46.6753 }, // Riyadh
  { id: 2, name: "Cheko Mall", lat: 24.7743, lng: 46.7386 },
];
