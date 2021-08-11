import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

import { CdsNavigation, CdsNavigationItem } from '@cds/react/navigation';
import { CdsAlert, CdsAlertGroup } from '@cds/react/alert';
import { CdsDivider } from '@cds/react/divider';

import Basic from './components/grid/basic';
import RowMultiSelect from './components/grid/row-multi-select';
import RowSingleSelect from './components/grid/row-single-select';
import RowSingleAction from './components/grid/row-single-action';
import RowMultiAction from './components/grid/row-multi-action';
import Pagination from './components/grid/pagination';
import Filtering from './components/grid/filtering';
import Sorting from './components/grid/sorting';
import PinColumns from './components/grid/pin-columns';
import Detail from './components/grid/detail';
import HideShowColumns from './components/grid/hide-show-columns';
import AsyncData from './components/grid/async-data';
import FullDemo from './components/grid/full';
import AsyncDataFull from './components/grid/async-data-full';

function App() {
  return (
    <main>
      <CdsAlertGroup type="banner" status="warning">
        <CdsAlert>
          This component or utility is offered as a preview. This means we are currently working on it and seeking
          feedback. Please be aware that this component or utility may have breaking changes before we finish working on
          it.
        </CdsAlert>
      </CdsAlertGroup>
      <header className="demo-header" cds-layout="horizontal gap:md align:vertical-center p:md" cds-text="body">
        <img src={logo} alt="logo" />
        <span>Core React Demos</span>
      </header>

      <Router>
        <div className="router-container">
          <CdsNavigation expanded>
            <CdsNavigationItem>
              <Link to="/">Basic</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/filtering">Filtering</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/sorting">Sorting</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/row-single-select">Row Single Select</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/row-multi-select">Row Multi Select</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/row-single-action">Row Single Action</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/row-multi-action">Row Multi Action</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/pagination">Pagination</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/pin-columns">Pin Columns</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/detail">Detail</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/hide-show-columns">Hide/Show Columns</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/async-data">Async Data</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/full-demo">Full Demo</Link>
            </CdsNavigationItem>
            <CdsNavigationItem>
              <Link to="/async-data-full-demo">Async Data - Full Demo</Link>
            </CdsNavigationItem>
          </CdsNavigation>
          <CdsDivider orientation="vertical"></CdsDivider>
          <div cds-layout="align:stretch p-x:md" cds-text="body">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/filtering">
                <Filtering />
              </Route>
              <Route path="/sorting">
                <Sorting />
              </Route>
              <Route path="/row-single-select">
                <RowSingleSelect />
              </Route>
              <Route path="/row-multi-select">
                <RowMultiSelect />
              </Route>
              <Route path="/row-single-action">
                <RowSingleAction />
              </Route>
              <Route path="/row-multi-action">
                <RowMultiAction />
              </Route>
              <Route path="/pagination">
                <Pagination />
              </Route>
              <Route path="/pin-columns">
                <PinColumns />
              </Route>
              <Route path="/detail">
                <Detail />
              </Route>
              <Route path="/hide-show-columns">
                <HideShowColumns />
              </Route>
              <Route path="/async-data">
                <AsyncData />
              </Route>
              <Route path="/full-demo">
                <FullDemo />
              </Route>
              <Route path="/async-data-full-demo">
                <AsyncDataFull />
              </Route>
              <Route path="/">
                <Basic />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
