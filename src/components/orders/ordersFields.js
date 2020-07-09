const fields = [
  {
    label: 'N° de client',
    name: 'id_client',
    type: 'text',
    placeholder: 'ex: 311',
    pattern: '',
  },
  {
    label: 'N° de commande',
    name: 'id_delivery',
    type: 'text',
    placeholder: 'ex: 2',
    pattern: '',
  },
  {
    label: 'Online / Offline',
    name: 'status',
    type: 'text',
    placeholder: " 'true' pour Online OU 'false' pour Offline",
    pattern: '',
  },
  {
    label: 'Date de livraison',
    name: 'delivery_date',
    type: 'date',
    placeholder: 'AAAA/MM/JJ',
    pattern: '',
  },
  {
    label: 'Frais de port en devise',
    name: 'shipping_fees',
    type: 'text',
    placeholder: '4,99',
    pattern: '',
  },
  {
    label: 'Date de création',
    name: 'createDate',
    type: 'date',
    placeholder: 'AAAA/MM/JJ',
    pattern: '',
  },
];

export default fields;
