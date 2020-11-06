import React, { Component } from 'react';

import { CdsButton } from '@cds/react/button';
import { CdsTag } from '@cds/react/tag';
import { CdsBadge } from '@cds/react/badge';
import { CdsAlert, CdsAlertGroup } from '@cds/react/alert';
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import './App.css';

ClarityIcons.addIcons(userIcon);

interface AppProps {}
interface AppState {
  show: boolean;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <main cds-layout="p:lg vertical gap:lg" cds-text="body">
        <h1 cds-text="heading">Clarity in React</h1>

        {this.state.show ? (
          <CdsAlertGroup status="warning">
            <CdsAlert onCloseChange={() => this.setState({ show: false })} closable>Hello World</CdsAlert>
          </CdsAlertGroup>
        ) : (
          ''
        )}

        <CdsButton status="success" onClick={() => this.setState({ show: true })}>
          Show Alert
        </CdsButton>

        <h2 cds-text="section">Buttons</h2>
        <section cds-layout="horizontal gap:sm">
          <CdsButton status="primary">primary</CdsButton>
          <CdsButton status="success">success</CdsButton>
          <CdsButton status="danger">danger</CdsButton>
          <CdsButton status="danger" disabled>
            disabled
          </CdsButton>
        </section>
        <section cds-layout="horizontal gap:sm">
          <CdsButton action="outline">outline</CdsButton>
          <CdsButton action="outline" status="success">
            success
          </CdsButton>
          <CdsButton action="outline" status="danger">
            danger
          </CdsButton>
          <CdsButton action="outline" disabled>
            disabled
          </CdsButton>
        </section>
        <section cds-layout="horizontal gap:sm">
          <CdsButton action="flat">flat</CdsButton>
          <CdsButton action="flat" disabled>
            flat disabled
          </CdsButton>
        </section>

        <h2 cds-text="section">Tags</h2>
        <section cds-layout="horizontal gap:sm">
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
        </section>
        <section cds-layout="horizontal gap:sm">
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
        </section>

        <h2 cds-text="section">Badge</h2>
        <section cds-layout="horizontal gap:sm">
          <CdsBadge status="info">2</CdsBadge>
          <CdsBadge status="success">3</CdsBadge>
          <CdsBadge status="warning">12</CdsBadge>
          <CdsBadge status="danger">15</CdsBadge>
          <CdsBadge color="gray">1</CdsBadge>
          <CdsBadge color="purple">1</CdsBadge>
          <CdsBadge color="blue">15</CdsBadge>
          <CdsBadge color="orange">2</CdsBadge>
          <CdsBadge color="light-blue">3</CdsBadge>
        </section>

        <h2 cds-text="section">Icons</h2>
        <section cds-layout="horizontal gap:sm">
          <CdsIcon size="lg" shape="user"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
        </section>
        <section cds-layout="horizontal gap:sm">
          <CdsIcon size="lg" shape="user" solid></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="info"></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="success"></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="danger"></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="warning-triangle"></CdsIcon>
        </section>
      </main>
    );
  }
}
