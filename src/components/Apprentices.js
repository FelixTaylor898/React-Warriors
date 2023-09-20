import { Fragment } from 'react';
import { Cat } from './Cat';
import './../App.css';

export function Apprentices(props) {
    const apprentices = props.apprentices;
    return (
        <Fragment>
            <div>
                <div class="title-and-button">
                    {apprentices.length > 0 && <h2>Apprentices</h2>}</div>
                {apprentices.map(cat => <Cat key={cat.name} cat={cat} />)}
            </div>
        </Fragment>
    );
}