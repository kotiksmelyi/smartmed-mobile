import React, { FC, SVGProps } from 'react';

export const NotificationIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='26' viewBox='0 0 24 26' fill='none' {...props}>
      <path
        d='M12 26C13.7345 26 15.1414 24.6011 15.1414 22.875H8.85863C8.85863 24.6011 10.2655 26 12 26ZM22.5772 18.6899C21.6284 17.6763 19.8532 16.1514 19.8532 11.1562C19.8532 7.3623 17.1778 4.3252 13.5704 3.58008V2.5625C13.5704 1.69971 12.8672 1 12 1C11.1328 1 10.4296 1.69971 10.4296 2.5625V3.58008C6.82216 4.3252 4.14681 7.3623 4.14681 11.1562C4.14681 16.1514 2.37159 17.6763 1.42285 18.6899C1.1282 19.0049 0.997579 19.3813 1.00003 19.75C1.00544 20.5508 1.63744 21.3125 2.57637 21.3125H21.4236C22.3626 21.3125 22.9951 20.5508 23 19.75C23.0024 19.3813 22.8718 19.0044 22.5772 18.6899V18.6899Z'
        fill='#00ABB5'
        stroke='black'
      />
    </svg>
  );
};
