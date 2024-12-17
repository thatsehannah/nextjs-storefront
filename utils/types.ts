export type actionFn = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

//NOT NEEDED RIGHT NOW
// export type CartItem = {
//   productId: string;
//   image: string;
//   title: string;
//   price: string;
//   amount: number;
//   company: string;
// };

// export type CartState = {
//   cartItems: CartItem[];
//   numItemsInCart: number;
//   cartTotal: number;
//   shippingPrice: number;
//   tax: number;
//   orderTotal: number;
// };
