import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';

const useProjectImage = (filename: string) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "projectImages" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 720
              placeholder: DOMINANT_COLOR
              quality: 80
            )
          }
        }
      }
    }
  `);

  return useMemo(
    () =>
      getImage(
        data.images.nodes.find((node: { relativePath: string }) => node.relativePath === filename),
      ),
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
