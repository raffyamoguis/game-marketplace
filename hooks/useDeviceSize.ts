import { useState, useEffect } from 'react';

export const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width]; // return [width, height]
};

export const isDeviceXS = (view: number) => {
  return view <= 500;
};

export const isDeviceSM = (view: number) => {
  return view <= 800;
};

export const isDeviceMD = (view: number) => {
  return view <= 1000;
};

export const isDeviceLG = (view: number) => {
  return view <= 1200;
};

export const isDeviceXL = (view: number) => {
  return view <= 1400;
};
