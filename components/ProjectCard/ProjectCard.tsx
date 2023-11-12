import { openInNewTab } from '@/utils/utils';
import { AspectRatio, Badge, Button, Card, CardProps, DefaultMantineColor, Group, Image, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import NextImage, { StaticImageData } from 'next/image';

type ProjectCardProps = CardProps & {
  imageSrc: StaticImageData | string,
  imageAlt: string,
  cardTitle: string,
  badgeText: string,
  cardDescription: string,
  buttonText: string,
  buttonSourceUrl: string,
  badgeColor?: DefaultMantineColor,
}

function ProjectCard({ 
  imageSrc,
  imageAlt,
  cardTitle,
  badgeText,
  cardDescription,
  buttonText,
  buttonSourceUrl,
  badgeColor,
  ...cardProps
}: ProjectCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder {...cardProps}>
      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            component={NextImage}
          />
        </AspectRatio>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{cardTitle}</Text>
        <Badge color={badgeColor} variant="light">{badgeText}</Badge>
      </Group>

      <Text size="sm" c="dimmed" style={{ display: 'flex', flex: '1 1 auto', alignItems: 'center' }}>{cardDescription}</Text>

      <Button 
        onClick={() => openInNewTab(buttonSourceUrl)}
        rightSection={<IconExternalLink size={15} />}
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        maw={300}
        style={{ alignSelf: 'center' }}
      >
        {buttonText}
      </Button>
    </Card>
  );
}

export default ProjectCard;