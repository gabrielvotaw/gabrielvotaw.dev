import DreamchaserImage from '@/public/images/dreamchaser.png';
import ParkZenImage from '@/public/images/parkzen.png';
import SwappyImage from '@/public/images/swappy.png';
import { Grid } from '@mantine/core';
import ProjectCard from '../ProjectCard/ProjectCard';

const projectsData = [
  {
    imageSrc: DreamchaserImage,
    imageAlt: 'Dreamchaser: Ascension',
    cardTitle: 'Dreamchaser: Ascension',
    cardDescription: 'A fast-paced 2D action platformer made with the Unity game engine. Led the development of the project as team lead from inital concept to final product.',
    badgeColor: 'white',
    badgeText: 'Unity',
    buttonText: 'View Source',
    buttonSourceUrl: 'https://github.com/gabrielvotaw/dreamchaser-ascension',
    gridSpan: { base: 12, sm: 6 },
  },
  {
    imageSrc: SwappyImage,
    imageAlt: 'Swappy',
    cardTitle: 'Swappy',
    cardDescription: 'A working prototype of a live e-commerce marketplace for buying and selling apparel. Built with React.js, MySQL, and Axios.',
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
    cardDescription: `Tracking and managing parking intelligence through digital solutions. 
      Worked with a team to develop full-stack, cross-platform applications such as ParkZen, BWI Park, Pitt Park, Park Frederick, SPC Park, and PGS Park.
      Gained experience with many technologies such as Express, web development, Flutter, unit and integration testing, automated UI testing, CI/CD solutions, Google Cloud Platform, Firebase, and more.`,
    badgeColor: 'blue',
    badgeText: 'Web, Server, Mobile',
    buttonText: 'View on App Store',
    buttonSourceUrl: 'https://apps.apple.com/us/app/parkzen/id1562591290',
    gridSpan: { base: 12, sm: 12 },
  }
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