import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const IndexPage = () =>
  (<Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Container>);

const Container = styled.div`background-color: red;`;

export default IndexPage;
