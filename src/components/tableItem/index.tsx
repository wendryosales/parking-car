import * as C from './styles';
import { Item } from '../../types/item';
import Icon from './bin.png'

type Props = {
    item: Item,
    setList: (param: any) => void,
}

export const TableItem = (
    { item, setList }: Props,
  ) => {

  const read = () => {
    return localStorage.park ? JSON.parse(localStorage.park) : [];
  }

  const save = (vehicles: Item[]) => {
    localStorage.setItem('park', JSON.stringify(vehicles));
  }

  const calc = (mil: number) => {
    const min = Math.floor(mil / 60000);
    const seg = Math.floor((mil % 60000) / 1000);

    return `The vehicle remained in the parking lot for ${min} min and ${seg} sec. Do you really want to take it off?`
  }

  const removeItem = ({target}: React.MouseEvent<HTMLAnchorElement>) => {
    const time = new Date().getTime() - new Date(item.entry).getTime()
    if(!confirm(calc(time))) return;
    const carsList = read().filter((e: Item) => e.license !== item.license);
    save(carsList);
    setList(carsList)
  }


  return (
    <C.Tr>
      <th>{item.name}</th>
      <th>{item.license}</th>
      <th>{String(item.entry)}</th>
      <th><a onClick={ removeItem }><img src={Icon} alt="Delete"/></a></th>
    </C.Tr>
  );
}