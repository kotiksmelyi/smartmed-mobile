import { useState } from 'react';

export function BodyHeader(headerText: { text: string }) {
  const [asf, setAsf] = useState<unknown>();
  return (
    <div className='bodyHeader'>
      <h3>{headerText.text}</h3>
    </div>
  );
}
