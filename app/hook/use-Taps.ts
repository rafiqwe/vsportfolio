import React from "react";

export type TapType = {
  TapName: string;
  link: string;
};

const useTaps = () => {
  const [taps, setTaps] = React.useState<TapType[]>([]);

  const addTap = (TapName: string, link: string) => {
    setTaps((prev) => {
      // Avoid duplicate tabs
      if (prev.some((tap) => tap.TapName === TapName)) return prev;
      return [...prev, { TapName, link }];
    });
  };

  const removeTap = (TapName: string) => {
    setTaps((prev) => prev.filter((tap) => tap.TapName !== TapName));
  };

  return {
    taps,
    addTap,
    removeTap,
  };
};

export default useTaps;
