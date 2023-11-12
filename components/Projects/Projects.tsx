import DreamchaserImage from '@/public/images/dreamchaser.png';
import ParkZenImage from '@/public/images/parkzen.png';
import SwappyImage from '@/public/images/swappy.png';
import PortfolioImage from '@/public/images/this.png';
import { Grid } from '@mantine/core';
import ProjectCard from '../ProjectCard/ProjectCard';

const projectsData = [
  {
    imageSrc: SwappyImage,
    imageAlt: 'Swappy',
    cardTitle: 'Swappy',
    cardDescription: 'A working prototype of a live e-commerce marketplace for buying and selling apparel. Built with React, MySQL, and Axios.',
    badgeColor: 'orange',
    badgeText: 'Web, Server',
    buttonText: 'View Source',
    buttonSourceUrl: 'https://github.com/gabrielvotaw/Swappy',
    gridSpan: { base: 12, sm: 6 },
  },
  {
    imageSrc: ParkZenImage,
    imageAlt: 'ParkZen',
    cardTitle: 'ParkZen',
    cardDescription: `A startup with the vision of providing granular parking intelligence to users and clients through digital solutions. 
      Leveraged tools such as Express, Flutter, unit and integration testing, automated UI testing, CI/CD solutions, Google Cloud, Firebase, and much more.`,
    badgeColor: 'blue',
    badgeText: 'Web, Server, Mobile',
    buttonText: 'View on App Store',
    buttonSourceUrl: 'https://apps.apple.com/us/app/parkzen/id1562591290',
    gridSpan: { base: 12, sm: 6 },
  },
  {
    imageSrc: PortfolioImage,
    imageAlt: 'Personal Website',
    cardTitle: 'Personal Website',
    cardDescription: 'My personal website - you\'re on it right now! It was built with the Next.js App Router, React, TypeScript, and the Mantine UI library.',
    badgeColor: 'white',
    badgeText: 'Web',
    buttonText: 'View Source',
    buttonSourceUrl: 'https://github.com/gabrielvotaw/gabrielvotaw.dev',
    gridSpan: { base: 12, sm: 6 },
  },
  {
    imageSrc: DreamchaserImage,
    imageAlt: 'Dreamchaser: Ascension',
    cardTitle: 'Dreamchaser: Ascension',
    cardDescription: 'A fast-paced 2D action platformer made with the Unity game engine. Led the development of the project as team lead from inital concept to final product.',
    badgeColor: 'indigo',
    badgeText: 'Unity',
    buttonText: 'View Source',
    buttonSourceUrl: 'https://github.com/gabrielvotaw/dreamchaser-ascension',
    gridSpan: { base: 12, sm: 6 },
  },
];

function Projects() {
  return (
    <Grid>
      {projectsData.map((item, index) => (
        <Grid.Col key={index} span={item.gridSpan} h='auto'>
          <ProjectCard
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            cardTitle={item.cardTitle}
            cardDescription={item.cardDescription}
            badgeColor={item.badgeColor}
            badgeText={item.badgeText}
            buttonText={item.buttonText}
            buttonSourceUrl={item.buttonSourceUrl}
            h='100%'
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default Projects;