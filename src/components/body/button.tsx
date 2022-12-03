import { Link } from 'react-router-dom';

export function BodyButton(buttonText: { text: string; path: string }) {
  return (
    <div className='select'>
      <Link to={`/${buttonText.path}`}>
        <div className='select__home'>
          <h1>{buttonText.text}</h1>

          <img src='./logos/arrow.svg' style={{ width: '6vmin' }} />
        </div>
      </Link>
    </div>
  );
}
