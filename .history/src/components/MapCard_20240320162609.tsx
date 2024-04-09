import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const MapStyledCard = styled(Card)`
  padding: 2px;
  display: flex;
  flex-direction: row;
  img {
    width: 30em;
    height: 20em;
    border-radius: 5%;
  }
`;

interface MapCardProps {
  formul: String;
  nbOfPassenger: number;
  price: String;
  timeEstimated: number;
  scheduledDropOff: String;
}

export const MapCard = ({
  formul,
  nbOfPassenger,
  price,
  timeEstimated,
  scheduledDropOff,
}: MapProps) => {
  return (
    <MapStyledCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
      </Box>
      
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography>{formul}</Typography>
            <PersonIcon />
            <Typography>{nbOfPassenger}</Typography>
          </Box>
          <Typography>{price}€</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <AccessTimeIcon />
          <Typography sx={{ textAlign: "start" }}>
            {timeEstimated} min / Depose Prévu {scheduledDropOff}
          </Typography>
        </Box>
    </MapStyledCard>
  );
};
