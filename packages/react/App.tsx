import React from 'react';
import {
  CdsAccordion,
  CdsAccordionPanel,
  CdsAccordionHeader,
  CdsAccordionContent,
} from './dist/react/accordion/index.js';
import { CdsAlert, CdsAlertActions, CdsAlertGroup } from './dist/react/alert/index.js';
import { CdsButton, CdsIconButton } from './dist/react/button/index.js';
import { CdsBadge } from './dist/react/badge/index.js';
import { CdsCheckbox } from './dist/react/checkbox/index.js';
import { CdsControl, CdsControlMessage, CdsFormGroup } from './dist/react/forms/index.js';
import { CdsDatalist } from './dist/react/datalist/index.js';
import { CdsDate } from './dist/react/date/index.js';
import { CdsFile } from './dist/react/file/index.js';
import { CdsIcon } from './dist/react/icon/index.js';
import { CdsInput } from './dist/react/input/index.js';
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from './dist/react/modal/index.js';
import { CdsPassword } from './dist/react/password/index.js';
import { CdsProgressCircle } from './dist/react/progress-circle/index.js';
import { CdsRadio, CdsRadioGroup } from './dist/react/radio/index.js';
import { CdsRange } from './dist/react/range/index.js';
import { CdsSearch } from './dist/react/search/index.js';
import { CdsSelect } from './dist/react/select/index.js';
import { CdsTag } from './dist/react/tag/index.js';
import { CdsTime } from './dist/react/time/index.js';
import { CdsTextarea } from './dist/react/textarea/index.js';
import { CdsToggle, CdsToggleGroup } from './dist/react/toggle/index.js';
import { ClarityIcons, userIcon, timesIcon } from '@cds/core/icon';
import { CdsDivider } from './dist/react/divider/index.js';
import { CdsCard } from './dist/react/card/index.js';
import { CdsBreadcrumb } from './dist/react/breadcrumb/index.js';
import {
  CdsNavigation,
  CdsNavigationGroup,
  CdsNavigationItem,
  CdsNavigationStart,
} from './dist/react/navigation/index.js';
import { CdsTree, CdsTreeItem } from './dist/react/tree-view/index.js';
import { CdsInternalVisualCheckbox } from './dist/react/internal-components/visual-checkbox/index.js';
import { CdsInternalCloseButton } from './dist/react/internal-components/close-button/index.js';
import { CdsDropdown } from './dist/react/dropdown/index.js';
import { CdsInternalPointer } from './dist/react/internal-components/popup/index.js';
import { CdsInternalPanel } from './dist/react/internal-components/panel/index.js';

ClarityIcons.addIcons(userIcon, timesIcon);

interface AppState {
  modalOpen: boolean;
  modal2Open: boolean;
  modalReady: boolean;
  modal2Ready: boolean;
  dropdownOpen: boolean;
  pointerDropdownOpen: boolean;
  responsiveDropdownOpen: boolean;
  panel1Expanded: boolean;
  panel2Expanded: boolean;
  panel3Expanded: boolean;
  panel4Expanded: boolean;
  navigationOpen: boolean;
  navigationGroupOpen: boolean;
}

