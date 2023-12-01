
import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario'
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, { id: (colaboradores.length + 1).toString(), ...nuevoColaborador }]);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  };

  const buscarColaboradores = (busqueda) => {
    const resultadoBusqueda = BaseColaboradores.filter(colaborador => {
      return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.edad.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase())
      );
    });
    setColaboradores(resultadoBusqueda);
  };

  const mostrarAlerta = (tipo, mensaje) => {
    setAlerta({ tipo, mensaje });
    setTimeout(() => {
      setAlerta(null);
    }, 3000);
  };

  return (
    <div className="container mt-5">
      {alerta && <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} />}
      <Buscador buscarColaboradores={buscarColaboradores} />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
      <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
    </div>
  );
};

export default App;