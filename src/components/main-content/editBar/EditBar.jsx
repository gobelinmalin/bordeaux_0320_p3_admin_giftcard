import React from 'react';

import './edit-bar.css';
import EditButton from './EditButton';

function EditBar() {
  return (
    <div className="editBar">
      <EditButton />
      <EditButton />
      <EditButton />
    </div>
  );
}

export default EditBar;
