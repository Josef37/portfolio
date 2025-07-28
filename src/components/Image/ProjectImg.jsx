import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useProjectImage = (filename) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "projectImages" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 1366)
          }
        }
      }
    }
  `);

  return useMemo(
    () => getImage(data.images.nodes.find(({ relativePath }) => relativePath === filename)),
    [data.images.nodes, filename]
  );
};

const ProjectImg = ({ filename, alt }) => (
  <GatsbyImage alt={alt} image={useProjectImage(filename)} />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
