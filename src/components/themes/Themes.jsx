// import modules
import React, { useState, useEffect } from 'react';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ProductsNavbar from '../products/ProductsNavbar';

// import component
import ThemesAdd from './ThemesAdd';

const Themes = () => {
  const [themes, setThemes] = useState([]);
  const getThemesDatas = () => {
    Axios.get(`${process.env.REACT_APP_HOST}/themes`)
      .then((response) => response.data)
      .then((data) => setThemes(data));
  };

  useEffect(() => {
    getThemesDatas();
  }, []);

  // Delete modal
  const [themeId, setThemeId] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleShow = (id) => {
    setShowModal(true);
    setThemeId(id);
  };

  const handleClose = () => setShowModal(false);

  const deleteTheme = () => {
    const url = `${process.env.REACT_APP_HOST}/themes/${themeId}`;
    Axios.delete(url)
      .then((response) => response.data && setShowModal(false))
      .finally(() => getThemesDatas());
  };

  return (
    <Container>
      <ProductsNavbar />
      <div className="insideNavBar">
        <Link to="/admin/products">
          <Button variant="insideNav">Retour aux produits</Button>
        </Link>
      </div>
      <div className="sectionTitle">
        <h3>Liste des THEMES de produits</h3>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Nom du thème</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {themes.map((theme) => (
            <tr>
              <td>{theme.id}</td>
              <td>
                <Link to={`/admin/themes/${theme.id}`}>{theme.name}</Link>
              </td>
              <td className="action">
                <Link to={`/admin/themes/${theme.id}`}>
                  <FontAwesomeIcon type="submit" icon="pen" />
                </Link>
                <FontAwesomeIcon
                  type="submit"
                  icon="trash"
                  onClick={() => handleShow(theme.id)}
                />
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    Attention, vous ne devriez pas supprimer ce thème si des
                    produits lui sont associés.
                  </Modal.Header>
                  <Modal.Footer>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={() => deleteTheme()}>Supprimer</Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <ThemesAdd getThemesDatas={getThemesDatas} />
      </div>
    </Container>
  );
};

export default Themes;
