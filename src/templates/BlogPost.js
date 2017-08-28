import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import styled from 'styled-components';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <PostContainer>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title} </h1>{' '}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </PostContainer>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({ title: PropTypes.string }),
    }),
  }),
};

const PostContainer = styled.div`
  width: 100%;
  max-width: 740px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        type
      }
    }
  }
`;
