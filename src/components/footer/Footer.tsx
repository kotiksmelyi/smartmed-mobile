import { footerIcons } from '@components/footer/footer-icons';

import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className='footer'>
      {footerIcons.map((e, index) => (
        <Link to={`${e.link}`} key={index}>
          {e.icon}
          <p>{e.name}</p>
        </Link>
      ))}
    </div>
  );
}
