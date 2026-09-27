import { Box, Typography } from "@mui/material";

function Hero() {
    return (
        <Box id="Home" sx={{ mt: 12, ml: 2, scrollMarginTop: "80px" }}>
            <Typography variant="h5" sx={{
                background: "linear-gradient(90deg, blue, violet)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>
                Hᴇʟʟᴏ Eᴠᴇʀʏᴏɴᴇ
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Iam Vishnu
            </Typography>
            <Typography variant="body1">Student of The American College</Typography>
            <Typography variant="body1">Learning Full-Stack (MERN)</Typography>
            <Typography variant="body1">From Maiyyam❤️</Typography>

            <Box
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpp6oOkeiwR5Zs8vcKLyWmBEp577OofF5q4leuH4dGsBKP9_jIaOY3FCY&s=10"
                sx={{ mb: -13, mt: -70, ml: 140, width: 300, height: "400" }}
            />
        </Box>
    );
}

export default Hero;