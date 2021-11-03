import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Particle from '../components/Particle';
import HeaderBlock from '../components/HeaderBlock';

const Index = ({ data }) => {
  console.log('data: ', data);
  return (
    <Layout>
      <section className="section">
        <HeaderBlock data={data.dataJson} images={data.allMarkdownRemark.nodes} />
        <p>hifhsdifhisdfhiosd</p>
        <Particle></Particle>
      </section>
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
