import { Fragment } from 'react';

export function Cat(props) {
    const cat = props.cat;
  return (
    <Fragment>
        <div>
            <p><strong>{cat.name}</strong>: {cat.fur} {cat.gender} with {cat.eyes} eyes.</p>
        </div>
    </Fragment>
  );
}