import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>{meta.title}</h1>
        <Link to="/">About</Link>
      </main>
    </>
  );
}
