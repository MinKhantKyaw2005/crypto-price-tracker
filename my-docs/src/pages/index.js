import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="Documentation for Crypto Price Tracker">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Crypto Price Tracker Documentation</h1>
        <p>
          This is the official documentation for the Crypto Price Tracker project.
          Learn how to set up, use, and contribute to the project.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <Link
            to="/docs/setup"
            className="button button--primary button--lg">
            Get Started
          </Link>
          <Link
            to="/docs/api"
            className="button button--secondary button--lg">
            API Integration
          </Link>
        </div>
      </main>
    </Layout>
  );
}