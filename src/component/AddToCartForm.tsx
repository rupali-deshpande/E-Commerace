import { CardContent, Typography, CardActions, Button, Box, Grid } from "@mui/material";
import Card from "@mui/material/Card/Card";


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export function AddToCartForm()  {
    return(
        <>
        <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
        <Card sx={{ minWidth: 545 }} >
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small"  >Learn More</Button>
      </CardActions>
    </Card>
    </Box>
        </>
    )
}