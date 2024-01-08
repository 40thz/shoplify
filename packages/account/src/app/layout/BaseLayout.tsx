import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { Navigation } from '@/widgets/navigation';
import styles from './BaseLayout.module.scss';

export const BaseLayout = () => (
  <main className={styles.baseLayout}>
    <Navigation />
    <div className={styles.baseLayout_content}>
      <Header />
      <Outlet />
    </div>
  </main>
);
