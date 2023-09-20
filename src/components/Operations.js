import { Fragment } from 'react';
import './../App.css';
import { useDispatch } from 'react-redux';
import { hideButtons, showButtons, generate } from '../js/action';

export function Operations(props) {
    const show = props.show;
    var dispatch = useDispatch();
  return (
    <Fragment>
        <div>
            <button class="button" onClick={() => dispatch(generate())}>Generate</button>
            {show && <button class="button" onClick={() => dispatch(hideButtons())}>Hide Buttons</button>}
            {!show && <button class="button" onClick={() => dispatch(showButtons())}>Show Buttons</button>}
        </div>
    </Fragment>
  );
}