import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Link as ReactRouterDomLink } from 'react-router-dom';

const Footer = () => (
  <Box>
    <p>Copyright &copy; 2021</p>
    <Link to="/about" component={ReactRouterDomLink} style={{ cursor: 'pointer' }}>About</Link>
  </Box>
);

export default Footer;
