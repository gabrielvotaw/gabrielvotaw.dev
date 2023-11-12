'use client';

import MainContent from '@/components/MainContent/MainContent';
import PrimaryHeader from '@/components/PrimaryHeader/PrimaryHeader';
import { AppShell } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';

function App() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });

  function onPrimaryHeaderButtonClick() {
    scrollIntoView({ alignment: 'center' });
  }

  return (
    <main>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: true, desktop: true } }}
        padding="md"
      >
        <AppShell.Header withBorder={false}>
          <PrimaryHeader onButtonClick={onPrimaryHeaderButtonClick} />
        </AppShell.Header>
        <AppShell.Main>
          <MainContent scrollRefObject={targetRef} />
        </AppShell.Main>
      </AppShell>
    </main>
  );
}

export default App;
