import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
          logo
        }
      }
    }
  `);

  return site.siteMetadata;
}