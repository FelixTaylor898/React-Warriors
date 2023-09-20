import './../App.css';
import { Fragment } from 'react';
import { Cat } from './Cat';
import { useDispatch } from 'react-redux';
import {
  generateLeader, generateDeputy, generateMedicine, addMedApprentice,
  addApprentice, deleteApprentice, delMedApprentice
} from '../js/action';

export function Leadership(props) {
  const leader = props.leader;
  const deputy = props.deputy;
  const medicine = props.medicine;
  const medApp = props.medApp;
  const show = props.show;
  var dispatch = useDispatch();
  return (
    <Fragment>
      <div class="title-and-button">
        <h2>Leader</h2>
        {show && <button class="button" onClick={() => dispatch(generateLeader())}>New Leader</button>}
      </div>
      <div>< Cat cat={leader} />
        {leader.apprentice && <p>&emsp;Apprentice: {leader.apprentice.name}</p>}
        {show && <div>
          {!leader.apprentice && <button class="button" onClick={() => dispatch(addApprentice(leader))}>Add Apprentice</button>}
          {leader.apprentice && <button class="button" onClick={() => dispatch(deleteApprentice(leader))}>Remove Apprentice</button>}
        </div>}
      </div>
      <div class="title-and-button">
        <h2>Deputy</h2>
        {show && <button class="button" onClick={() => dispatch(generateDeputy())}>New Deputy</button>}
      </div>
      <div>
        < Cat cat={deputy} />
        {deputy.apprentice && <p>&emsp;Apprentice: {deputy.apprentice.name}</p>}
        {show && <div>
          {!deputy.apprentice && <button class="button" onClick={() => dispatch(addApprentice(deputy))}>Add Apprentice</button>}
          {deputy.apprentice && <button class="button" onClick={() => dispatch(deleteApprentice(deputy))}>Remove Apprentice</button>}
        </div>}
      </div>
      <div class="title-and-button">
        <h2>Medicine Cat</h2>
        {show && <button class="button" onClick={() => dispatch(generateMedicine())}>New Medicine Cat</button>}
      </div>
      <Cat cat={medicine} />

      {medApp && <Cat cat={medApp} />}
      {!medApp && show && <button class="button" onClick={() => dispatch(addMedApprentice())}>Add Apprentice</button>}
      {medApp && show && <button class="button" onClick={() => dispatch(delMedApprentice())}>Remove Apprentice</button>}
    </Fragment>
  );
}