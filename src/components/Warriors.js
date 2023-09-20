import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Cat } from './Cat';
import { deleteWarrior, addWarrior, addApprentice, deleteApprentice } from '../js/action';
import './../App.css';

export function Warriors(props) {
  var dispatch = useDispatch();
  const warriors = props.warriors;
  const show = props.show;
  return (
    <Fragment>
      <div>
        <div class="title-and-button">
          <h2>Warriors</h2>
          {show && <button class="button" onClick={() => dispatch(addWarrior())}>New Warrior</button>}
        </div>
        {warriors.map(cat => <div><Cat key={cat.name} cat={cat} />
          {cat.apprentice && <p>&emsp;Apprentice: {cat.apprentice.name}</p>}
          {show && <div><button class="button" onClick={() => dispatch(deleteWarrior(cat))}>Remove Warrior</button>
            {!cat.apprentice && <button class="button" onClick={() => dispatch(addApprentice(cat))}>Add Apprentice</button>}
            {cat.apprentice && <button class="button" onClick={() => dispatch(deleteApprentice(cat))}>Remove Apprentice</button>}
          </div>}</div>
        )}

      </div>
    </Fragment>
  );
}