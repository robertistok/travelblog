import React from 'react';
import Link from 'gatsby-link';

const PostPreview = (props) => {
  const { post } = props;

  return (
    <div className="blog-post-preview" key={post.id}>
      <h1>
        <Link to={post.frontmatter.path}>
          {post.frontmatter.title}
        </Link>
      </h1>
      <h2>
        {post.frontmatter.date}
      </h2>
      <p>
        {post.excerpt}
      </p>
    </div>
  );
};

export default PostPreview;
