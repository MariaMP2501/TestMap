import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const StyledCard = styled(Card)`
  padding: 2px;
  display: flex;
  flex-direction: row;
  img {
    width: 12em;
    height: 18em;
    border-radius: 5%;
  }
`;

interface MapCardProps {
  price: String;
  timeEstimated: number;
  scheduledDropOff: String;
}

export const MapCard = ({
  price,
  timeEstimated,
  scheduledDropOff,
}: MapProps) => {
  return (
    <StyledCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <img src="https://picsum.photos/200/300" alt="car image" />
      </Box>
      <Box
        sx={{
          width: 1,
          padding: "1em",
          display: "flex",
        }}
      >
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
      </Box>
    </StyledCard>
  );
};
