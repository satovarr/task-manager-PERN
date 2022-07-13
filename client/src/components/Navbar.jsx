import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant='h6'>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">PernStack</Link>
            </Typography>

            <Button variant="contained" color="primary" onClick={() => navigate('/tasks/new')}>
              New task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