export default class App extends React.Component<{}, AppState> {
  buttonRef: React.RefObject<typeof CdsButton & HTMLButtonElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      modalOpen: false,
      modal2Open: false,
      modalReady: false,
      modal2Ready: false,
      panel1Expanded: true,
      panel2Expanded: false,
      panel3Expanded: false,
      panel4Expanded: false,
      navigationOpen: true,
      navigationGroupOpen: true,
      dropdownOpen: false,
      pointerDropdownOpen: false,
      responsiveDropdownOpen: false,
    };
    this.buttonRef = React.createRef<typeof CdsButton & HTMLButtonElement>();
  }

  componentDidMount() {
    this.buttonRef.current.focus();
  }

  handleOnCloseChange(e: any) {
    console.log(e);
  }

  onExpandedChange(e: any) {
    const myTreeItem = e.target as any;
    myTreeItem.expanded = e.detail;
  }

  onSelectedChange(e: any) {
    console.log(e);
  }

  render() {
    const isModalOpen = this.state.modalOpen;
    const isModal2Open = this.state.modal2Open;
    const isModalReady = this.state.modalReady;
    const isDropdownOpen = this.state.dropdownOpen;
    const isPointerDropdownOpen = this.state.pointerDropdownOpen;
    const isResponsiveDropdownOpen = this.state.responsiveDropdownOpen;
    const panel1Expanded = this.state.panel1Expanded;
    const panel2Expanded = this.state.panel2Expanded;
    const panel3Expanded = this.state.panel3Expanded;
    const panel4Expanded = this.state.panel4Expanded;
    const navigationOpen = this.state.navigationOpen;
    const navigationGroupOpen = this.state.navigationGroupOpen;

    return (
      <article cds-layout="horizontal gap:md wrap:none">
        <CdsNavigation expanded={navigationOpen}>
          <CdsNavigationStart>Root start</CdsNavigationStart>
          <CdsNavigationItem>
            <a>Root item</a>
          </CdsNavigationItem>
          <CdsNavigationGroup expanded={navigationGroupOpen}>
            <CdsNavigationStart>
              <CdsIcon size="md" shape="user" badge="info" cds-layout="m-r:md"></CdsIcon>
              Group start
            </CdsNavigationStart>
            <CdsNavigationItem>
              <a>Group item</a>
            </CdsNavigationItem>
          </CdsNavigationGroup>
          <CdsNavigationItem slot="cds-navigation-end">
            <a>Last item</a>
          </CdsNavigationItem>
        </CdsNavigation>

        <main>
          <h1>Rendered by React!</h1>

          <h2>Accordion</h2>
          <CdsAccordion>
            <CdsAccordionPanel
              expanded={panel1Expanded}
              onExpandedChange={() => {
                const newVal = !panel1Expanded;
                this.setState({ panel1Expanded: newVal });
              }}
            >
              <CdsAccordionHeader>Item 1</CdsAccordionHeader>
              <CdsAccordionContent>Content 1</CdsAccordionContent>
            </CdsAccordionPanel>
            <CdsAccordionPanel
              expanded={panel2Expanded}
              onExpandedChange={() => {
                const newVal = !panel2Expanded;
                this.setState({ panel2Expanded: newVal });
              }}
            >
              <CdsAccordionHeader>Item 2</CdsAccordionHeader>
              <CdsAccordionContent>
                <CdsAccordion>
                  <CdsAccordionPanel
                    expanded={panel4Expanded}
                    onExpandedChange={() => {
                      const newVal = !panel4Expanded;
                      this.setState({ panel4Expanded: newVal });
                    }}
                  >
                    <CdsAccordionHeader>Item 2-1</CdsAccordionHeader>
                    <CdsAccordionContent>
                      <p cds-text="body">
                        Hundreds of thousands hydrogen atoms the sky calls to us not a sunrise but a galaxyrise culture
                        courage of our questions. Concept of the number one courage of our questions tingling of the
                        spine Flatland explorations are creatures of the cosmos. Finite but unbounded great turbulent
                        clouds a still more glorious dawn awaits corpus callosum vastness is bearable only through love
                        dispassionate extraterrestrial observer. The carbon in our apple pies extraordinary claims
                        require extraordinary evidence a very small stage in a vast cosmic arena gathered by gravity
                        extraordinary claims require extraordinary evidence permanence of the stars and billions upon
                        billions upon billions upon billions upon billions upon billions upon billions.
                      </p>
                    </CdsAccordionContent>
                  </CdsAccordionPanel>
                </CdsAccordion>
              </CdsAccordionContent>
            </CdsAccordionPanel>
            <CdsAccordionPanel
              disabled
              expanded={panel3Expanded}
              onExpandedChange={() => {
                const newVal = !panel3Expanded;
                this.setState({ panel3Expanded: newVal });
              }}
            >
              <CdsAccordionHeader>Item 3 – Should Not Open</CdsAccordionHeader>
              <CdsAccordionContent>Content 3</CdsAccordionContent>
            </CdsAccordionPanel>
          </CdsAccordion>

          <h2>Breadcrumb</h2>
          <CdsBreadcrumb aria-label="breadcrumb">
            <a href="#" cds-text="link">
              Home
            </a>
            <a href="#" cds-text="link">
              Parent page
            </a>
            <span aria-current="page">Current page</span>
          </CdsBreadcrumb>

          <h2>Modal</h2>
          <div cds-layout="horizontal gap:lg p-y:md">
            <CdsButton
              ref={this.buttonRef}
              onClick={() => {
                this.setState({ modalReady: true });
                const timer = setTimeout(() => {
                  this.setState({ modalOpen: true });
                  clearTimeout(timer);
                }, 25);
              }}
            >
              Open Modal
            </CdsButton>
          </div>
          {isModalReady ? (
            <div>
              <CdsModal
                hidden={!isModalOpen}
                onCloseChange={() => {
                  this.setState({ modalOpen: false });
                }}
                onCdsMotionChange={e => {
                  const motionMsg = (e as CustomEvent).detail;
                  if (motionMsg === 'cds-modal-enter-reverse animation done') {
                    this.setState({ modalReady: false });
                  }
                }}
              >
                <CdsModalHeader>
                  <h3 cds-text="title" cds-first-focus="">
                    My Modal
                  </h3>
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
              </CdsModal>
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
            </div>
          ) : (
            <br />
          )}

          <h2>Dropdown &amp; Signpost</h2>
          <div cds-layout="horizontal gap:lg p-y:md">
            <CdsButton
              id="dropdown-btn"
              popup="my-dropdown"
              onClick={() => {
                const timer = setTimeout(() => {
                  this.setState({ dropdownOpen: true });
                  clearTimeout(timer);
                }, 25);
              }}
            >
              Open Dropdown
            </CdsButton>
            <CdsButton
              id="resp-dropdown-btn"
              popup="my-resp-dropdown"
              onClick={() => {
                const timer = setTimeout(() => {
                  this.setState({ responsiveDropdownOpen: true });
                  clearTimeout(timer);
                }, 25);
              }}
            >
              Open Responsive Dropdown
            </CdsButton>
            <CdsButton
              id="ptr-dropdown-btn"
              popup="my-ptr-dropdown"
              onClick={() => {
                const timer = setTimeout(() => {
                  this.setState({ pointerDropdownOpen: true });
                  clearTimeout(timer);
                }, 25);
              }}
            >
              Open Signpost
            </CdsButton>
          </div>
          <div>
            <CdsDropdown
              id="my-dropdown"
              anchor="dropdown-btn"
              orientation="only:top"
              hidden={!isDropdownOpen}
              onCloseChange={() => {
                this.setState({ dropdownOpen: false });
              }}
            >
              <div cds-layout="p:lg" style={{ height: '150px', width: '150px' }}>
                <p cds-text="body">Ohai</p>
              </div>
            </CdsDropdown>
          </div>

          <div>
            <CdsDropdown
              id="my-resp-dropdown"
              anchor="resp-dropdown-btn"
              orientation="none"
              hidden={!isResponsiveDropdownOpen}
              onCloseChange={() => {
                this.setState({ responsiveDropdownOpen: false });
              }}
            >
              <div cds-layout="p:lg vertical gap:md">
                <h3 cds-first-focus="">Title</h3>
                <p cds-text="body">
                  Paroxysm of global death Sea of Tranquility culture science Apollonius of Perga the sky calls to us.
                  Bits of moving fluff a mote of dust suspended in a sunbeam concept of the number one globular star
                  cluster with pretty stories for which there's little good evidence made in the interiors of collapsing
                  stars. Citizens of distant epochs vastness is bearable only through love the ash of stellar alchemy
                  rich in heavy atoms muse about rich in mystery and billions upon billions upon billions upon billions
                  upon billions upon billions upon billions.
                </p>
                <CdsButton onClick={() => this.setState({ responsiveDropdownOpen: false })}>Close Dropdown</CdsButton>
              </div>
            </CdsDropdown>
          </div>

          <div>
            <CdsDropdown
              id="my-ptr-dropdown"
              anchor="ptr-dropdown-btn"
              orientation="right bottom"
              hidden={!isPointerDropdownOpen}
              closable
              onCloseChange={() => {
                this.setState({ pointerDropdownOpen: false });
              }}
            >
              <CdsInternalPointer type="angle"></CdsInternalPointer>
              <div cds-layout="p:lg" style={{ height: '150px', width: '150px' }}>
                <h3 cds-first-focus="">Title</h3>
                <p cds-text="body">Ohai</p>
              </div>
            </CdsDropdown>
          </div>

          <h2>Light Alerts</h2>
          <CdsAlert status="info" onCloseChange={(e: any) => this.handleOnCloseChange(e)}>
            Foobar
          </CdsAlert>
          <CdsAlert status="success">Foo</CdsAlert>
          <CdsAlert status="warning">Bar</CdsAlert>
          <CdsAlert status="danger">Baz</CdsAlert>

          <h2>Alert Group</h2>
          <div cds-layout="vertical gap:sm">
            <CdsAlertGroup status="info">
              <CdsAlert closable>
                This example is a closable alert inside an alert group with a status of "info".
              </CdsAlert>
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
          </div>

          <h2>Banner Alerts</h2>
          <div cds-layout="vertical gap:sm">
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
          </div>

          <h2>Buttons</h2>
          <div cds-layout="horizontal gap:md">
            <CdsButton status="primary">primary</CdsButton>
            <CdsButton status="success">success</CdsButton>
            <CdsButton status="danger">danger</CdsButton>
            <CdsButton status="danger" disabled>
              disabled
            </CdsButton>
          </div>

          <h2>Internal Close button</h2>
          <CdsInternalCloseButton />

          <h2>Icon Buttons</h2>
          <div cds-layout="horizontal gap:md">
            <CdsIconButton aria-label="My Icon Button">
              <CdsIcon shape="user" />
            </CdsIconButton>
          </div>

          <h2>Badge</h2>
          <div cds-layout="horizontal gap:sm">
            <CdsBadge status="info">2</CdsBadge>
            <CdsBadge status="success">3</CdsBadge>
            <CdsBadge status="warning">12</CdsBadge>
            <CdsBadge status="danger">15</CdsBadge>
            <CdsBadge color="gray">1</CdsBadge>
            <CdsBadge color="purple">1</CdsBadge>
            <CdsBadge color="blue">15</CdsBadge>
            <CdsBadge color="orange">2</CdsBadge>
            <CdsBadge color="light-blue">3</CdsBadge>
          </div>

          <h2>Card</h2>
          <div cds-layout="vertical gap:lg">
            <CdsCard> Placeholder </CdsCard>

            <CdsCard>
              <div cds-layout="vertical gap:md">
                <div cds-text="section" cds-layout="p-y:sm">
                  Card Title
                </div>

                <CdsDivider cds-card-remove-margin></CdsDivider>

                <div cds-text="body" cds-layout="p-y:md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum id alias aliquid, natus veritatis
                  aperiam repudiandae rem porro non, accusamus officia culpa maiores! Quis possimus ea hic laborum
                  dicta!
                </div>

                <CdsDivider cds-card-remove-margin></CdsDivider>

                <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
                  <CdsButton action="flat-inline">View</CdsButton>
                </div>
              </div>
            </CdsCard>
          </div>

          <h2>Internal Panel</h2>
          <CdsInternalPanel>Hello!</CdsInternalPanel>

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

          <h2>Visual Checkbox</h2>
          <CdsFormGroup>
            <CdsInternalVisualCheckbox />
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

          <CdsFormGroup>
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
          <div cds-layout="horizontal gap:md p-b:md">
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
          </div>
          <div cds-layout="horizontal gap:md">
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
          </div>

          <h2>Tree View</h2>
          <CdsTree multiSelect>
            <CdsTreeItem
              expanded
              onExpandedChange={(e: any) => this.onExpandedChange(e)}
              onSelectedChange={(e: any) => this.onSelectedChange(e)}
            >
              1
              <CdsTreeItem
                onExpandedChange={(e: any) => this.onExpandedChange(e)}
                onSelectedChange={(e: any) => this.onSelectedChange(e)}
              >
                1-1
                <CdsTreeItem
                  onExpandedChange={(e: any) => this.onExpandedChange(e)}
                  onSelectedChange={(e: any) => this.onSelectedChange(e)}
                >
                  1-1-1
                </CdsTreeItem>
                <CdsTreeItem
                  onExpandedChange={(e: any) => this.onExpandedChange(e)}
                  onSelectedChange={(e: any) => this.onSelectedChange(e)}
                >
                  1-1-2
                </CdsTreeItem>
              </CdsTreeItem>
              <CdsTreeItem
                onExpandedChange={(e: any) => this.onExpandedChange(e)}
                onSelectedChange={(e: any) => this.onSelectedChange(e)}
              >
                1-2
              </CdsTreeItem>
              <CdsTreeItem
                onExpandedChange={(e: any) => this.onExpandedChange(e)}
                onSelectedChange={(e: any) => this.onSelectedChange(e)}
              >
                1-3
              </CdsTreeItem>
            </CdsTreeItem>
            <CdsTreeItem
              onExpandedChange={(e: any) => this.onExpandedChange(e)}
              onSelectedChange={(e: any) => this.onSelectedChange(e)}
            >
              2
              <CdsTreeItem
                onExpandedChange={(e: any) => this.onExpandedChange(e)}
                onSelectedChange={(e: any) => this.onSelectedChange(e)}
              >
                2-1
              </CdsTreeItem>
              <CdsTreeItem
                onExpandedChange={(e: any) => this.onExpandedChange(e)}
                onSelectedChange={(e: any) => this.onSelectedChange(e)}
              >
                2-2
              </CdsTreeItem>
            </CdsTreeItem>
            <CdsTreeItem
              onExpandedChange={(e: any) => this.onExpandedChange(e)}
              onSelectedChange={(e: any) => this.onSelectedChange(e)}
            >
              3
            </CdsTreeItem>
          </CdsTree>

          <h2>Icons</h2>
          <div cds-layout="horizontal gap:md p-b:lg">
            <CdsIcon size="lg" shape="user"></CdsIcon>
            <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
            <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
            <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
            <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
          </div>
          <div cds-layout="horizontal gap:md p-b:lg">
            <CdsIcon size="lg" shape="user" solid></CdsIcon>
            <CdsIcon size="lg" shape="user" solid badge="info"></CdsIcon>
            <CdsIcon size="lg" shape="user" solid badge="success"></CdsIcon>
            <CdsIcon size="lg" shape="user" solid badge="danger"></CdsIcon>
            <CdsIcon size="lg" shape="user" solid badge="warning-triangle"></CdsIcon>
          </div>

          <h2>Toggles</h2>
          <CdsToggleGroup>
            <label>A toggle group</label>
            <CdsToggle>
              <label>Toggle 1</label>
              <input type="checkbox" />
            </CdsToggle>
            <CdsToggle>
              <label>Toggle</label>
              <input type="checkbox" />
              <CdsControlMessage>message text</CdsControlMessage>
            </CdsToggle>
          </CdsToggleGroup>

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
        </main>
      </article>
    );
  }
}
