import './../App.css';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {generateTitle} from '../js/action';

export function Title(props) {
  var dispatch = useDispatch();
  const clanName = props.name;
  const show = props.show;
  return (
    <Fragment>
      <div class="title-and-button">
            <h1>{clanName}</h1>
            {show && <button class="button" onClick={() => dispatch(generateTitle())}>New Title</button>}
        </div>
    </Fragment>
  );
}