import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './components/app/shop';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
