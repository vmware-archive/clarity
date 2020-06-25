import React from 'react';
import { CdsAlert, CdsAlertActions, CdsAlertGroup } from './src/alert';
import { CdsButton, CdsButtonType } from './src/button';
import { CdsBadge } from './src/badge';
import { CdsIcon } from './src/icon';
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from './src/modal';
import { CdsTag } from './src/tag';
import { ClarityIcons, userIcon, timesIcon } from '@clr/core/icon';

ClarityIcons.addIcons(userIcon, timesIcon);

interface AppState {
  modalOpen: boolean;
}

export default class App extends React.Component<{}, AppState> {
  buttonRef: any;

  constructor(props: any) {
    super(props);
    this.state = { modalOpen: false };
    this.buttonRef = React.createRef<CdsButtonType>();
  }

  componentDidMount() {
    this.buttonRef.current.nativeElement.then((element: any) => {
      element.focus();
    });
  }

  handleOnCloseChange(e: any) {
    console.log(e);
  }

  render() {
    const isModalOpen = this.state.modalOpen;
    return (
      <div>
        <h1>Rendered by React!</h1>
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
      </div>
    );
  }
}
