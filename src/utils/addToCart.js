import { useRecoilState } from "recoil";
import { cartItemState } from "../data/atom";

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemState);

  const addToCart = (dish) => {
    let cartItem = {
      amount: 1,
      amountTotal: 1,
      image: dish.image,
      name: dish.name,
      description: dish.description,
      price: dish.price,
      priceTotal: dish.price,
    };

    let dishInCart = cartItems.find((dish) => dish.name === cartItem.name);

    if (dishInCart) {
      let newCart = cartItems.map((dish) => {
        if (dish.name === cartItem.name) {
          return {
            ...dish,
            priceTotal: (dish.price* dish.amount)+dish.price ,
			amount:dish.amount+1
          };
        } else {
          return dish;
        }
      });
      setCartItems(newCart);
    } else {
      const newCart = [...cartItems, cartItem];
      setCartItems(newCart);
      console.log("cartinnehåll: ", newCart);
    }
  };
  console.log(cartItems);

  return { cartItems, addToCart };
};

export default useCart;
