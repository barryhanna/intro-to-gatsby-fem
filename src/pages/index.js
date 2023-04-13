import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/seo';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo />
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
