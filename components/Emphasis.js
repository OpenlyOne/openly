import { Typography } from "@material-ui/core";
import styled from "styled-components";

const Emphasis = styled.span`
  font-weight: 500;
  color: ${(props) =>
    props.styled?.color ? props.theme.palette.primary.main : "inherit"};
`;

export default Emphasis;
