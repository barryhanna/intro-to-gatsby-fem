import * as React from 'react';
import { Link } from 'gatsby';

export default function AboutPage() {
  return (
    <>
      <h1>About this site</h1>
      <Link to="/">Home</Link>
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
