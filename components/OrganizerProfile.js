import { Typography } from "@material-ui/core";
import styled from "styled-components";

const OrganizerImage = styled.img`
  max-width: 40%;
  border-radius: 50%;
`;

const OrganizerProfile = ({ image, name, email, children }) => (
  <>
    <OrganizerImage src={image} />
    <Typography variant="h4" style={{ fontWeight: 500 }}>
      {name}
    </Typography>
    <Typography variant="body1" style={{ fontWeight: 300 }} gutterBottom>
      {email}
    </Typography>
    <Typography variant="body1">{children}</Typography>
  </>
);

export default OrganizerProfile;
