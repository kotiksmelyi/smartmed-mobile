import { AppLogo } from '@components/UI/icons/logo/AppLogo';

import testImg from '@assets/test-img.jpg';

export function Header(header: { text: string; username?: string }) {
  return (
    <div className='header'>
      <div className='header__logo'>
        <AppLogo />
      </div>

      <div className='header__user'>
        <h1>
          {header.text}
          <span>{header.username}</span>
        </h1>
        <img src='https://i08.fotocdn.net/s126/672c94231cc731f1/gallery_xl/2857412975.jpg' />
      </div>
    </div>
  );
}
