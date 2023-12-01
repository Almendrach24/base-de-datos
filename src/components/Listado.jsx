import React from 'react';

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <div>
      <h2>Listado de colaboradores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button onClick={() => eliminarColaborador(colaborador.id)} className="btn btn-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;