import Image from "next/image";
import getStripe from "@/utils/get.stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Typography, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>flashcard AI</title>
        <meta name = "description" content="Create flashcard" />
      </Head>

      <AppBar position="static">
        <toolbar>
          <Typography variant = "h6" style= {{flexGrow: 1}}>
            Flashcard Charades
          </Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </toolbar>
      </AppBar>
      
      <Box sx={{
        textAlign: "center",
        my: 4,
      }}
      >
        <Typography variant="h2">
          Welcome to Flashcard Charades
        </Typography>
        <Typography variant ="h5">
          Come let's play!
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Get started
        </Button>
      </Box>
      <Box sx={{my:6}}>
        <Typography variant="h6" components="h2">
          Features
        </Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {" "}
              Simple input your text and let us software do the rest. 
              Creating flashcards has never been easier.
              </Typography>
          </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart flashcards</Typography>
            <Typography>
              {" "}
              Our AI intelligently breaks down your text into
              concise flashcards, perfect for studying.
            </Typography>
          </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
             {" "}
             Access for flashcards from any device, at any time.
             Study on the go with ease. 
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>


  )
}
