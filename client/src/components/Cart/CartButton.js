import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCart } from '../slice/cartSlice';
import CartItem from './CartItem';

const CartButton = () => {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state) => state.cart.isCartVisible);
  return (
    <>
      <button
        className={classes.button}
        onClick={() => {
          dispatch(toggleCart());
        }}
      >
        <span>My Cart</span>
        <span className={classes.badge}>1</span>
      </button>
      {isCartVisible && <CartItem />}
    </>
  );
};

export default CartButton;
