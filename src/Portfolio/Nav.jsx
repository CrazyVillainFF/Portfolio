import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

function Nav() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="fixed" sx={{ background: "linear-gradient(90deg, #1976d2, #7b1fa2)" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "arial" }}>
          V𝗂𝗌𝗁𝗇𝗎
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button color="inherit" onClick={() => scrollToSection("Home")}>Home</Button>
          <Button color="inherit" onClick={() => scrollToSection("About")}>About</Button>
          <Button color="inherit" onClick={() => scrollToSection("Projects")}>Projects</Button>
          <Button color="inherit" onClick={() => scrollToSection("Contact")}>Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;