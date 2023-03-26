export const FETCH_RESTAURANTS =
  "https://gofoodsserver.onrender.com/api/restaurants/?lat=25.6039168&lng=85.1360248";

export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// export const FETCH_MENU_URL =
//   "https://www.swiggy.com/dapi/menu/v4/full?lat=25.8773651&lng=86.5927887&menuId=";

export const FETCH_MENU_URL =
  "https://gofoodsserver.onrender.com/api/menu/?lat=25.5940947&lng=85.1375645&restaurantId=";

export const FAQs = [
  {
    id: 1,
    title: "How can I place an order online?",
    description:
      "To place an order, you can visit our website and select the restaurant or cuisine you want to order from. You can then choose the items you want to order and add them to your cart. Once you have selected all the items, you can proceed to checkout and enter your delivery address and payment information to complete the order.",
  },
  {
    id: 2,
    title: "How long does it take for my order to arrive?",
    description:
      "The delivery time may vary depending on your location and the restaurant's availability. You can check the estimated delivery time on the checkout page before confirming your order. Once your order is placed, you will receive updates on its status and expected delivery time.",
  },
  {
    id: 3,
    title: "What if I want to cancel my order?",
    description:
      "You can cancel your order before it is prepared by the restaurant. To cancel an order, you can go to your order history and select the cancel option. If the restaurant has already started preparing your order, cancellation may not be possible. In such cases, please contact our customer support for assistance.",
  },
  {
    id: 4,
    title: "What payment methods do you accept?",
    description:
      "We accept various payment methods including credit/debit cards, online banking, and digital wallets such as UPI, Apple Pay, and Google Pay. You can choose your preferred payment method during checkout.",
  },
  {
    id: 5,
    title: "What if there is an issue with my order?",
    description:
      "If there is an issue with your order, such as missing items or incorrect order, please contact our customer support immediately. We will investigate the issue and take appropriate action to resolve it. In case of any quality issues with the food, please take pictures and share them with us so that we can take necessary steps to prevent it from happening in the future.",
  },
];

//LEGACY
/**
 * https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&page_type=DESKTOP_WEB_LISTING
 */
