import { HiArrowRight } from 'react-icons/hi';
export const SidebarFilterData = [
  {
    title: 'sort by',
    icon: <HiArrowRight />,
    type: 'normal',
    doesHaveChildren: true,
    children: [
      {
        title: 'recommended',
        type: 'radio',
        doesHaveChildren: false,
        children: [],
      },
      {
        title: 'newest',
        type: 'radio',
        doesHaveChildren: false,
        children: [],
      },
      {
        title: 'lowest price',
        type: 'radio',
        doesHaveChildren: false,
        children: [],
      },
      {
        title: 'highest price',
        type: 'radio',
        doesHaveChildren: false,
        children: [],
      },
    ],
  },
  {
    title: 'size',
    icon: <HiArrowRight />,
    type: 'normal',
    doesHaveChildren: true,
    children: [
      {
        title: 'womenswear',
        icon: <HiArrowRight />,
        type: 'normal',
        doesHaveChildren: true,
        children: [
          {
            title: '4',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: '6',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: '8',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: '8',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: '10',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
        ],
      },
      {
        title: 'bras',
        icon: <HiArrowRight />,
        type: 'normal',
        doesHaveChildren: true,
        children: [
          {
            title: 'xs/xl',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: 'xxl/xsa',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
        ],
      },
      {
        title: 'menswear',
        icon: <HiArrowRight />,
        type: 'normal',
        doesHaveChildren: true,

        children: [
          {
            title: 's',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: 'm',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: 'l',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
        ],
      },
      {
        title: 'footwear',
        icon: <HiArrowRight />,
        type: 'normal',
        doesHaveChildren: true,

        children: [
          {
            title: '2',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: '4',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
          {
            title: '6',
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
          },
        ],
      },
    ],
  },
];
