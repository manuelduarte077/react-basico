
import { Fragment } from 'react'

function App() {

    const empleado = {
        name: 'Manuel',
        jobs: 'Developer Mobile'
    }
  return (
      <Fragment>
          <h1>{empleado.name}</h1>
          <p>{empleado.jobs}</p>
      </Fragment>
  );
}

export default App;
