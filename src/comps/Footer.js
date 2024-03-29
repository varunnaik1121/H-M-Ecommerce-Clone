import React from 'react';
import { RiClosedCaptioningLine } from 'react-icons/ri';
import { categoryData } from '../data/categories';
import FooterAccordin from './StyledComponents/FooterAccordin';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../assets/logo.png';
import { Tooltip } from '@mui/material';
const Footer = () => {
  const footerInfo = [
    {
      title: 'Shop',
      subtitle: [...categoryData],
    },
    {
      title: 'Corporate info',
      subtitle: [
        {
          name: 'career at H&M',
          path: '/',
        },
        {
          name: 'career at H&M',
          path: '/',
        },
        {
          name: 'career at H&M',
          path: '/',
        },
        {
          name: 'career at H&M',
          path: '/',
        },
      ],
    },
    {
      title: 'Help',
      subtitle: [
        {
          name: 'customer service',
          path: '/',
        },
        {
          name: 'customer service',
          path: '/',
        },
        {
          name: 'customer service',
          path: '/',
        },
      ],
    },
    {
      title: 'Help',
      subtitle: [
        {
          name: 'customer service',
          path: '/',
        },
        {
          name: 'customer service',
          path: '/',
        },
        {
          name: 'customer service',
          path: '/',
        },
      ],
    },
  ];

  console.log(footerInfo);
  return (
    <div className="w-full md:py-8 py-6 bg-gray flex justify-center flex-col">
      <div className="lg:w-[60%] m-auto flex align-middle justify-start flex-col w-full">
        <div className="w-full  flex lg:flex-row flex-col ">
          {footerInfo.map((item, index) => {
            return <FooterAccordin data={item} key={index} />;
          })}
        </div>
        <div className=" w-full flex justify-center py-2">
          <Tooltip title="Facebook" sx={{ mx: '10px' }}>
            <FacebookOutlinedIcon />
          </Tooltip>
          <Tooltip title="Instagram" sx={{ mx: '10px' }}>
            <InstagramIcon />
          </Tooltip>
          <Tooltip title="Linkedin" sx={{ mx: '10px' }}>
            <LinkedInIcon />
          </Tooltip>
          <Tooltip title="Email" sx={{ mx: '10px' }}>
            <MailIcon />
          </Tooltip>
        </div>
      </div>

      <div className="w-full flex justify-center py-4 relative">
        <p className="lg:max-w-[60%] w-full text-[12px] leading-6 text-center px-4">
          The content of this site is copyright-protected and is the property of
          H & M Hennes & Mauritz AB.
        </p>
      </div>
        <div className="flex-1 flex justify-center items-center py-3">
          <img
            src={logo}
            alt="logo"
            className="w-[30px] h-auto object-contain saturate-0"
          />
        </div>
    </div>
  );
};

export default Footer;
