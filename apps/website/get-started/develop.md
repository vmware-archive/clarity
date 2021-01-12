---
toc: true
---

# Developing with Clarity

Clarity is a flexible and powerful design system that developers can get started using in minutes. Clarity has two implementations, Clarity Core and Clarity Angular. This guide covers which to use and why they both exist.

Clarity originally only offered the Clarity Angular library, which only works with the Angular framework. As the project has evolved, we've been building out a new library using web components called Clarity Core that works with any frontend framework and is built with the knowledge gained over the years for a stronger library.

## Clarity Core

Clarity Core is our [long term vision](https://medium.com/claritydesignsystem/claritys-future-user-focused-framework-independent-accessible-enterprise-ready-and-open-61a3f62eac93) for enabling Clarity to work with virtually any frontend framework. We've rebuilt everything from scratch using modern technologies and a stronger architecture. We [wrote about our approach and plans](https://medium.com/claritydesignsystem/clarity-core-72f6d3a029bc) which covers many of the technical choices and rationale for our choices. Clarity Core is also being built to modern accessibility requirements. We recommend that you start with Clarity Core in new projects, and you can also adopt it in [existing projects using Clarity Angular](https://medium.com/claritydesignsystem/level-up-your-application-by-adopting-clarity-core-8a5f3f863139).

We have guides for getting started using [Angular](../../core-components/get-started/#angular), [React](../../core-components/get-started/#react), [Vue](../../core-components/get-started/#vue), [AngularJS](../../core-components/get-started/#angularjs-1-8-0), and [Preact](../../core-components/get-started/#preact). These guides will get Clarity installed and show how to add your first component. Then, you'll want to review the individual components for details about how to use them, following the same steps.

<p><router-link to="../../core-components/get-started">
  <cds-button>Get Started with Clarity Core</cds-button>
</router-link></p>

## Clarity Angular

Clarity Angular is our original offering for building with Clarity specifically for Angular. It contains a number of complex components, such as the Datagrid and Wizard, that are not yet in Clarity Core. If you are using Angular, you can still use the Clarity Angular library for your projects to get these rich components.

Clarity Angular is essentially in a feature freeze while we build Clarity Core. We don't plan to release additional enhancements to Clarity Angular beyond updates to support the latest version of Angular. We will continue to support it until Clarity Core has reached parity.

We recommend that you find ways to adopt Clarity Core components as you work with Clarity Angular. When there is a Core version of a component, you'll want to use it when possible. We're building out adoption tools to help applications adopt Core components using ESLint, and will continue to provide support to help applications in additional ways.

<p><router-link to="../../angular-components/get-started">
  <cds-button>Get Started with Clarity Angular</cds-button>
</router-link></p>

## Library Comparison

It is helpful to see what is available in both libraries as we build out Clarity Core. This table provides a comparison of what is available, planned, and not planned to implement.

There are a few Clarity Core components that will not be carried over from Clarity Angular. These are either deprecated in favor of other components, or no longer considered for future inclusion.

<ComponentsComparison />
