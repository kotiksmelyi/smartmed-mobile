import { useState } from 'react';

export const useMultiStepFormNavigation = (formLength: number) => {
  const [activePage, setActivePage] = useState(0);

  const goNext = () => {
    setActivePage((p) => {
      if (p < formLength) return p + 1;
      return formLength;
    });
  };

  const goPrev = () => {
    setActivePage((p) => {
      if (p > 0) return p - 1;
      return 0;
    });
  };

  return {
    activePage,
    goNext,
    goPrev,
    isLastPage: activePage === formLength,
    isFirstPage: activePage === 0,
  };
};