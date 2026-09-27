import { Box, Typography } from "@mui/material";

function About() {
    return (
        <Box id="About" sx={{ display: "flex", flexWrap: "wrap", gap: 4, mt: 8, ml: 6, mr: 6, scrollMarginTop: "80px"}}>
            <Box sx={{ flex: 1, minWidth: 220, padding: 3, backgroundColor: "white", borderRadius: 3, boxShadow: 1, background: "linear-gradient(90deg, blue, violet)" }}>
                <Typography variant="h5" sx={{color:"white"}}>Aʙᴏᴜᴛ Mᴇ</Typography>
                <Typography variant="body1" sx={{color:"white"}}>I am Vishnu,</Typography>
                <Typography variant="body1" sx={{color:"white"}}>Passionate student from Madurai</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: 220, padding: 3, backgroundColor: "white", borderRadius: 3, boxShadow: 1, background: "linear-gradient(90deg, blue, violet)" }}>
                <Typography variant="h5" sx={{color:"white"}}>Sᴛᴜᴅɪᴇꜱ</Typography>
                <Typography variant="body1" sx={{color:"white"}}>UG B.Com(Computer Application)</Typography>
                <Typography variant="body1" sx={{color:"white"}}>The American College, Madurai</Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: 220, padding: 3, backgroundColor: "white", borderRadius: 3, boxShadow: 1, background: "linear-gradient(90deg, blue, violet)" }}>
                <Typography variant="h5" sx={{color:"white"}}>Iɴᴛᴇʀᴇꜱᴛꜱ</Typography>
                <Typography variant="body1" sx={{color:"white"}}>Interested in Web Development</Typography>
                <Typography variant="body1" sx={{color:"white"}}>Always learning something new</Typography>
            </Box>
        </Box>
    );
}

export default About;