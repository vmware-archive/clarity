# Contribution process for developers

If you plan on contributing code to Clarity, please follow this step-by-step
process to reduce the risk of significant changes being requested when you
submit your pull request. We'll work with you on every step and try to be as
responsive as possible.

## I. Proposal template

Before you start coding anything, please fill out the following proposal
template in as much detail as you can. The more complete your details, the
better, but not all questions will apply for every change. As you fill this out,
please make sure to follow our coding guidelines for components.

- [Angular Guidelines](/docs/CODING_GUIDELINES_ANGULAR.md)
- [Core Web Component Guidelines](/docs/CODING_GUIDELINES_CORE.md)

```markdown
## Summary

Describe the change or feature in detail. Try to answer the following questions.

- What is the change?
- What is a use case for this change?
- Why should it go in Clarity?
- Is this a change to an Angular Component or a Web Component?
- Does this change impact existing behaviors? If so, how?
- If this change introduces a new behavior, is this behavior accessible?

## Examples

_If possible, show examples of the change. You may create one yourself, or link to external sites that have the idea. It can also be beneficial to prototype the idea in isolation outside of Clarity with a Plunkr or Stackblitz example._

## API

_Describe the intended API for the feature you want to add. This would include:_

- CSS classes and DOM structure for pure static UI contribution
- If Angular: any inputs/outputs, components, directives, services, or anything that is exported publicly for Angular contributions.
- If Web Component: any properties, events, slots, or attributes.
- Examples of code snippets using this new feature.
- Note very clearly if anything **might** be a breaking change.

_In the case of bug fixes or internal changes, there will most likely be no API changes._

## Implementation Plan

_Describe how you plan to implement the feature, answering questions among the following or anything else you deem relevant._

- What parts of the code are affected?
- Will you introduce new services, components, or directives?
- Can you describe the basic flow of information between classes?
- Does this introduce asynchronous behaviors?
- Will you need to refactor existing Clarity code?
- Will reasonable performance require optimizations?
- Will it need to access native elements (and be incompatible with server-side rendering)?

## Conclusion

_Describe how long you expect it to take to implement, what help you might need, and any other details that might be helpful. Don't worry, this is non-contractual. 😛_
```

Once it's ready, post it either on the original GitHub issue for bug fixes or in
a new issue otherwise. If you are planning on implementing an already designed
component, please mention the issue containing the existing specification in
your proposal. If the original issue hasn't been updated in a while, please ping
@coryrylan, @gnomeontherun, or @mathisscott. We will start the discussion as
soon as possible.

We will discuss the proposal with you publicly on the issue, potentially
requesting changes, and hopefully, accept it.

## II. Implementation on a topic branch

### Prerequisites

First, make sure you:

