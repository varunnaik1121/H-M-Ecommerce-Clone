import { HiArrowRight } from 'react-icons/hi';
export const SidebarFilterData = [
  {
    title: 'sort by',
    mainTitle: 'Sort by',
    icon: <HiArrowRight />,
    type: 'normal',
    doesHaveChildren: true,
    children: [
      {
        title: 'recommended',
        type: 'radio',
        mainTitle: 'Sort by',
        doesHaveChildren: false,
        children: [],
      },
      {
        title: 'newest',
        type: 'radio',
        mainTitle: 'Sort by',
        doesHaveChildren: false,
        children: [],
      },
      {
        title: 'lowest price',
        type: 'radio',
        mainTitle: 'Sort by',
        doesHaveChildren: false,
        children: [],
      },
      {
        title: 'highest price',
        type: 'radio',
        mainTitle: 'Sort by',
        doesHaveChildren: false,
        children: [],
      },
    ],
  },

  {
    title: 'size',
    mainTitle: 'size',

    icon: <HiArrowRight />,
    type: 'normal',
    doesHaveChildren: true,
    children: [
      {
        title: 'womenswear',
        mainTitle: 'size',

        icon: <HiArrowRight />,
        type: 'normal',

        doesHaveChildren: true,
        children: [
          {
            title: '4',
            mainTitle: 'womenswear',

            type: 'checkbox',
            doesHaveChildren: false,
            availableItems: 20,
            children: [],
            isChecked: false,
          },
          {
            title: '6',
            mainTitle: 'womenswear',

            type: 'checkbox',
            doesHaveChildren: false,
            availableItems: 12,
            children: [],
            isChecked: false,
          },
          {
            title: '8',
            type: 'checkbox',
            doesHaveChildren: false,
            mainTitle: 'womenswear',
            availableItems: 16,
            children: [],
            isChecked: false,
          },
          {
            title: '8',
            type: 'checkbox',
            doesHaveChildren: false,
            mainTitle: 'womenswear',
            availableItems: 20,
            children: [],
            isChecked: false,
          },
          {
            title: '10',
            type: 'checkbox',
            doesHaveChildren: false,
            mainTitle: 'womenswear',
            availableItems: 20,
            children: [],
            isChecked: false,
          },
        ],
      },
      {
        title: 'bras',
        mainTitle: 'bras',
        icon: <HiArrowRight />,
        type: 'normal',
        doesHaveChildren: true,
        children: [
          {
            title: 'xs/xl',
            mainTitle: 'bras',

            type: 'checkbox',
            doesHaveChildren: false,

            availableItems: 20,
            children: [],
            isChecked: false,
          },
          {
            title: 'xxl/xsa',
            type: 'checkbox',
            mainTitle: 'bras',
            doesHaveChildren: false,
            availableItems: 20,
            children: [],
            isChecked: false,
          },
        ],
      },
      {
        title: 'menswear',
        mainTitle: 'menswear',
        icon: <HiArrowRight />,
        type: 'normal',
        doesHaveChildren: true,

        children: [
          {
            title: 's',
            mainTitle: 'menswear',
            type: 'checkbox',
            availableItems: 20,
            doesHaveChildren: false,
            children: [],
            isChecked: false,
          },
          {
            title: 'm',
            type: 'checkbox',
            mainTitle: 'menswear',
            availableItems: 20,
            doesHaveChildren: false,
            children: [],
            isChecked: false,
          },
          {
            title: 'l',
            type: 'checkbox',
            mainTitle: 'menswear',
            doesHaveChildren: false,
            children: [],
            isChecked: false,
          },
        ],
      },
      {
        title: 'footwear',
        mainTitle: 'footwear',

        icon: <HiArrowRight />,
        type: 'normal',
        doesHaveChildren: true,

        children: [
          {
            title: '2',
            mainTitle: 'footwear',
            availableItems: 20,
            type: 'checkbox',
            doesHaveChildren: false,
            children: [],
            isChecked: false,
          },
          {
            title: '4',
            type: 'checkbox',
            mainTitle: 'footwear',
            doesHaveChildren: false,

            availableItems: 20,
            children: [],
            isChecked: false,
          },
          {
            title: '6',
            type: 'checkbox',
            doesHaveChildren: false,
            mainTitle: 'footwear',
            availableItems: 15,
            isChecked: false,

            children: [],
          },
        ],
      },
    ],
  },
];
