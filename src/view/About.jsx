import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Link as ReactRouterDomLink } from 'react-router-dom';

const About = () => (
  <Box>
    <h4>Version 1.0.0</h4>
    <Link to="/" style={{ cursor: 'pointer' }} component={ReactRouterDomLink}>Go Back</Link>
  </Box>
);

export default About;
