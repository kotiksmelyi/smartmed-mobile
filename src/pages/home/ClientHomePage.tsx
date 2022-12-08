import { BodyHeader } from '@components/body/BodyHeader';
import { BodyButton } from '@components/body/button';
import { Header } from '@components/header/Header';

export function ClientHomePage() {
  return (
    <>
      <Header text={'Привет, '} username={'Тимурка'} />
      <BodyHeader text={'Выполняйте рекомендации лечащего врача'} />
      <div className='select'>
        <BodyButton text={'Заполнить анкету'} path={'quiz'} />
        <BodyButton text={'Отметить приём лекарств'} path={'prescription'} />
        <BodyButton text={'Записаться к врачу'} path={'*'} />
        <BodyButton text={'Статьи для Вас'} path={'articles'} />
      </div>
    </>
  );
}
