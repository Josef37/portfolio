import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useProjectImage = (filename: string) => {
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
    () => getImage(data.images.nodes.find(({ relativePath }: any) => relativePath === filename)),
    [data.images.nodes, filename],
  );
};

interface ProjectImgProps {
  filename: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImgProps> = ({ filename, alt }) => {
  const image = useProjectImage(filename);

  if (!image) return null;

  return <GatsbyImage alt={alt} image={image} />;
};

export default ProjectImage;
