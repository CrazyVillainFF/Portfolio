import Rating from '@mui/material/Rating';
import { Box, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';

function Ratingcomponent(){
    return(
        <Box id="Rating" sx={{ mt: 8, ml: 2, mr: 2, scrollMarginTop: "80px", textAlign: "center", width: '100%' }}>
            <Box sx={{mt: -4}}>
            <Typography variant="h4" sx={{textAlign: "center",mt:4}}>𝙂𝙞𝙫𝙚 𝙈𝙚 𝙍𝙖𝙩𝙞𝙣𝙜 ★</Typography>
            </Box>
        <Stack sx={{spacing:2, mt: 5, ml: 85, mr: 2, scrollMarginTop: "80px", textAlign: "center", width: '100%'}}>
            <Rating sx={{mr:-6}} name="half-rating" defaultValue={1.5} precision={0.5}/>
        </Stack>
        </Box>
    )
}

export default Ratingcomponent;