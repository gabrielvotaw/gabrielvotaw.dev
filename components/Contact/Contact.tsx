import { Card, CardProps, Text } from '@mantine/core';
import { RefObject } from 'react';

type ContactProps = CardProps & {
  scrollRefObject?: RefObject<HTMLDivElement>
}

function Contact({ scrollRefObject, ...cardProps }: ContactProps) {
  return (
    <Card {...cardProps}>
      <Text ref={scrollRefObject}>If you&apos;d like to work together or have any inquiries you can reach me by email at&nbsp;
        <a style={{ textDecoration: 'none' }} href='mailto:gabrielj.votaw@gmail.com'>gabrielj.votaw@gmail.com</a>.
      </Text>
    </Card>
  )
}

export default Contact;