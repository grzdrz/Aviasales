import React from 'react';
import { connect } from 'react-redux';

import IFiltersAndSorterAction from '../../storage/FiltersAndSortersState/types/IFiltersAndSorterAction';
import IReducerState from '../../storage/types/IReducerState';

import actions from './actions';

import './filters-list.scss';

interface IItem {
  isChecked: boolean,
  name: string,
  text: string,
}

interface IProps {
  title?: string,
  items: IItem[],
  setFilters: (filters: string[]) => IFiltersAndSorterAction,
}

function FiltersList(props: IProps) {
  const {
    title = 'Количество пересадок',
    items,
    setFilters,
  } = props;

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    /* event.preventDefault(); */

    const targetInput = event.target as HTMLInputElement;
    const form = targetInput.closest('.filters-list') as HTMLFormElement;
    const inputs = Array.from(form.querySelectorAll('.filters-list__input')).map((element) => element as HTMLInputElement);

    const filters = inputs
      .filter((input) => input.checked)
      .map((input) => input.name);

    setFilters(filters);
  };

  return (
    <form className='filters-list'>
      <p className='filters-list__title'>{title}</p>
      <ul className='filters-list__items'>
        {items.map((item, i) => {
          return (
            <label
              className='filters-list__label'
              key={`filters-list__label_${i}`}
            >
              <input
                className='filters-list__input'
                type='checkbox'
                name={item.name}
                defaultChecked={item.isChecked}
                onClick={handleInputClick}
              ></input>
              <span className='filters-list__frame'></span>
              <span className='filters-list__text'>{item.text}</span>
            </label>
          );
        })}
      </ul>
    </form>
  );
}

const mapStateToProps = (state: IReducerState) => state;
export default connect(mapStateToProps, actions)(FiltersList);
