import { Box, Button, Grid, Typography } from "@material-ui/core";
import Layout from "components/Layout";
import SpeakerCard from "components/SpeakerCard";
import OrganizerProfile from "components/OrganizerProfile";

const Index = () => (
  <Layout>
    <Box marginTop={10} marginBottom={5}>
      <Typography variant="h1" gutterBottom>
        Open Impact: 10 Organizations that are Changing the World with Open
        Principles
      </Typography>
      <Typography variant="h2" style={{ color: "gray" }}>
        Creative Commons Summit
      </Typography>
    </Box>
    <Box>
      <Typography variant="h2" gutterBottom>
        Thursday, 22nd October, 2020
      </Typography>
      <Typography variant="h2" gutterBottom>
        14:00 - 15:00 UTC
      </Typography>
      <Typography variant="h2" gutterBottom>
        Virtual Session
      </Typography>
      <Box marginTop={5}>
        <Button
          component="a"
          size="large"
          href="https://mailchi.mp/creativecommons.org/cc-summit-intent-to-register"
          target="_blank"
          variant="contained"
          color="primary"
          style={{
            fontSize: "1.25rem",
          }}
        >
          Register now · Free
        </Button>
      </Box>
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        About
      </Typography>
      <Typography variant="h3">
        From climate change to Covid-19, we are facing big challenges in our
        world today. Tackling these challenges will require large-scale
        collaboration and open knowledge-sharing. Meet and hear from 10
        organizations that are leading the open impact movement, including the
        Shuttleworth Foundation, Precious Plastic, and Open Streets.
      </Typography>
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        Speakers
      </Typography>
      {[...Array(5).keys()].map((i) => (
        <SpeakerCard
          key={i}
          image="https://jessy.io/image/https%3A%2F%2Flh3.googleusercontent.com%2F-84PzvVGRb04%2FAAAAAAAAAAI%2FAAAAAAAAAAc%2FlEoeNqsgEbA%2Fphoto.jpg?width=40&userId=&cache=v2"
          headline="Jessy Huang, CEO of Cool Stuff"
          description="Precious Plastic is a combination of people, machines, platforms
        and knowledge to create an alternative global recycling system.
        Precious Plastic exists to reduce plastic waste. Sometimes we do
        it through boosting recycling. Sometimes through new biodegradable
        materials. Some other time by adopting zero waste lifestyles.
        Whatever works. Our solutions see people as the key element to fix
        the plastic mess."
          link="https://preciousplastic.com/about/mission.html"
        />
      ))}
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        Organizers
      </Typography>
      <Box marginY={3}>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12} align="center">
            <OrganizerProfile />
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <OrganizerProfile />
          </Grid>
          <Grid item md={4} xs={12} align="center">
            <OrganizerProfile />
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Layout>
);

export default Index;
