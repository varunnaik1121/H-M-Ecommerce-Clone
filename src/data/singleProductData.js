import whiteShirt1 from '../assets/whiteShirt1.webp';
import whiteShirt2 from '../assets/whiteShirt2.jpeg';
import brownShirt1 from '../assets/brownShirt1.jpeg';
import brownShirt2 from '../assets/brownShirt2.webp';
import shirtImage5 from '../assets/shirt5.webp';
import shirtImage6 from '../assets/shirtImage6.webp';
import whiteDp from '../assets/whiteShirtDp.webp';
import brownDp from '../assets/brownShirtDp.webp';

import gridImage1 from '../assets/gridImage1.webp';
import gridImage2 from '../assets/gridImage2.webp';
import gridImage3 from '../assets/gridImage3.webp';
import gridImage4 from '../assets/gridImage4.webp';

export const allProducts = [
  {
    id: 12990,
    title: 'Relaxed fit patterned shirt',
    price: 1299,
    totalReviews: 45,
    estimatedDeliveryTime: 'Standard delivery in 2-7 days',
    isAvailableInStores: false,
    subtitle: 'white/striped',
    color: 'white',
    primaryImage: whiteShirt1,
    secondaryImage: whiteShirt2,
    isNewArrival: true,
    availableSizes: ['xs', 'sm', 'm', 'l', 'xl'],
    description: `Length: Regular length
      Sleeve Length: Short sleeve
      Fit: Regular fit
      Neckline: Round neck
    `,
    tumbnailImage: whiteDp,
    gridImages: [gridImage1, gridImage2, gridImage3, gridImage4],
    colors: [
      {
        id: 12991,
        image: brownDp,
        title: 'some random title',
        color: ' brown',
      },
      {
        id: 12990,
        image: whiteDp,
        title: 'some random title2',
        color: 'white',
      },
    ],
  },
  {
    id: 12991,
    title: 'Relaxed fit patterned shirt',
    price: 199,
    totalReviews: 45,
    estimatedDeliveryTime: 'Standard delivery in 2-7 days',
    isAvailableInStores: false,
    isNewArrival: false,
    subtitle: 'brown/striped',
    color: 'brown',
    primaryImage: brownShirt1,
    secondaryImage: brownShirt2,
    availableSizes: ['xs', 'sm', 'm', 'l', 'xl'],
    description: `Length: Regular length
      Sleeve Length: Short sleeve
      Fit: Regular fit
      Neckline: Round neck
    `,
    tumbnailImage: brownDp,
    gridImages: [gridImage1, gridImage2, gridImage3, gridImage4],
    colors: [
      {
        id: 12991,
        image: brownDp,
        title: 'some random title',
        color: ' brown',
      },
      {
        id: 12990,
        image: whiteDp,
        title: 'some random title2',
        color: 'white',
      },
    ],
  },
];
// export const singleProductData = {
//   id: 12990,
//   title: 'Relaxed fit patterned shirt',
//   price: 1299,
//   totalReviews: 45,
//   estimatedDeliveryTime: 'Standard delivery in 2-7 days',
//   isAvailableInStores: false,
//   subtitle: 'red/striped',
//   color: 'red',
//   primaryImage: shirtImage1,
//   secondaryImage: shirtImage2,
//   availableSizes: ['xs', 'sm', 'm', 'l', 'xl'],
//   description: `Length: Regular length
//       Sleeve Length: Short sleeve
//       Fit: Regular fit
//       Neckline: Round neck
//     `,
//   tumbnailImage: tumbnailImage1,
//   gridImages: [gridImage1, gridImage2, gridImage3, gridImage4],
//   colors: [
//     {
//       id: 12991,
//       image: tumbnailImage1,
//       title: 'some random title',
//       color: ' beige',
//     },
//     {
//       id: 12992,
//       image: tumbnailImage2,
//       title: 'some random title2',
//       color: 'blue',
//     },
//     {
//       id: 12993,
//       image: tumbnailImage3,
//       title: 'some random title3',
//       color: 'beige',
//     },
//     {
//       id: 12990,
//       image: tumbnailImage1,
//       title: 'some random title3',
//       color: 'red',
//     },
//   ],
// };
