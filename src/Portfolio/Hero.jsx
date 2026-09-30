import { Box, Typography } from "@mui/material";

function Hero() {
    return (
        <Box id="Home" sx={{
            mt: { xs: 0, md: 12 },
            px: { xs: 2, sm: 4, md: 8 },
            pt: { xs: 11, md: 4 },
            pb: { xs: 4, md: 8 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 6 },
            textAlign: { xs: "center", md: "left" },
            scrollMarginTop: "80px"
        }}>
            <Box>
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
            </Box>
            <Box
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpp6oOkeiwR5Zs8vcKLyWmBEp577OofF5q4leuH4dGsBKP9_jIaOY3FCY&s=10"
                alt="Vishnu"
                sx={{
                    width: { xs: 180, sm: 220, md: 300 },
                    height: { xs: 240, sm: 293, md: 400 },
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: 2
                }}
            />
        </Box>
    );
}

export default Hero;