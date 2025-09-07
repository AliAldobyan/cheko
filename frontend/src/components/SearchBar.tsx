import { TextField } from "@mui/material";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <TextField
      fullWidth
      placeholder="Search menu..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        mb: 3,
        width: "95%",
        borderRadius: "15px",
        bgcolor: "white",
        "& .MuiOutlinedInput-root": {
          borderRadius: "15px",
        },
      }}
    />
  );
}
