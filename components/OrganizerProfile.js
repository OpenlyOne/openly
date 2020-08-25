import { Typography } from "@material-ui/core";
import styled from "styled-components";

const OrganizerImage = styled.img`
  max-width: 40%;
  border-radius: 50%;
`;

const OrganizerProfile = () => (
  <>
    <OrganizerImage src="https://jessy.io/image/https%3A%2F%2Flh3.googleusercontent.com%2F-84PzvVGRb04%2FAAAAAAAAAAI%2FAAAAAAAAAAc%2FlEoeNqsgEbA%2Fphoto.jpg?width=40&userId=&cache=v2" />
    <Typography variant="h4" style={{ fontWeight: 500 }}>
      Jessy Huang
    </Typography>
    <Typography variant="body1" gutterBottom>
      jessy(at)open.ly
    </Typography>
    <Typography variant="body1">
      Started a startup to bring open-source to document collaboration and
      knowledge management but failed. Still excited about augmenting our
      collective intelligence through open collaboration and am looking at
      solutions to tackle this problem. Working on cool and audacious projects?
      Reach me via jessy@zhenfund.com
    </Typography>
  </>
);

export default OrganizerProfile;
