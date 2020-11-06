import React from 'react';
import { CdsAccordion, CdsAccordionPanel, CdsAccordionHeader, CdsAccordionContent } from './src/accordion';
import { CdsAlert, CdsAlertActions, CdsAlertGroup } from './src/alert';
import { CdsButton } from './src/button';
import { CdsBadge } from './src/badge';
import { CdsCheckbox } from './src/checkbox';
import { CdsControl, CdsControlMessage, CdsFormGroup } from './src/forms';
import { CdsDatalist } from './src/datalist';
import { CdsDate } from './src/date';
import { CdsFile } from './src/file';
import { CdsIcon } from './src/icon';
import { CdsInput } from './src/input';
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from './src/modal';
import { CdsPassword } from './src/password';
import { CdsProgressCircle } from './src/progress-circle';
import { CdsRadio, CdsRadioGroup } from './src/radio';
import { CdsRange } from './src/range';
import { CdsSearch } from './src/search';
import { CdsSelect } from './src/select';
import { CdsTag } from './src/tag';
import { CdsTime } from './src/time';
import { CdsTextarea } from './src/textarea';
import { CdsToggle, CdsToggleGroup } from './src/toggle';
import { ClarityIcons, userIcon, timesIcon } from '@cds/core/icon';
import { CdsDivider } from './src/divider';

ClarityIcons.addIcons(userIcon, timesIcon);

interface AppState {
  modalOpen: boolean;
  modal2Open: boolean;
}

export default class App extends React.Component<{}, AppState> {
  buttonRef: React.RefObject<CdsButton>;

  constructor(props: any) {
    super(props);
    this.state = { modalOpen: false, modal2Open: false };
    this.buttonRef = React.createRef<CdsButton>();
  }

  componentDidMount() {
    this.buttonRef.current.nativeElement.then(element => {
      element.focus();
    });
  }

  handleOnCloseChange(e: any) {
    console.log(e);
  }

