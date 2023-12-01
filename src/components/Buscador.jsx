import React, { useState } from 'react';

const Buscador = ({ filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarColaboradores(e.target.value);
  };

  return (
    <div>
      <h2>Busca un colaborador</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default Buscador;