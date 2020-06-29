import React from 'react';
import { Table, Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

const ShopsList = ({ shops, deleteShop, editShop }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>E-Shop</th>
            <th>Boutique</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr>
              <td>{shop.id}</td>
              <td>{shop.name}</td>
              <td>{shop.online}</td>
              <td>{shop.offline}</td>
              <td>
                <Button
                  onClick={() => editShop(shop)}
                  className="button muted-button"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => deleteShop(shop.id)}
                  className="button muted-button"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShopsList;

/* ShopsList.defaultProps = {
  shops: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.string.isRequired,
  offline: PropTypes.string.isRequired,
  deleteShop: PropTypes.func.isRequired,
  editShop: PropTypes.func.isRequired,
}; */

ShopsList.propTypes = {
  shops: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteShop: PropTypes.func.isRequired,
  editShop: PropTypes.func.isRequired,
};
