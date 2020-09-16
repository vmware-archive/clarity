---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrWizard

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <!-- clr-wizard-page buttons for page navigation -->
  <!-- clr-wizard-page components with page content -->
</clr-wizard>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrWizard" item="bindings" />

#### Methods

<DocComponentApi component="ClrWizard" item="methods" />

### ClrWizardButton

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <!-- additional clr-wizard-button components as needed -->
</clr-wizard>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrWizardButton" item="bindings" />

### ClrWizardHeaderAction

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <clr-wizard-header-action>
    <clr-icon shape="cloud" class="is-solid"></clr-icon>
  </clr-wizard-header-action>
  <!-- clr-wizard-button components as needed -->
</clr-wizard>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrWizardHeaderAction" item="bindings" />

### ClrWizardPage

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <!--clr-wizard-header-action-->
  <!-- clr-wizard-button components as needed -->
  <clr-wizard-page>
    Page content.
  </clr-wizard-page>
  <!-- additional clr-wizard-page components with page content -->
</clr-wizard>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrWizardPage" item="bindings" />

#### Methods

<DocComponentApi component="ClrWizardPage" item="methods" />

## Angular Directives

### ClrWizardPageButtons

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <!--clr-wizard-header-action-->
  <!-- clr-wizard-button components as needed -->
  <clr-wizard-page>
    <ng-template clrPageButtons>
      <clr-wizard-button [type]="'cancel'">Override Action</clr-wizard-button>
      <clr-wizard-button [type]="'custom-previous'">Custom Action</clr-wizard-button>
      <clr-wizard-button [type]="'custom-next'">Validate Action </clr-wizard-button>
    </ng-template>
    Page content.
  </clr-wizard-page>
  <!-- additional clr-wizard-page components with page content -->
</clr-wizard>
```

</doc-code>

### ClrPageHeaderActions

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <!--clr-wizard-header-action-->
  <!-- clr-wizard-button components as needed -->
  <clr-wizard-page>
    <ng-template clrPageHeaderActions>
      <!-- clr-wizard-header-action components as needed -->
    </ng-template>
    Page content.
  </clr-wizard-page>
  <!-- additional clr-wizard-page components with page content -->
</clr-wizard>
```

</doc-code>

### ClrWizardPageNavTitle

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <!--clr-wizard-header-action-->
  <!-- clr-wizard-button components as needed -->
  <clr-wizard-page>
    <ng-template clrPageNavTitle>
      Page Nav Title
    </ng-template>
    Page content.
  </clr-wizard-page>
  <!-- additional clr-wizard-page components with page content -->
</clr-wizard>
```

</doc-code>

### ClrWizardPageTitle

#### Selector & Basic Usage

<doc-code>

```html
<clr-wizard #wizardReference>
  <!-- clr-wizard-title -->
  <!--clr-wizard-header-action-->
  <!-- clr-wizard-button components as needed -->
  <clr-wizard-page>
    <ng-template clrPageTitle>
      Page Title
    </ng-template>
    Page content.
  </clr-wizard-page>
  <!-- additional clr-wizard-page components with page content -->
</clr-wizard>
```

</doc-code>
