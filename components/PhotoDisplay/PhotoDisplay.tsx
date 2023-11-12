import DogImage from '@/public/images/dog.jpeg';
import GamedayImage from '@/public/images/gameday.jpeg';
import GraduationImage from '@/public/images/graduation.jpeg';
import RingCeremonyImage from '@/public/images/ring-ceremony.jpeg';
import SiblingsImage from '@/public/images/siblings.jpeg';
import { Grid, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import NextImage from 'next/image';

function PhotoDisplay() {
  const sm = useMediaQuery('(min-width: 576px)')

  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <Image className='hover:scale-150' src={RingCeremonyImage} h={sm ? 350 : 275} alt='Graduation' radius='md' component={NextImage} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <Image src={GamedayImage} h={sm ? 175: 200} alt='Gameday' radius='md' component={NextImage} />
      </Grid.Col>
      <Grid.Col span={{ base: 6, xs: 6 }}>
        <Image className='hover:scale-150' src={DogImage} h={sm ? 350: 225} alt='Dog' radius='md' component={NextImage} />
      </Grid.Col>
      <Grid.Col mt={sm ? -175 : 0} span={{ base: 6, xs: 6 }}>
        <Image src={SiblingsImage} alt='Siblings' h={sm ? 260 : 225} radius='md' component={NextImage} />
      </Grid.Col>
      {sm && <Grid.Col span={{ base: 12, xs: 6 }}></Grid.Col>}
      <Grid.Col span={{ base: 12, xs: 6 }}>
        <Image mt={sm ? -266 : 0} src={GraduationImage} alt='Graduation' h={250} radius='md' component={NextImage} />
      </Grid.Col>
    </Grid>
  )
}

export default PhotoDisplay;