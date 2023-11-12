import AndroidIcon from '@/public/icons/android.svg';
import ExpressIcon from '@/public/icons/express.svg';
import FlutterIcon from '@/public/icons/flutter.svg';
import GoogleCloudIcon from '@/public/icons/google-cloud.svg';
import NextIcon from '@/public/icons/next.svg';
import PythonIcon from '@/public/icons/python.svg';
import ReactIcon from '@/public/icons/react.svg';
import { Card, CardProps, Group, Image } from '@mantine/core';
import NextImage from 'next/image';

const iconsData = [
  {
    src: ExpressIcon,
    alt: 'Express',
    style: { backgroundColor: 'white', padding: 5 }
  },
  {
    src: FlutterIcon,
    alt: 'Flutter',
  },
  {
    src: NextIcon,
    alt: 'Next',
  },
  {
    src: AndroidIcon,
    alt: 'Android',
  },
  {
    src: ReactIcon,
    alt: 'React',
  },
  {
    src: GoogleCloudIcon,
    alt: 'Google Cloud',
  },
  {
    src: PythonIcon,
    alt: 'Python',
  }
]

function SkillsBar(props: CardProps) {
  return (
    <Card {...props} withBorder>
      <Group gap={50} justify='center'>
        {iconsData.map((item, index) => (
          <Image key={index} src={item.src} alt={item.alt} w={125} h={30} component={NextImage} style={item.style} />
        ))}
      </Group>
    </Card>
  )
}

export default SkillsBar;