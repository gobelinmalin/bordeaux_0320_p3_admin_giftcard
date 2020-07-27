import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { authContext } from '../contexts/AuthContext';

const Profile = () => {
  const { setAuthData, auth } = useContext(authContext);

  /*   const [profile, setProfile] = useState(auth); */

  // clear context
  const onLogOut = () => {
    setAuthData(null);
  };

  return (
    <>
      <div>Bonjour{auth.data}</div>
      <Button variant="primary" type="button" onClick={onLogOut}>
        Se deconnecter
      </Button>
    </>
  );
};

export default Profile;
