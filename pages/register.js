import Link from "next/link";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Layout from "components/Layout";
import SpeakerCard from "components/SpeakerCard";
import OrganizerProfile from "components/OrganizerProfile";
import Emphasis from "components/Emphasis";

const Index = () => (
  <Layout>
    <Box marginTop={10} marginBottom={3}>
      <Typography variant="h1" gutterBottom>
        Open Impact: 10 Organizations that are Changing the World with Open
        Principles
      </Typography>
      <Typography variant="h2" color="primary" style={{ fontWeight: 500 }}>
        Session at Creative Commons Summit 2020
      </Typography>
    </Box>
    <Box>
      <Link href="/" passHref>
        <Button variant="outlined" size="large" component="a" color="primary">
          Event Details
        </Button>
      </Link>
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        How to Register and Join the Session
      </Typography>
      <Typography variant="body1">
        The Creative Commons Summit will take place on the event platform Hopin
        — it's more or less like any other video chat software, so hopefully you
        will feel right at home. No download needed, but you do need to create
        an account.
        <ol>
          <li>
            Use <strong>Google Chrome</strong> or{" "}
            <strong>Mozilla Firefox</strong>
          </li>
          <li>
            Create a <strong>Hopin account</strong>: https://hopin.to/sign_up
          </li>
          <li>
            Click <strong>Join Event</strong> on
            https://app.hopin.to/events/cc-global-summit
          </li>
          <li>Go to https://app.hopin.to/events/cc-global-summit/sessions</li>
          <li>
            Click on{" "}
            <strong>
              Open Impact: 10 Organizations that are Changing the World with
              Open Principles
            </strong>{" "}
            (the session will not be visible until 5 minutes before it starts)
          </li>
        </ol>
        You can already take care of steps 1-4 right now. After step 4, your
        screen will look similar to the image below. Each of those cards/boxes
        is one Creative Commons Summit session. On Thursday, from 1.55pm UTC,
        there will be one titled "Open Impact: 10 Organizations that are
        Changing the World with Open Principles" — that's ours!
      </Typography>
      <Box marginTop={3}>
        <img
          src="/static/cc-summit-sessions.png"
          style={{ maxWidth: "100%" }}
        />
      </Box>
    </Box>
    <Box marginY={8}>
      <Typography variant="h2" style={{ fontWeight: 700 }} gutterBottom>
        Questions?
      </Typography>
      <Typography variant="body1">
        Please contact finn.woelm(at)gmail.com. We are here to support you!
      </Typography>
    </Box>
  </Layout>
);

export default Index;
