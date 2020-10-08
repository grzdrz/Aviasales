import React from 'react';

import './checkbox-list.scss';

interface IItem {
  isChecked: boolean,
  name: string,
  text: string,
}

interface IProps {
  title?: string,
  items?: IItem[],
  handleClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
}

function CheckboxList(props: IProps) {
  const {
    title = 'Количество пересадок',
    items = [
      {
        isChecked: false,
        name: 'checkbox-list_filter_4',
        text: 'Все',
      },
      {
        isChecked: false,
        name: 'checkbox-list_filter_0',
        text: 'Без пересадок',
      },
      {
        isChecked: false,
        name: 'checkbox-list_filter_1',
        text: '1 пересадка',
      },
      {
        isChecked: false,
        name: 'checkbox-list_filter_2',
        text: '2 пересадки',
      },
      {
        isChecked: false,
        name: 'checkbox-list_filter_3',
        text: '3 пересадки',
      },
    ],
  } = props;

  return (
    <form className='checkbox-list'>
      <p className='checkbox-list__title'>{title}</p>
      <ul className='checkbox-list__items'>
        {items.map((item, i) => {
          return (
            <label className='checkbox-list__label' key={`checkbox-list__label_${i}`}>
              <input
                className='checkbox-list__input'
                type='checkbox'
                name={item.name}
                defaultChecked={item.isChecked}
              ></input>
              <span className='checkbox-list__frame'></span>
              <span className='checkbox-list__text'>{item.text}</span>
            </label>
          );
        })}
      </ul>
    </form>
  );
}

export default CheckboxList;
