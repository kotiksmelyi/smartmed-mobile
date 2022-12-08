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
        <img src={testImg} alt='' />
      </div>
    </div>
  );
}
