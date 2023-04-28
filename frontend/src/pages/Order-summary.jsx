import ImageSlider from './ImageSlider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Ordersummary({selectedCards},{totalPrice}){
    return(
    <Box sx={{ p: 3 }}>
    <Typography variant="h6">Selected Cards:</Typography>
    {selectedCards.map((card) => (
      <Typography key={card.name}>{card.name}</Typography>
    ))}
    <Typography variant="h6">Total Price: ${totalPrice}</Typography>
  </Box>
    );

};
export default Ordersummary;