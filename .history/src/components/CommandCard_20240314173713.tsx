import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AutocompleteAddresses from './AutocompleteAddresses';
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const StyledCard = styled(Card)`
  padding: 2px;
  display: flex;
  flex-direction: row;
  img {
    width: 12em;
    height: 20em;
    border-radius: 5%;
  }
`;

 function CommandCard() {
  return (
    <StyledCard>
      <div className='p-5'>
            <h2 className='text-[20px] font-anybody'></h2>
            <AutocompleteAddresses/>
      </div>
    </StyledCard>
  );
};
export default CommandCard;
