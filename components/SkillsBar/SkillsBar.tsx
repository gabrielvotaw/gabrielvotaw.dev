import AndroidIcon from '@/public/icons/android.svg';
import ExpressIcon from '@/public/icons/express.svg';
import FlutterIcon from '@/public/icons/flutter.svg';
import GoogleCloudIcon from '@/public/icons/google-cloud.svg';
import NextIcon from '@/public/icons/next.svg';
import PythonIcon from '@/public/icons/python.svg';
import ReactIcon from '@/public/icons/react.svg';
import { Card, CardProps, Group, Image } from '@mantine/core';
import NextImage from 'next/image';

function SkillsBar(props: CardProps) {
  return (
    <Card {...props} withBorder>
      <Group gap={50} justify='center'>
        <Image src={ExpressIcon} alt='TypeScript' w={125} h={30} p={5} component={NextImage} style={{ backgroundColor: 'white' }} />
        <Image src={FlutterIcon} alt='Flutter' w={125} h={30} component={NextImage} />
        <Image src={NextIcon} alt='Next' w={125} h={30} component={NextImage} />
        <Image src={AndroidIcon} alt='Android' w={125} h={30} component={NextImage} />
        <Image src={ReactIcon} alt='React' w={125} h={30} component={NextImage} />
        <Image src={GoogleCloudIcon} alt='Google Cloud' w={125} h={30} component={NextImage} />
        <Image src={PythonIcon} alt='Python' w={125} h={30} component={NextImage} />
      </Group>
    </Card>
  )
}

export default SkillsBar;