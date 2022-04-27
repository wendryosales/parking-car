import * as C from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item,
}

export const TableItem = ({ item }: Props) => {
    return (
      <C.Tr key={item.id}>
        <th>{item.name}</th>
        <th>{item.license}</th>
      </C.Tr>
    );
}