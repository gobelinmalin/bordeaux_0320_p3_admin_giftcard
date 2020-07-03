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
          {/* {shops.map((shop) => (
            <div>{shop}</div>
          ))} */}
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

ShopsList.defaultProps = {
  shops: [],
};

ShopsList.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.shape({})),
  deleteShop: PropTypes.func.isRequired,
  editShop: PropTypes.func.isRequired,
};

export default ShopsList;

/* Component.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.object,
    }),
  }).isRequired,
  deleteShop: PropTypes.func.isRequired,
  editShop: PropTypes.func.isRequired,
};
 */
