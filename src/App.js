import { useState } from 'react';
import Input from './components/Inputs';
import Button from './components/Button';
import Tarjeta from './components/Tarjeta';
import Container from './components/Container';
import useFormulario from './hooks/useFormulario';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({ nombre: '', apellido: '', email: '' });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([
      ...usuarios,
      formulario
    ]);
    reset();
  };
  console.log(usuarios);
  return (
    <Container>
      <Tarjeta>
        <div style={{padding: 20}}>
          <form onSubmit={submit}>
            <Input 
              name='nombre' 
              label='Nombre' 
              value={formulario.nombre} 
              onChange={handleChange}
              placeholder='Nombre'
            />

            <Input 
              name='apellido' 
              label='Apellido' 
              value={formulario.apellido} 
              onChange={handleChange}
              placeholder='Apellido'
            />

            <Input 
              name='email' 
              label='Email' 
              value={formulario.email} 
              onChange={handleChange}
              placeholder='Email'
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Tarjeta>
      <Tarjeta>
        <ul>
          {usuarios.map((u, i) => 
            <li key={i}> {` ${u.nombre} ${u.apellido} ${u.email} `} </li>  
          )}
        </ul>
      </Tarjeta>
    </Container>
  );
}

export default App;
