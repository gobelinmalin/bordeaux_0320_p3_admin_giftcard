const fields = [
  {
    label: 'Civilité',
    name: 'civility',
    type: 'text',
    pattern: '',
  },
  {
    label: 'Prénom',
    name: 'firstname',
    type: 'text',
    pattern: '',
  },
  {
    label: 'Nom',
    name: 'lastname',
    type: 'text',
    pattern: '',
  },
  {
    label: 'Adresse Postale',
    name: 'address',
    type: 'text',
    pattern: '',
  },
  {
    label: 'Code postal/Zip code',
    name: 'zipcode',
    type: 'text',
    pattern: '',
  },
  {
    label: 'Ville',
    name: 'city',
    type: 'text',
    pattern: '',
  },
  {
    label: 'Téléphone',
    name: 'phone',
    type: 'tel',
    pattern: '[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}',
    tag: 'small',
  },
  {
    label: 'Date de naissance',
    name: 'birthdate',
    type: 'date',
    pattern: '',
  },
  {
    label: 'Date de création du profil',
    name: 'createProfil',
    type: 'date',
    pattern: '',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    pattern: '',
  },
];

export default fields;
