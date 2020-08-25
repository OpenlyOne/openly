import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

const SpeakerImage = styled.img`
  max-width: 80%;
  border-radius: 50%;
`;

const SpeakerCard = ({ image, headline, description, link }) => (
  <Box marginY={3}>
    <Card elevation={3}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={2} align="center">
            <SpeakerImage src={image} />
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <Typography variant="h3" style={{ fontWeight: 500 }} gutterBottom>
              {headline}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Box marginTop={2}>
              <Button
                component="a"
                variant="outlined"
                href={link}
                target="_blank"
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
);

export default SpeakerCard;
