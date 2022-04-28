import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { TableItem } from './components/tableItem';
import { Item } from './types/item';

function App() {
  const [name, setName ] = useState('');
  const [license, setLicense ] = useState('');
  const [list, setList] = useState<Item[]>([]);

  const read = () => {
    return localStorage.park ? JSON.parse(localStorage.park) : [];
  }

  const save = (vehicles: Item[]) => {
    localStorage.setItem('park', JSON.stringify(vehicles));
  }

  useEffect(() => {
    setList(read());
  },[]);

  const handleClick = () => {
    if(!name || !license) {
      alert('Inputs vazios')
      return;
    }
    const newCar = {
      id: list.length + 1,
      name,
      license,
      entry: new Date().toISOString(),
    }
    setList((pState) => [...pState, newCar]);
    save([...read(), newCar]);
    setName('');
    setLicense('');
  }

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'license') setLicense(target.value);
  }

  return (
    <C.Container>
      <C.Header>Parking Car</C.Header>
      <C.Form>
        <input
          type="text"
          name="name"
          placeholder="vehicle name"
          autoComplete="off"
          value={name}
          onChange={ handleChange }
        />
        <input
          type="text"
          name="license"
          placeholder="license plate"
          autoComplete="off"
          value={license}
          onChange={ handleChange }
        />
        <button
          type="button"
          onClick={ handleClick }
        >
          Register
        </button>
      </C.Form>
      <C.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>License</th>
            <th>Entry</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((e, index) => (
              <TableItem
              item={e}
              key={`${e.license}${index}`}
              setList={ setList }/>
            ))
          }
        </tbody>
      </C.Table>
    </C.Container>
  );
}

export default App;
