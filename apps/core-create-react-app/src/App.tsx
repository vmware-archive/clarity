import React, { Component } from 'react';

import '@clr/core/alert';
import '@clr/core/button';
import '@clr/core/global.min.css';
import '@clr/city/css/bundles/default.min.css';

import './App.css';
import { CdsButton, CdsTag, CdsBadge, CdsAlert, CdsAlertContent } from './clarity'; // CdsIcon

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
      <main>
        <h1>Clarity in React</h1>

        {this.state.show ? (
          <CdsAlert status="warning" onClosedChange={() => this.setState({ show: false })}>
            <CdsAlertContent>Hello World</CdsAlertContent>
          </CdsAlert>
        ) : (
          ''
        )}

        <CdsButton status="success" onClick={() => this.setState({ show: true })}>
          Show Alert
        </CdsButton>

        <section>
          <h2>Buttons</h2>
          <CdsButton status="primary">primary</CdsButton>
          <CdsButton status="success">success</CdsButton>
          <CdsButton status="danger">danger</CdsButton>
          <CdsButton status="danger" disabled>
            disabled
          </CdsButton>
          <br />
          <br />
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
          <br />
          <br />
          <CdsButton action="flat">flat</CdsButton>
          <CdsButton action="flat" disabled>
            flat disabled
          </CdsButton>
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        {/*
        Icons currently broken in 3.1.1
        <section>
          <h2>Icons</h2>
          <CdsIcon size="lg" shape="user"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
          <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
          <br /><br />
          <CdsIcon size="lg" shape="user" solid></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="info"></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="success"></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="danger"></CdsIcon>
          <CdsIcon size="lg" shape="user" solid badge="warning-triangle"></CdsIcon>
        </section> */}
      </main>
    );
  }
}
