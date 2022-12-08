import React, { FC, SVGProps } from 'react';

export const PatientsIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='19' height='26' viewBox='0 0 19 26' fill='none' {...props}>
      <path
        d='M5.9375 3.65625C5.9375 1.63693 7.53246 0 9.5 0C11.4675 0 13.0625 1.63693 13.0625 3.65625C13.0625 5.67552 11.4675 7.3125 9.5 7.3125C7.53246 7.3125 5.9375 5.67552 5.9375 3.65625ZM18.5362 3.72597C17.918 3.09136 16.9154 3.09136 16.2971 3.72597L12.0108 8.125H6.98913L2.70289 3.72597C2.0846 3.09136 1.08205 3.09136 0.463756 3.72597C-0.154586 4.36059 -0.154586 5.38946 0.463756 6.02408L5.14583 10.8293V24.375C5.14583 25.2725 5.85472 26 6.72916 26H7.52083C8.39528 26 9.10417 25.2725 9.10417 24.375V18.6875H9.89583V24.375C9.89583 25.2725 10.6047 26 11.4792 26H12.2708C13.1453 26 13.8542 25.2725 13.8542 24.375V10.8293L18.5362 6.02403C19.1546 5.38941 19.1546 4.36059 18.5362 3.72597Z'
        fill='black'
      />
    </svg>
  );
};