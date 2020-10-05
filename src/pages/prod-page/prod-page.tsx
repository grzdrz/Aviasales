import React from 'react';
import { connect } from 'react-redux';

import PlayersList from '../../components/players-list/players-list';
import IReducedState from '../../storage/types/IReducerState';

import './prod-page.scss';

interface IProps {
}

function ProdPage(props: IProps) {
  const { } = props;

  return (
    <div className='prod-page'>
      <div className='prod-page__players-list'>
        <PlayersList />
      </div>
    </div>
  );
}

export default ProdPage
