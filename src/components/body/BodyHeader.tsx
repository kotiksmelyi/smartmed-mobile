export function BodyHeader(headerText: { text: string }) {
  return (
    <div className='bodyHeader'>
      <h3>{headerText.text}</h3>
    </div>
  );
}
