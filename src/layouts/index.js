import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';

const Header = () =>
  <HeaderContainer>
    <Title>
      <StyledLink to="/">Commuting Nomad</StyledLink>
    </Title>
  </HeaderContainer>;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {
          name: 'description',
          content: 'Sample',
        },
        {
          name: 'keywords',
          content: 'sample, something',
        },
      ]}
    />
    <Header />
    <MainContainer>
      {children()}
    </MainContainer>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

const MainContainer = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  height: 100px;

`;

const Title = styled.h1`
  margin: auto;
`;

const StyledLink = styled(Link)`
  margin-left: 30px;
`;

export default TemplateWrapper;
