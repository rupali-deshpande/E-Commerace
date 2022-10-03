

import { AppBar, Button, Container, Toolbar } from '@mui/material';
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
// type Props = {
//   cartCount: number
// }
///function Header({cartCount}:Props)

const pages = ["Admin", "WishList", "AddToCartList"];

function Header() {
  const navigate = useNavigate();

  return (
 
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate(`/`)}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shopify
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`/${page}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header

