import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Cat } from './Cat';
import './../App.css';
import { addElder, deleteElder } from './../js/action';

export function Elders(props) {
    var dispatch = useDispatch();
    const elders = props.elders;
    const show = props.show;
    return (
        <Fragment>
            <div>
                <div class="title-and-button">
                    <h2>Elders</h2>
                    {show && <button class="button" onClick={() => dispatch(addElder())}>New Elder</button>}
                </div>
                {elders.map(cat => <div><Cat key={cat.name} cat={cat} />{show && 
                <button class="button" onClick={() => dispatch(deleteElder(cat))}>Remove Elder</button>}</div>)}
            </div>
        </Fragment>
    );
}