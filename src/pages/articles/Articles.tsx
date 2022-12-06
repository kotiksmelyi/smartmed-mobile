import { BodyHeader } from '@components/body/BodyHeader';
import { Header } from '@components/header/Header';

export function Articles() {
  return (
    <>
      <Header text={'Статьи о здоровье'} />
      <BodyHeader text={'Полезные статьи и рекомендации'} />
      <div>Articles</div>
    </>
  );
}
