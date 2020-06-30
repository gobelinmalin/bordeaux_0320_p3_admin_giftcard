import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../header/Header';
import ShopsList from './ShopsList';
import ShopsAdd from './ShopsAdd';
import ShopsUpdate from './ShopsUpdate';

const Shops = () => {
  // DATA
  /* const shopsDatas = [
    { id: 1, name: 'steam', online: 'eshop', offline: 'niet' },
    { id: 2, name: 'sony', online: 'eshop', offline: 'niet' },
    { id: 3, name: 'capcom', online: 'eshop', offline: 'yes' },
  ]; */

  const initialFormState = { name: '', online: '', offline: '' };

  // Setting States
  const [shops, setShops] = useState([]);

  const [currentShop, setCurrentShop] = useState(initialFormState);
  const [edit, setEdit] = useState(false);

  const getShopsData = () => {
    const url = 'http://localhost:3000/api/shops';
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setShops(data));
  };

  // CRUD operations
  const addShop = (shop) => {
    // eslint-disable-next-line no-param-reassign
    shop.id = shops.length + 1;
    setShops([...shops, shop]);
  };

  const deleteShop = (id) => {
    setEdit(false);
    setShops(shops.filter((shop) => shop.id !== id));
  };

  const updateShop = (id, updatedShop) => {
    setEdit(false);
    setShops(shops.map((shop) => (shop.id === id ? updatedShop : shop)));
  };

  const editShop = (shop) => {
    setEdit(true);
    setCurrentShop({
      id: shop.id,
      name: shop.name,
      online: shop.online,
      offline: shop.offline,
    });
  };

  useEffect(() => {
    getShopsData();
  }, []);

  return (
    <>
      <Header />
      <div className="formType">
        {edit ? (
          <ShopsUpdate
            setEdit={setEdit}
            currentShop={currentShop}
            updateShop={updateShop}
          />
        ) : (
          <ShopsAdd addShop={addShop} />
        )}
      </div>
      <ShopsList shops={shops} deleteShop={deleteShop} editShop={editShop} />
    </>
  );
};

export default Shops;
