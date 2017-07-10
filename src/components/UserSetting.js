/**
 * Created by sthavisomboon on 7/3/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

let UserSetting = ({dispatch}) => (
  <div>
    <PageHeader>User Setting</PageHeader>
    <button onClick={() => dispatch({
      type: 'SEED_FIREBASE'
    })}>
      Seed Firebase
    </button>
  </div>
);

UserSetting = connect()(UserSetting);
export default UserSetting;

