import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Container, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";

export const Home = () => {
  const { isAuthenticated, loginWithRedirect, isLoading, logout } = useAuth0();

  const onAuthClick = useCallback(() => {
    if (isAuthenticated) {
      logout();
      return;
    }
    loginWithRedirect();
  }, [isAuthenticated, loginWithRedirect, logout]);

  return (
    <Container fixed>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        {isAuthenticated && (
          <Link component={NavLink} to="/dashboard">
            Dashboard
          </Link>
        )}
        <Button disabled={isLoading} variant="contained" onClick={onAuthClick}>
          {isAuthenticated ? "logout" : "Log In"}
        </Button>
      </Box>
    </Container>
  );
};
