import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <>
      <h1>Hello Frontend Masters!</h1>
      <Link to="/about">About this site</Link>

      <h2>Check out my recent blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>{' '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

export const Head = () => (
  <>
    <title id="title">About this Site</title>
    <meta
      property="og:description"
      content="More information about this site."
    />
  </>
);
