import AppBase from 'components/scripts/index';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import routes from './routes';


export default class extends AppBase {
  static initialState() {
    return {
      memory: {
        initialData: {
          tes: 123,
          age: 100,
          items: []
        },
        myInitial: 0,
        sum: 0
      },
      local: {
        test: 200,
        store: 0,
        items: [
          {key: 1}
        ]
      },
      session: {
        afei: 'session test..'
      }
    }
  }

  _onClick = e => {
    let {test} = AppBase.$.local;
    test++;
    AppBase.$.local = {test: test};
  };

  render() {
    const {test} = AppBase.$.local;
    const childRoutes = renderRoutes(routes);
    return (
      <BrowserRouter ref="root" children={childRoutes}/>
    );
  }
}
