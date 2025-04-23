import classes from './CartItem.module.css';
import { toggleCart } from '../slice/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item || [];

  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total || '0.00'}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div
          className={classes.quantity}
          onClick={() => {
            dispatch(toggleCart());
          }}
        >
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
