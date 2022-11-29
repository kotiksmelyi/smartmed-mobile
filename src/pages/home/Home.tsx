import { BodyHeader } from '@components/body/BodyHeader';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

export function Home() {
  return (
    <>
      <Header text={'Привет, '} username={'Тимурка'} />
      <BodyHeader text={'Выполняйте ежедневные рекомендации лечащего врача'} />
      <Footer />
    </>
  );
}
