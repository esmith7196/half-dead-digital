import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Particle from '../components/Particle';
import HeaderBlock from '../components/HeaderBlock';
import AboutBlock from '../components/AboutBlock';
import Collection from '../components/Collection';
import Footer from '../components/Footer';

const Index = ({ data }) => {
  console.log('data: ', data);
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <HeaderBlock data={data.dataJson} images={data.allMarkdownRemark.nodes} />
          <AboutBlock data={data.dataJson} />
          <Collection data={data.allMarkdownRemark.nodes} />
          <Particle></Particle>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    dataJson {
      aboutTitle
      aboutImage
      description
      dropDate
      primaryLogo
      footerLogo
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          name
          title
          image {
            childImageSharp {
              fixed {
                srcWebp
              }
            }
          }
        }
      }
    }
  }
`;
