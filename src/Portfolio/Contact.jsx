import { Box, Link, Stack, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    return (
        <Box id="Contact" sx={{ mt: { xs: 5, md: 10 }, px: { xs: 2, sm: 4 }, scrollMarginTop: "80px", textAlign: "center", width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>𝘾𝙤𝙣𝙩𝙖𝙘𝙩</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: "center", alignItems: "center", width: '100%', mt: 4 }}>
                <Link href="https://www.linkedin.com/in/vishnu-bangaru-63b1a0410" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinkedInIcon fontSize="small" />
                    <Typography variant="body1">LinkedIn</Typography>
                </Link>
                
                <Link href="mailto:vishnubangaru002@gmail.com" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MailIcon fontSize="small" />
                    <Typography variant="body1" sx={{ overflowWrap: "anywhere" }}>vishnubangaru002@gmail.com</Typography>
                </Link>
                
                <Link href="https://www.instagram.com/_itz_me_vishnu._?utm_source=qr&stkn=MWlzZXE2Mmd3OHM3NA" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <InstagramIcon fontSize="small" />
                    <Typography variant="body1">Instagram</Typography>
                </Link>
            </Stack>
        </Box>
    );
}

export default Contact;