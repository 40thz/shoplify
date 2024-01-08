import styles from './MainPage.module.scss';
import { Container } from '@/components/shared/ui/Container';

export const MainPage = () => {
  const subDoamin = window.location.host.split('.')[0];

  return (
    <main className={styles.main}>
      <Container>{subDoamin}</Container>
    </main>
  );
};