  render() {
    const isModalOpen = this.state.modalOpen;
    const isModal2Open = this.state.modal2Open;
    return (
      <div>
        <h1>Rendered by React!</h1>
        <CdsAccordion>
          <CdsAccordionPanel expanded>
            <CdsAccordionHeader>Item 1</CdsAccordionHeader>
            <CdsAccordionContent>Content 1</CdsAccordionContent>
          </CdsAccordionPanel>
          <CdsAccordionPanel>
            <CdsAccordionHeader>Item 2</CdsAccordionHeader>
            <CdsAccordionContent>
              <CdsAccordion>
                <CdsAccordionPanel>
                  <CdsAccordionHeader>Item 2-1</CdsAccordionHeader>
                  <CdsAccordionContent>Content 2-1</CdsAccordionContent>
                </CdsAccordionPanel>
              </CdsAccordion>
            </CdsAccordionContent>
          </CdsAccordionPanel>
          <CdsAccordionPanel disabled>
            <CdsAccordionHeader>Item 3</CdsAccordionHeader>
            <CdsAccordionContent>Content 3</CdsAccordionContent>
          </CdsAccordionPanel>
        </CdsAccordion>
        <CdsButton ref={this.buttonRef} onClick={() => this.setState({ modalOpen: true })}>
          Open Modal
        </CdsButton>
        {isModalOpen ? (
          <CdsModal onCloseChange={() => this.setState({ modalOpen: false })}>
            <CdsModalHeader>
              <h3 cds-text="title">My Modal</h3>
            </CdsModalHeader>
            <CdsModalContent>
              <div cds-layout="vertical gap:md p-y:xs">
                <p cds-text="body">Lorem Ipsum</p>
                <CdsButton ref={this.buttonRef} onClick={() => this.setState({ modal2Open: true })}>
                  Open Modal 2
                </CdsButton>
              </div>
            </CdsModalContent>
            <CdsModalActions>
              <div cds-layout="horizontal gap:sm align:right">
                <CdsButton onClick={() => this.setState({ modalOpen: false })} action="outline">
                  Cancel
                </CdsButton>
                <CdsButton onClick={() => this.setState({ modalOpen: false })}>Ok</CdsButton>
              </div>
            </CdsModalActions>
            <CdsModal hidden={!isModal2Open} onCloseChange={() => this.setState({ modal2Open: false })}>
              <CdsModalHeader>
                <h3 cds-text="title">My Modal</h3>
              </CdsModalHeader>
              <CdsModalContent>
                <div cds-layout="vertical gap:md p-y:xs">
                  <p cds-text="body">Focus trap inception!</p>
                </div>
              </CdsModalContent>
              <CdsModalActions>
                <div cds-layout="horizontal gap:sm align:right">
                  <CdsButton onClick={() => this.setState({ modal2Open: false })}>Ok</CdsButton>
                </div>
              </CdsModalActions>
            </CdsModal>
          </CdsModal>
        ) : (
          <br />
        )}
        <h2>Light Alerts</h2>
        <CdsAlert status="info" onCloseChange={e => this.handleOnCloseChange(e)}>
          Foobar
        </CdsAlert>
        <CdsAlert status="success">Foo</CdsAlert>
        <CdsAlert status="warning">Bar</CdsAlert>
        <CdsAlert status="danger">Baz</CdsAlert>

        <h2>Alert Group</h2>
        <CdsAlertGroup status="info">
          <CdsAlert closable>This example is a closable alert inside an alert group with a status of "info".</CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup status="success">
          <CdsAlert closable>
            This example is a closable alert inside an alert group with a status of "success".
          </CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup status="warning">
          <CdsAlert closable>
            This example is a closable alert inside an alert group with a status of "warning".
          </CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup status="danger">
          <CdsAlert closable>
            This example is a closable alert inside an alert group with a status of "danger".
          </CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>

        <h2>Banner Alerts</h2>
        <CdsAlertGroup type="banner">
          <CdsAlert status="info">
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup type="banner">
          <CdsAlert status="warning">
            Bar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup type="banner">
          <CdsAlert status="danger">
            Baz
            <CdsAlertActions type="banner">
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>

        <h2>Buttons</h2>
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>

        <h2>Badge</h2>
        <CdsBadge status="info">2</CdsBadge>
        <CdsBadge status="success">3</CdsBadge>
        <CdsBadge status="warning">12</CdsBadge>
        <CdsBadge status="danger">15</CdsBadge>
        <CdsBadge color="gray">1</CdsBadge>
        <CdsBadge color="purple">1</CdsBadge>
        <CdsBadge color="blue">15</CdsBadge>
        <CdsBadge color="orange">2</CdsBadge>
        <CdsBadge color="light-blue">3</CdsBadge>

        <h2>Forms</h2>
        <div cds-layout="vertical gap:lg">
          <CdsControl layout="compact">
            <label>label</label>
            <input placeholder="some custom control" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsControl>

          <CdsControl layout="compact" status="error">
            <label>label</label>
            <input placeholder="some custom control" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsControl>

          <CdsControl layout="compact" status="success">
            <label>label</label>
            <input placeholder="some custom control" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsControl>
        </div>

        <h2>Checkbox</h2>
        <CdsFormGroup>
          <CdsCheckbox>
            <label>checked</label>
            <input type="checkbox" defaultChecked />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsCheckbox>

          <CdsCheckbox>
            <label>un-checked</label>
            <input type="checkbox" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsCheckbox>

          <CdsCheckbox status="error">
            <label>error</label>
            <input type="checkbox" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsCheckbox>

          <CdsCheckbox status="success">
            <label>success</label>
            <input type="checkbox" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsCheckbox>

          <CdsCheckbox>
            <label>indeterminate</label>
            <input type="checkbox" indeterminate="true" />
            <CdsControlMessage>indeterminate message</CdsControlMessage>
          </CdsCheckbox>

          <CdsCheckbox>
            <label>disabled</label>
            <input type="checkbox" disabled />
            <CdsControlMessage>disabled message</CdsControlMessage>
          </CdsCheckbox>

          <CdsCheckbox>
            <label>checked disabled</label>
            <input type="checkbox" disabled checked />
            <CdsControlMessage>disabled message</CdsControlMessage>
          </CdsCheckbox>
        </CdsFormGroup>

        <h2>Datalist</h2>
        <CdsDatalist>
          <label>datalist</label>
          <input placeholder="placeholder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsDatalist>

        <h2>File</h2>
        <CdsFormGroup layout="vertical">
          <CdsFile layout="vertical">
            <label>label</label>
            <input type="file" multiple />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsFile>

          <CdsFile layout="vertical">
            <label>disabled</label>
            <input type="file" disabled />
            <CdsControlMessage>disabled message</CdsControlMessage>
          </CdsFile>

          <CdsFile layout="vertical" status="error">
            <label>error</label>
            <input type="file" multiple />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsFile>

          <CdsFile layout="vertical" status="success">
            <label>success</label>
            <input type="file" multiple />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsFile>
        </CdsFormGroup>

        <h2>Input</h2>
        <CdsFormGroup layout="vertical">
          <CdsInput layout="vertical">
            <label>label</label>
            <input placeholder="name" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsInput>

          <CdsInput layout="vertical">
            <label>disabled</label>
            <input placeholder="name" disabled />
            <CdsControlMessage>disabled message</CdsControlMessage>
          </CdsInput>

          <CdsInput layout="vertical">
            <label>error</label>
            <input placeholder="name" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsInput>

          <CdsInput layout="vertical">
            <label>success</label>
            <input placeholder="name" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsInput>
        </CdsFormGroup>

        <h2>Password</h2>
        <CdsFormGroup layout="vertical">
          <CdsPassword layout="vertical">
            <label>label</label>
            <input type="password" defaultValue="123456" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsPassword>

          <CdsPassword layout="vertical">
            <label>disabled</label>
            <input type="password" value="123456" disabled />
            <CdsControlMessage>disabled message</CdsControlMessage>
          </CdsPassword>

          <CdsPassword layout="vertical" status="error">
            <label>error</label>
            <input type="password" defaultValue="123456" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsPassword>

          <CdsPassword layout="vertical" status="success">
            <label>success</label>
            <input type="password" defaultValue="123456" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsPassword>
        </CdsFormGroup>

        <h2>Radio</h2>
        <CdsRadioGroup>
          <label>radio group</label>
          <CdsRadio>
            <label>radio 1</label>
            <input type="radio" defaultChecked />
          </CdsRadio>

          <CdsRadio>
            <label>radio 2</label>
            <input type="radio" />
          </CdsRadio>

          <CdsRadio>
            <label>radio 3</label>
            <input type="radio" />
          </CdsRadio>
        </CdsRadioGroup>

        <h2>Tags</h2>
        <CdsTag readonly status="info">
          Info
        </CdsTag>
        <CdsTag readonly status="success">
          Success
        </CdsTag>
        <CdsTag readonly status="warning">
          Warning
        </CdsTag>
        <CdsTag readonly status="danger">
          Danger
        </CdsTag>
        <br />
        <br />
        <CdsTag readonly color="gray">
          Austin <CdsBadge>1</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="purple">
          New York <CdsBadge>2</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="blue">
          Palo Alto <CdsBadge>3</CdsBadge>{' '}
        </CdsTag>
        <CdsTag readonly color="orange">
          San Francisco <CdsBadge>12</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="light-blue">
          Seattle <CdsBadge>15</CdsBadge>
        </CdsTag>

        <h2>Icons</h2>
        <CdsIcon size="lg" shape="user"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
        <br />
        <br />
        <CdsIcon size="lg" shape="user" solid></CdsIcon>
        <CdsIcon size="lg" shape="user" solid badge="info"></CdsIcon>
        <CdsIcon size="lg" shape="user" solid badge="success"></CdsIcon>
        <CdsIcon size="lg" shape="user" solid badge="danger"></CdsIcon>
        <CdsIcon size="lg" shape="user" solid badge="warning-triangle"></CdsIcon>

        <h2>Toggles</h2>
        <CdsToggleGroup>
          <label>A toggle group</label>
          <CdsToggle>
            <label>Toggle 1</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsToggle>
            <label>Toggle 2</label>
            <input type="checkbox" />
          </CdsToggle>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsToggleGroup>

        <CdsToggle>
          <label>Toggle</label>
          <input type="checkbox" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsToggle>

        <h2>Date Inputs</h2>
        <CdsDate layout="horizontal" control-width="shrink">
          <label>Date input</label>
          <input type="date" defaultValue="2018-07-22" min="2018-01-01" max="2019-12-31" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsDate>

        <h2>Time Inputs</h2>
        <CdsTime control-width="shrink">
          <label>time</label>
          <input type="time" min="09:00" max="18:00" defaultValue="11:00" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsTime>

        <h2>Search Inputs</h2>
        <h3>Vertical</h3>
        <CdsFormGroup layout="vertical">
          <CdsSearch>
            <label>label</label>
            <input type="search" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSearch>

          <CdsSearch status="error">
            <label>error</label>
            <input type="search" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSearch>

          <CdsSearch status="success">
            <label>success</label>
            <input type="search" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSearch>
        </CdsFormGroup>

        <h3>Horizontal</h3>
        <CdsFormGroup layout="horizontal">
          <CdsSearch layout="horizontal">
            <label>label</label>
            <input type="search" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="horizontal" status="error">
            <label>error</label>
            <input type="search" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="horizontal" status="success">
            <label>success</label>
            <input type="search" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSearch>
        </CdsFormGroup>

        <h3>Compact</h3>
        <CdsFormGroup layout="compact">
          <CdsSearch layout="compact">
            <label>label</label>
            <input type="search" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="compact" status="error">
            <label>error</label>
            <input type="search" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSearch>

          <CdsSearch layout="compact" status="success">
            <label>success</label>
            <input type="search" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSearch>
        </CdsFormGroup>

        <h2>Range Inputs</h2>
        <CdsFormGroup layout="horizontal">
          <CdsRange layout="horizontal">
            <label>label</label>
            <input type="range" />
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsRange>

          <CdsRange layout="horizontal">
            <label>disabled</label>
            <input type="range" disabled />
            <CdsControlMessage>disabled message</CdsControlMessage>
          </CdsRange>

          <CdsRange layout="horizontal" status="error">
            <label>error</label>
            <input type="range" />
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsRange>

          <CdsRange layout="horizontal" status="success">
            <label>success</label>
            <input type="range" />
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsRange>
        </CdsFormGroup>

        <h2>Textareas</h2>
        <h3>Vertical</h3>
        <CdsFormGroup layout="vertical">
          <CdsTextarea layout="vertical">
            <label>label</label>
            <textarea></textarea>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="vertical" status="error">
            <label>error status</label>
            <textarea></textarea>
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="vertical" status="success">
            <label>success status</label>
            <textarea></textarea>
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsTextarea>
        </CdsFormGroup>

        <h3>Horizontal</h3>
        <CdsFormGroup layout="horizontal">
          <CdsTextarea layout="horizontal">
            <label>label</label>
            <textarea></textarea>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="horizontal" status="error">
            <label>error status</label>
            <textarea></textarea>
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsTextarea>

          <CdsTextarea layout="horizontal" status="success">
            <label>success status</label>
            <textarea></textarea>
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsTextarea>
        </CdsFormGroup>

        <h2>Selects</h2>
        <h3>Select Inputs</h3>
        <CdsFormGroup>
          <CdsSelect>
            <label>label</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSelect>

          <CdsSelect status="error">
            <label>error status</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage status="error">error message</CdsControlMessage>
          </CdsSelect>

          <CdsSelect status="success">
            <label>success status</label>
            <select>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage status="success">success message</CdsControlMessage>
          </CdsSelect>
        </CdsFormGroup>

        <h3>Multi-Select</h3>
        <CdsFormGroup layout="horizontal">
          <CdsSelect layout="horizontal">
            <label>label</label>
            <select multiple>
              <option>option one</option>
              <option>option two</option>
              <option>option three</option>
            </select>
            <CdsControlMessage>message text</CdsControlMessage>
          </CdsSelect>
        </CdsFormGroup>

        <h2>Divider</h2>
        <CdsDivider></CdsDivider>

        <div style={{ height: '140px', marginTop: '24px' }}>
          <CdsDivider orientation="vertical">1</CdsDivider>
        </div>

        <h2>Progress</h2>
        <h3>Circular</h3>
        <div cds-layout="horizontal gap:sm">
          <CdsProgressCircle size="xl" value={0}></CdsProgressCircle>
          <CdsProgressCircle size="xl" value={49}></CdsProgressCircle>
          <CdsProgressCircle size="xl" value={100}></CdsProgressCircle>
          <CdsProgressCircle size="xl"></CdsProgressCircle>
        </div>
      </div>
    );
  }
}
