import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import Notification from '../UI/Notification';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <Notification />
    </Card>
  );
};

export default Cart;
