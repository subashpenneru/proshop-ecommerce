import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/userEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

const App = () => {
  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route
              path='/profile'
              render={(props) =>
                userInfo ? (
                  <ProfileScreen {...props} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/shipping'
              render={(props) =>
                userInfo ? (
                  <ShippingScreen {...props} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/payment'
              render={(props) =>
                userInfo ? (
                  <PaymentScreen {...props} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/placeorder'
              render={(props) =>
                userInfo ? (
                  <PlaceOrderScreen {...props} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/order/:id'
              render={(props) =>
                userInfo ? <OrderScreen {...props} /> : <Redirect to='/login' />
              }
            />
            <Route path='/product/:id' component={ProductScreen} />
            <Route
              path='/cart/:id?'
              render={(props) =>
                userInfo ? <CartScreen {...props} /> : <Redirect to='/login' />
              }
            />
            <Route
              path='/admin/userlist'
              render={(props) =>
                userInfo ? (
                  userInfo.isAdmin ? (
                    <UserListScreen {...props} />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/admin/user/:id/edit'
              render={(props) =>
                userInfo ? (
                  userInfo.isAdmin ? (
                    <UserEditScreen {...props} />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/admin/productlist'
              exact
              render={(props) =>
                userInfo ? (
                  userInfo.isAdmin ? (
                    <ProductListScreen {...props} />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/admin/productlist/:pageNumber'
              exact
              render={(props) =>
                userInfo ? (
                  userInfo.isAdmin ? (
                    <ProductListScreen {...props} />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/admin/product'
              exact
              render={(props) =>
                userInfo ? (
                  userInfo.isAdmin ? (
                    <ProductEditScreen {...props} />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/admin/product/:id/edit'
              render={(props) =>
                userInfo ? (
                  userInfo.isAdmin ? (
                    <ProductEditScreen {...props} />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              path='/admin/orderlist'
              render={(props) =>
                userInfo ? (
                  userInfo.isAdmin ? (
                    <OrderListScreen {...props} />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route path='/search/:keyword' exact component={HomeScreen} />
            <Route path='/page/:pageNumber' exact component={HomeScreen} />
            <Route
              path='/search/:keyword/page/:pageNumber'
              exact
              component={HomeScreen}
            />
            <Route path='/' exact component={HomeScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
