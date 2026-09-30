import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

function Nav() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="fixed" sx={{ background: "linear-gradient(90deg, #1976d2, #7b1fa2)" }}>
      <Toolbar sx={{ px: { xs: 1, sm: 2 }, gap: { xs: 0.5, sm: 1 } }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "arial", fontSize: { xs: "1rem", sm: "1.25rem" } }}>
          V𝗂𝗌𝗁𝗇𝗎
        </Typography>
        <Stack direction="row" spacing={{ xs: 0, sm: 1 }}>
          <Button color="inherit" sx={{ minWidth: 0, px: { xs: 0.5, sm: 1 }, fontSize: { xs: "0.7rem", sm: "0.875rem" } }} onClick={() => scrollToSection("Home")}>Home</Button>
          <Button color="inherit" sx={{ minWidth: 0, px: { xs: 0.5, sm: 1 }, fontSize: { xs: "0.7rem", sm: "0.875rem" } }} onClick={() => scrollToSection("About")}>About</Button>
          <Button color="inherit" sx={{ minWidth: 0, px: { xs: 0.5, sm: 1 }, fontSize: { xs: "0.7rem", sm: "0.875rem" } }} onClick={() => scrollToSection("Projects")}>Projects</Button>
          <Button color="inherit" sx={{ minWidth: 0, px: { xs: 0.5, sm: 1 }, fontSize: { xs: "0.7rem", sm: "0.875rem" } }} onClick={() => scrollToSection("Contact")}>Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;