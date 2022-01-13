import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Particle from '../components/Particle';
import HeaderBlock from '../components/HeaderBlock';
import AboutBlock from '../components/AboutBlock';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import OriginStory from '../components/OriginStory';
import Instructions from '../img/solana-wallet.png';

import HD1 from '../img/half-dead-1.jpg';
import HD2 from '../img/half-dead-2.jpg';

const Index = ({ data }) => {
  console.log('data: ', data);
  return (
    <Layout>
      <section className="section grunge-bg">
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
            data={data.allMarkdownRemark.nodes.filter(({ html }) => html.length)[0].html}
          />

          <div className="columns">
            <div className="column">
              <img src={HD1} alt="" />
            </div>
            <div className="column">
              <img src={HD2} alt="" />
            </div>
          </div>

          <p className="contact-text has-text-centered  has-text-white">
            Half a Question or want to Collaborate with Half Dead Digital Contact -{' '}
            <a href="mailto: HalfDeadDigital@gmail.com">HalfDeadDigital@gmail.com</a>
          </p>

          {/* <div className="centered">
            <img src={Instructions} alt="NFT Instructions" />
          </div> */}
          <Footer />
        </div>
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
