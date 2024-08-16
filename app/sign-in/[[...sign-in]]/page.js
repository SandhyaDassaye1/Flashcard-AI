import { SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function SignupPage() {
    return (
    <Container maxWidth="100vw">
        <AppBar position="static">
            <Toolbar>
                <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                }}
                >
                    Flashcard SaaS
                </Typography>
                <Button color="inherit">
                    <Link href="/sign-in" passHref>
                      Login
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link href="/sign-up" passHref>
                      Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box
<<<<<<< HEAD
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        >
            

=======
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center">
>>>>>>> accf8ea631b64dc1455ed0bdbf1cafc530ac0676
            <Typography variant="h4">Sign In</Typography>
            <SignIn />
        </Box>
    </Container>
    )
}