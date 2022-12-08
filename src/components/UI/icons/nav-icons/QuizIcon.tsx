import React, { FC, SVGProps } from 'react';

export const QuizIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
      <path
        d='M19.9808 10.6248H10.2589L3.38461 17.4991C5.14755 19.0554 7.46349 19.9998 10 19.9998C15.3129 19.9998 19.6582 15.8565 19.9808 10.6248Z'
        fill='black'
      />
      <path
        d='M2.50073 16.6152C0.944386 14.8523 0 12.5363 0 9.99983C0 4.68689 4.14329 0.341666 9.375 0.019043V9.74095L2.50073 16.6152Z'
        fill='black'
      />
      <path
        d='M10.625 0.019043V9.37483H19.9808C19.6709 4.34982 15.65 0.328919 10.625 0.019043Z'
        fill='black'
      />
    </svg>
  );
};
