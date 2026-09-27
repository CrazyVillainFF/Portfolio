import { Box, Typography } from "@mui/material";

function Projects(){
    return(
        <Box id="Projects" sx={{mt: 14, ml:6, mr:6, scrollMarginTop: "80px", }}>
            <Box sx={{width: "100%"}}>
            <Typography variant="h4" sx={{textAlign: "center", ml: 2}}>Mʏ Pʀᴏᴊᴇᴄᴛ</Typography>
            </Box>
            <Typography variant="h5" sx={{fontWeight: "bold"}}> 𝗨𝗻𝗹𝗶𝗺𝗶𝘁𝗲𝗱 𝗧𝗼𝗽𝘂𝗽 𝗦𝘁𝗼𝗿𝗲:</Typography>
            <Typography variant="h5" sx={{ml: 6}}>🔹A fully functional game top-up 💸 platform built entirely through AI-driven development.</Typography>
            <Typography variant="h5" sx={{ml: 6}}>
                🔹It features secure user authentication, dynamic data management, and cloud storage powered by Firebase, with code versioning managed on GitHub and seamless live deployment via Vercel.
             </Typography>
            <Typography variant="h5" sx={{fontWeight: "bold"}}>
                𝗨𝗻𝗿𝗲𝗮𝗹 𝗘𝗻𝗴𝗶𝗻𝗲 𝗚𝗮𝗺𝗲 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁:
                </Typography>
                 <Typography variant="h5" sx={{ml: 6}}>
                    🔹Exploring the fundamentals of game design by building basic-level AAA game environments and mechanics in Unreal Engine.
             </Typography>
        </Box>
    )
};

export default Projects;
