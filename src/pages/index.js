import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Particle from '../components/Particle';
import HeaderBlock from '../components/HeaderBlock';
import AboutBlock from '../components/AboutBlock';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import OriginStory from '../components/OriginStory';

const Index = ({ data }) => {
  console.log('data: ', data);
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <HeaderBlock
            data={data.dataJson}
            images={data.allMarkdownRemark.nodes.filter(
              ({ frontmatter }) => frontmatter.name !== null
            )}
          />
          <AboutBlock data={data.dataJson} />
          <Collection
            data={data.allMarkdownRemark.nodes.filter(
              ({ frontmatter }) => frontmatter.name !== null
            )}
          />
          <OriginStory
            data={data.allMarkdownRemark.nodes.filter(({ frontmatter }) => frontmatter.content)}
          />
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
      aboutDescription
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          content
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
