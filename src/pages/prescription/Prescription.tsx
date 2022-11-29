import { BodyHeader } from '@components/body/BodyHeader';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

export function Prescription() {
  return (
    <>
      <Header text={'Назначения'} />
      <BodyHeader text={'Отмечайте выполнение рекомендаций врача'} />
      <Footer />
    </>
  );
}
