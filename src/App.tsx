import React, { useState } from 'react';
import * as C from './App.styles';
import { TableItem } from './components/tableItem';
import { Item } from './types/item';

function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'FIAT UNO',
      license: '4AS52',
    },
  ]);
  return (
    <C.Container>
      <C.Form>
        <C.Header>Parking Car</C.Header>
        <input
          type="text"
          name="name"
          placeholder="vehicle name"
          autoComplete="off"
        />
        <input
          type="text"
          name="license"
          placeholder="license plate"
          autoComplete="off"
        />
        <button type="button">Register</button>
      </C.Form>
      <C.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>License</th>
            <th>Entry</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((e) => (
              <TableItem item={e}/>
            ))
          }
        </tbody>
      </C.Table>
    </C.Container>
  );
}

export default App;
