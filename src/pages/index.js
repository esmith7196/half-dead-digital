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
      {/* <section className="section paint-container"> */}
      <div className="paint-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="border"></div>
        <div className="border"></div>
      </div>
      <div className="container">
        <HeaderBlock
          data={data.dataJson}
          images={data.allMarkdownRemark.nodes.filter(
            ({ frontmatter }) => frontmatter.name !== null
          )}
        />
        <AboutBlock data={data.dataJson} />
        <Collection
          data={data.allMarkdownRemark.nodes.filter(({ frontmatter }) => frontmatter.name !== null)}
        />
        <OriginStory
          data={data.allMarkdownRemark.nodes.filter(({ html }) => html.length)[0].html}
        />
        <Footer />
      </div>

      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              in="name"
              mode="matrix"
              values="1 0 0 0 0
				      0 1 0 0 0 
				      0 0 1 0 0 
				      0 0 0 30 -15"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* </section> */}
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
        html
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