- Read our [Developer Certificate of Origin](https://cla.vmware.com/dco). All
  contributions to this repository must be signed as described on that page.
  Your signature certifies that you wrote the patch or have the right to pass it
  on as an open-source patch.
- Read our [Angular coding guidelines](/CODING_GUIDELINES_ANGULAR.md) and [Web Component coding guidelines](/CODING_GUIDELINES_CORE.md).

### Getting started

When we post on the issue to approve your proposal, the person on the team
who'll be your primary contact will post a link to a topic branch against which
you will submit your pull requests. The topic branch will be branched from the
latest `master` and named `topic/{feature-name}`. To merge any pull request into
this branch, it will need 2 approvals from team members.

Start by [forking](https://help.github.com/articles/fork-a-repo/) the main
Clarity repository, and follow the instructions in the previous link to clone
your fork and set the upstream remote to the main Clarity repository. Because of
the DCO, set your name and e-mail in the Git configuration for signing. Finally,
create a local topic branch from the upstream `topic/{feature-name}` mentioned
above.

For instance, this setup part could look like this:

```shell
## Clone your forked repository
git clone git@github.com:<github username>/clarity.git

## Navigate to the directory
cd clarity

## Set name and e-mail configuration
git config user.name "John Doe"
git config user.email johndoe@example.com

## Setup the upstream remote
git remote add upstream https://github.com/vmware/clarity.git

## Check out the upstream a topic branch for your changes
git fetch
git checkout -b topic/feature-name upstream/topic/feature-name
```

### Starting the project

Once you have the project checked out with a fork you will need to run some step
steps.

1.  Have [NodeJS](https://nodejs.org) installed
2.  In the root project directory run, `npm install`
3.  Run `npm run build:ci` to build entire project (this may take several minutes)
4.  Startup the project
    - If Angular change run `npm run start`
    - If Web Component change run `npm run core:start`
    - If Website Documentation change run `npm run website:start`
5.  To run tests and other project-specific commands see our project [Build Guide](/docs/BUILD.md)

### Public API Changes

If you are making a change that changes the public API of a Component make sure
to discuss this within a proposal issue with a Clarity team member. A proposal
allows us to plan out potential breaking changes if necessary and review the API
changes. If a public API change is approved you will have to update our Golden
files which track our public API surface.

To update the Golden files follow these steps:

1.  Make public API change
2.  Run `angular:build` or `build:ci`
3.  Run `angular:golden:test` this should fail
4.  Run `angular:golden:fix`
5.  Run `angular:golden:test` this should now pass

If you are making a public change to the Web Components swap the `angular`
command for `core`. Example `angular:build` => `core:build`.

### Commits

If your contribution is large, split it into smaller commits that are logically
self-contained. You can then submit them as separate pull requests that we will
review one by one and merge progressively into the topic branch.

As a rule of thumb, try to keep each pull request under a couple of hundred lines of code,
_unit tests included_. We realize this isn't always easy, and sometimes not
possible at all, so feel free to ask how to split your contribution in the
GitHub issue.

In general, it's a good idea to start coding the services first
and test them in isolation, then move to the components.

For your commit message, please use the following format:

```
<type>(optional scope): <description>
 < BLANK LINE >

[optional body]
[optional Github closing reference]

 < BLANK LINE >
Signed-off-by: Your Name <your.email@example.com>
```

`type` - could be one of `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`.

Set scope of the commit if possible:

```
  a11y      accordion    alert      badge         build         button        card         checkbox
  datagrid  date-picker  dropdown   form          grid          header        icons        i18n
  input     label        list       login         modal         password      progress-bar radio
  select    sidenav      signpost   spinner       stack-view    stepper       table        tabs
  textarea  timeline     toggle     tooltip       tree-view     vertical-nav  wizard
```

For example, a commit message could look like this:

```
fix(date-picker): adds aria-labels for buttons

- adds proper labels for all datepicker buttons
- adds live region for calendar view that updates month/year values for screen readers
- adds live region to year view that updates the decade range for screen readers
- updates templates for ClrCommonStringsService

Close: #4242

Signed-off-by: Your Name <your.email@example.com>
```

These documents provide guidance creating a well-crafted commit message:

- [Angular commit message format](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit-message-format)
- [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)
- [Closing Issues Via Commit Messages](https://help.github.com/articles/closing-issues-via-commit-messages/)
- [Conventional Commits ](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
- [Github: Closing issues using keywords](https://help.github.com/en/articles/closing-issues-using-keywords)

### Submitting pull requests

As you implement your contribution, make sure all work stays on your local topic
branch. When an isolated part of the feature is complete with unit tests, make
sure to submit your pull request **against the topic branch** on the main
Clarity repository instead of `master`. This will allow us to accept and merge
partial changes that shouldn't make it into a production release of Clarity yet.
We expect every pull request to come with exhaustive unit tests for the
submitted code.

**Do not, at any point, rebase your local topic branch on newer versions of `master` while your work is still in progress!**
This will create issues both for you, the reviewers, and maybe even other
developers who might submit additional commits to your topic branch if you
requested some help.

To make sure your pull request will pass our automated testing, before submitting
you should:

- Make sure `npm test` passes for each of them.
  For individual lint failures, you will have to fix them manually.

To test the same thing that the CI will test you could run `npm run build:ci`

If everything passes, you can push your changes to your fork of Clarity, and [submit a pull request](https://help.github.com/articles/about-pull-requests/).

- Assign yourself to the Pull-Request
- Assign proper labels for example if you are making documentation update only use `documentation`, `website`
- Assign connected Issue that this PR will resolve

### Taking reviews into account

During the review process of your pull request(s), some changes might be
requested by Clarity team members. If that happens, add extra commits to your
pull request to address these changes. Make sure these new commits are also
signed and follow our commit message format.

Please keep an eye on your Pull-Request and try to address the comments, if any,
as soon as possible.

### Shipping it

Once your contribution is fully implemented, reviewed, and ready, we will rebase
the topic branch on the newest `master` and squash down to fewer commits if
needed (keeping you as the author, obviously).

```bash
$ git rebase -i master

# Rebase commits and resolve conflict, if any.

$ git push origin branch -f
```

Chances are, we will be more familiar with potential conflicts that might happen,
but we can work with you if you want to solve some conflicts yourself. Once
rebased, we will merge the topic branch into `master`, which involves a quick
internal pull request you don't have to worry about, and we will finally delete
the topic branch.

At that point, your contribution will be available in the next official release
of Clarity.

### Backport to an older version

In some cases, you will have to backport the changes into the older version.
Everything is the same here, only the target branch will be the older version
that is affected. If you are an external contributor, we will handle the
backport for you.
