import { BodyHeader } from '@components/body/BodyHeader';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

export function History() {
  return (
    <>
      <Header text={'Дневник '} />
      <BodyHeader text={'Ваши последние записи и анкеты'} />
      <Footer />
    </>
  );
}
