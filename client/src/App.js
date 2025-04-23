import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiActions } from './components/slice/uiSlice';
import Notification from './components/UI/Notification';
let isInitital = true;
function App() {
  const showCart = useSelector((state) => state.cart.isCartVisible);
  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'sending...',
          message: 'updating cart',
        })
      );
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/.json`,
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      console.log(response.status);
      if (response.status !== 200) {
        throw new Error('sending cart data failed');
      }

      //const responseData = await response.json();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'success',
          message: 'updated cart',
        })
      );
    };

    if (isInitital) {
      isInitital = false;
      return;
    }
    sendCartData().catch((error) => {
      console.log('Error>>>>>>', error);
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'something went wrong...',
          message: 'updating cart failed',
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
