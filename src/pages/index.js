import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Welcome } from '../components/homePage/welcome';
import Benefits from '../components/homePage/benefits';
import Partners from '../components/homePage/partners';
import Applications from '../components/homePage/applications';
import PostGrid from '../components/homePage/postGrid';
import Tournaments from '../components/homePage/tournaments';
import { Unions } from '../components/unions';
import { Clubs } from '../components/clubs';

const HomePage = ({ data }) => {
  return (
    <Layout isHomePage>
      <Seo />
      <Welcome data={data.wpPage.homePage.welcomeBlock} />
      <Clubs />
      <Benefits data={data.wpPage.homePage.ourBenefits} />
      <Tournaments />
      <PostGrid staticData={data.wpPage.homePage.aboutUs} />
      <Partners data={data.wpPage.homePage.partners} />
      {/* <Applications data={data.wpPage.homePage.applications} /> */}
      <Unions />
    </Layout>
  );
};

export const query = graphql`
  {
    wpPage {
      homePage {
        aboutUs {
          title
          subtitle
          button {
            title
            url
          }
        }
        applications {
          title
          applicationsList {
            appStore
            description
            googlePlay
            icon {
              sourceUrl
            }
            bigIcon {
              sourceUrl
            }
            image2 {
              sourceUrl
            }
          }
        }
        ourBenefits {
          title
          subtitle
          button {
            title
            url
          }
          ourBenefits {
            title
            desciption
            icon {
              sourceUrl
            }
          }
        }
        partners {
          partnerLogo {
            sourceUrl
          }
        }
        welcomeBlock {
          subtitle
          title
        }
      }
    }
  }
`;

export default HomePage;
