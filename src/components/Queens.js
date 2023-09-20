import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Cat } from './Cat';
import './../App.css';
import { addQueen, deleteQueen, generateKits, removeKits } from '../js/action';

export function Queens(props) {
    var dispatch = useDispatch();
    const queens = props.queens;
    const justUpdate = props.justUpdate;
    const show = props.show;
    return (
        <Fragment>
            <div>
                <div class="title-and-button">
                    <h2>Queens</h2>
                    {show && <button class="button" onClick={() => dispatch(addQueen())}>New Queen</button>}
                </div>
                {queens.map(cat => <div><Cat key={cat.name} cat={cat} />
                {(justUpdate || !justUpdate) && cat.kits && <p>&emsp;{cat.kits}</p>}
                {show && <button class="button" onClick={() => dispatch(deleteQueen(cat))}>Remove Queen</button>}
                {show && !cat.kits && <button class="button" onClick={() => dispatch(generateKits(cat))}>Create Kits</button>}
                {show && cat.kits && <button class="button" onClick={() => dispatch(removeKits(cat))}>Remove Kits</button>}

                </div>
                )}
            </div>
        </Fragment>
    );
}