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
      
        <img src="" />
    </MapStyledCard>
  );
};
