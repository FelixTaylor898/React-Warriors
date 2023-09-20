import './../App.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Title } from './Title';
import { Warriors } from './Warriors';
import { Apprentices } from './Apprentices';
import { Queens } from './Queens';
import { Elders } from './Elders';
import { Leadership } from './Leadership';
import { Helmet } from 'react-helmet';
import { Operations } from './Operations';

function App() {
  const clanName = useSelector(state => state.clanName);
  const leader = useSelector(state => state.leader);
  const deputy = useSelector(state => state.deputy);
  const warriors = useSelector(state => state.warriors);
  const apprentices = useSelector(state => state.apprentices);
  const queens = useSelector(state => state.queens);
  const justUpdate = useSelector(state => state.justUpdate);
  const elders = useSelector(state => state.elders);
  const medicine = useSelector(state => state.medicine);
  const medApp = useSelector(state => state.medApp);
  const show = useSelector(state => state.show);
  return (
    <Fragment>
      <Helmet bodyAttributes={{ style: 'background-color : #0E273C' }} />
      <div class="flex-container">
        < Operations show={show} />
        < Title name={clanName} show={show} />
        < Leadership leader={leader} deputy={deputy} medicine={medicine} medApp={medApp} show={show} />
        < Warriors warriors={warriors} show={show} />
        < Apprentices apprentices={apprentices} />
        < Queens queens={queens} show={show} justUpdate={justUpdate} />
        < Elders elders={elders} show={show} />
      </div>
    </Fragment>
  );
}

export default App;