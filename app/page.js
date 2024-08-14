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
            <Button color="inherit" href="/sign-in">
            {""}
            Login
            </Button>
            <Button color="inherit" href="/sign-up">
            Sign up
            </Button>
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
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard Charades
        </Typography>
        <Typography variant ="h5" gutterBottom>
          Come let's play!
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Get started
        </Button>
      </Box>
      <Box sx={{my:6}}>
        <Typography variant="h6" components="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
              </Typography>
            <Typography>
              {" "}
              Simple input your text and let us software do the rest. 
              Creating flashcards has never been easier.
              </Typography>
          </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart flashcards
              </Typography>
            <Typography>
              {" "}
              Our AI intelligently breaks down your text into
              concise flashcards, perfect for studying.
            </Typography>
          </Grid>
        <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
              </Typography>
            <Typography>
             {" "}
             Access for flashcards from any device, at any time.
             Study on the go with ease. 
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>
          Pricing
          </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box 
            sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}
            >
            <Typography variant="h5" gutterBottom>
              Basic
              </Typography>
            <Typography variant="h6" gutterBottom>
              $5 / month
            </Typography>
            <Typography>
              {" "}
              Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose basic
              </Button>
              </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box 
            sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}
            >
            <Typography variant="h5" gutterBottom>
              Pro
              </Typography>
            <Typography variant="h6" gutterBottom>
              $10 / month
            </Typography>
            <Typography>
              {" "}
              Unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Pro
              </Button>
              </Box>
              </Grid>
        </Grid>
      </Box>
    </Container>


  )
}
