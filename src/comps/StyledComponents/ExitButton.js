import React from 'react';
import { MdOutlineClear } from 'react-icons/md';
const ExitButton = ({ size }) => {
  return <MdOutlineClear className={`text-[${size}px] opacity-75`} />;
};

export default ExitButton;
