# Contribution Process For Designers

If you are designing a new component for Clarity or enhancing an existing
component, please follow this step-by-step process to streamline the design,
documentation, and review phases of this process. We will work together
with you on during each of these phases to guide you through our process.

UX and Visual Design can be documented directly in a Github issue. Please create
a [Contribution Proposal](https://github.com/vmware/clarity/issues/new?template=contribution-proposal.md).
If there is not an existing issue related to the proposal. There are three
phases a design goes through as it's refined and made ready for development.

## UX Research

UX research includes looking at the problems this component will solve.
Identifying pre-existing solutions and the feature sets that should be included
as part of a Clarity component. Usually, answering the following questions will
get you started.

### Getting Started

Try answering the following questions to get started on researching and
documenting the findings for consideration:

- What problems does this component solve?
- How will users interact with it?
- What is the primary or base use case for this component?
- Are there features that would enable less common but more enhanced use cases?

When you write up the proposal, start by describing what the component does as
well as anything known that's used today to solve the issue. List the use cases
that can to be paired with distinct visual designs.

As the design evolves, we separate use cases into two lists. The first list
should be the use cases necessary for delivering an `MVP` version of the
component when it gets developed. For a variety of reasons, some use cases may
not be necessary for MVP. These secondary use cases should be moved to a list of
\*Future Use Cases\*\*. For practical reasons, the visual design should not need
to be addressed for these use cases at this time. It is preferable to identify
and focus on only the use cases needed to implement the MVP of a new component.
Future use cases should be handled with a separate Design proposal that builds
on top of the initial work.

### Considerations

Again finding the answers to questions is usually the best way to get started.

- What are the existing solutions used in other applications/component
  libraries/mediums (native mobile/video/television, etc.)?
- How has this problem already been solved:
  - In the past with older, less digital technologies?
  - Today, with modern digital tools?
- Are there variations or features that may not be a good fit for Clarity?

We are looking for a representational cross-section here and not a doctoral
thesis. :) Answers to questions like these (please feel free to add your own)
will form the foundation of the documentation that will be recorded on Github.
Please use the Github issue and markdown to organize and document this research
(links, names of products, design systems, and screenshots and use cases) as
part of the UX research. If you are unfamiliar with [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links),
please reach out so we can help guide the organization of your research.

## Visual Design

Once all of the use cases that need to be developed have been identified, they
need to be paired up with visual designs focused on the details for each use
case. These visual designs can be created using [Sketch](https://www.sketchapp.com/).

### Getting Started

An excellent place to get started is with the Clarity Design Resources:

1.  [Clarity Light Theme](https://github.com/vmware/clarity-assets/blob/master/sketch/light/clarity-library-light-2.2.0.sketch?raw=true)
2.  [Clarity Dark Theme](https://github.com/vmware/clarity-assets/blob/master/sketch/dark/clarity-library-dark-2.2.0.sketch?raw=true)
3.  [Clarity Icons](https://github.com/vmware/clarity-assets/blob/master/sketch/icons/clarity-library-icons-2.2.0.sketch?raw=true)

Download those files and familiarize yourself with how the existing components are organized. Reach out to us if you
have questions about the natural place for a new component. Much of the visual aspects for the new component have
already been built into the Figma files (typography, colors, padding, font-size, etc.). What you have to do is find an
appropriate place to create the visual representation of the proposed component. This asset will be used to generate
mockup images that will be useful when:

- Documenting use cases and their respective features
- Creating dynamic mockups (with a tool like InDesign) as needed to demonstrate aspects of a use case

Finally, the Figma file will become the design representation of the component and stay part of the Clarity Design
Resources once the component is implemented in the code.

Remember, if (for example) a component has five use cases and ten features, you still only need one instance designed
in Figma (there is a handy way to toggle visibility for various parts of a Figma document). This is how we suggest
that multiple visual representations be created for documenting the various use cases on Github.

### Considerations

These resources serve two purposes. First, they establish the visual language that a Clarity component should have
(color, vertical rhythm, typography, etc.). And second, they provide a natural place for the component design to be
integrated into. This second purpose is important. It is from these files that the implementation details of the
component will be documented as well as made available to other designers building Clarity applications once the
component is released for production use.

For more dynamic features, Figma files can be used in a tool like Figma to create _functional mockups_.

Images from the Figma files and/or links to the Figma mockups can then be paired with the details for each use
case and documented on the GitHub issue, so the information is public and available to the community.

When creating the visual design for each use case keep the following in mind and make sure the proposal can
accommodate a generalized solution that factors the following in (as appropriate):

- internationalization
- long/short values
- error/zero/empty states
- accessibility
- responsive
- touch
- edge cases
- motion

## Design Review

Design review is a process of refining the use cases, the visual look and feel, and discussing the dynamic behaviors
for each of the use cases. Through this discussion, the desired features can be documented in the issue and preserved
for the future. Most of the time, this conversation can happen on the GitHub issue itself, but for more advanced components,
we can set up a private slack channel and or video conferences for regular, live design review sessions.

Share solution progress with the Clarity team to make sure it aligns. We will engage on GitHub and set up more collaborative review sessions as needed for the length of the process. Usual feedback that can be expected will
include things like:

- When more information is needed on the design or use case
- When the design needs more refinement feedback to specific elements of the design
- When there are missing **considerations** that need to be accounted for

Clarity has very high standards and even more stringent accessibility requirements. During this phase **please,
please, please** do not take the feedback personally. It can and should be directed at the design, the feature, or the
use case. During review sessions or via GitHub comments, the feedback in no way is intended as a judgment of the
designer or the important work they are contributing to Clarity. We recognize how difficult it is to contribute
meaningful work to a project with high standards and embrace the benefits that the Design Review brings to the final
design.
