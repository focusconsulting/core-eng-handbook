---
sidebar_position: 8
---

# Estimation

## Purpose

This document describes general guidelines for estimating our work's complexity (level of effort, risk, etc.).

This is a list of items to consider when reviewing acceptance criteria.

## Goals

There are a few reasons for estimating work:

1. **Help the product team with prioritization.** Understanding the complexity, risk, and level of effort for tasks can help the product team prioritize work and manage risk.
2. **Help engineers align on scope, not approach.** Both the story point value of a task and the associated justification are helpful ways to communicate to the engineer that ends up executing the task what is in and out of scope, what assumptions sit behind the estimate, and what areas to watch out for. They do not prescribe the implementation; the story stays negotiable (see [how to write a good story](./stories.md)). Even when the estimator and the implementer are the same person, the acceptance criteria developed from the analysis and planning process can help the person remember useful context if a task gets de-prioritized and isn't worked on for a while.
   - **Technique**: We intend to take notes on the technical estimation conversation (when the discussion seems to call for it) and leave them attached to the story, to better achieve this goal.
3. **Open a dialogue between product and engineering about story complexity.** If a story receives a higher estimation than the product folks expected, it's a signal to start a conversation about whether the story could be simplified or split to better achieve value for the user.

## Non-goals

There are other valid reasons for estimating work, but these are not explicit goals for us at the moment.

1. **Time estimates.** Since we're taking an XP approach to planning, our goal is not to attempt to predict precisely how long a ticket will take to finish, nor precisely how many tickets we will complete over a given sprint. Mixing time estimates with story points sets the wrong expectations for stakeholders and also incentivizes engineers to do stories that they are already good at doing because they can do them more quickly, which will hurt longer-term velocity (by creating knowledge silos). In contrast, focusing on complexity incentivizes engineers to figure out how to reduce complexity by picking up tasks in new parts of the codebase and stack and by sharing context with each other, which builds resilience.
2. **Individual-level capacity planning.** Our goal is not to quantify how many story points each engineer can do. There should be shared accountability for getting tasks done. Everyone should stay aware of all tasks in the sprint and prioritize supporting others to get tickets done, whether it is completing code reviews or helping troubleshoot and debug issues.
3. **A reflection of the quantity of work produced.** Velocity does not equal productivity. Velocity is a coarse forecasting input for the product team: never a commitment, never an individual measure, never a precise per-sprint prediction. A consistent velocity is what keeps that coarse forecast useful, which is why regularly retroactively changing story points leads to inaccurate representations of what we have done and/or will do.

## ⭐ Features

Feature stories are estimated because they provide user value. As a rule of thumb, changes that we plan on seeking user feedback on, whether the users are external or internal, should be estimated. Typically, users see this value-add immediately as work is marked done and pushed to production regularly, where the feedback loop could begin.

If this feedback loop is blocked (i.e. a feature is completed but not deployed or deployment is significantly delayed), the feature is not providing user value. It essentially creates a mini-waterfall pattern of work. This scenario should be avoided. There is room for allowances, as we are blocked by external parties or extraneous circumstances.

Feature stories may necessitate pre-factoring, which essentially involves the refactoring of the code base to facilitate the smoother implementation of the feature story. Estimations will include consideration for pre-factoring efforts. This is distinctly different from refactoring chores covered in the following section.

### Story Points

Story points measure **complexity**, not **time**. For example, two tasks with the same level of complexity can take different amounts of time depending on who's working on it. Also, the complexity of similar tasks can vary at different points of the project. For example, adding multilingual support to a page can have higher complexity the first time we do it and lower complexity if we did the same thing to a different page later on in the project.

We use Fibonacci numbers for estimating work. Here are some guidelines for what the story points mean:

| Points | Definition | Example |
|--------|------------|---------|
| 1 point | • Trivial change with no real complexity<br/>• No risk or unknowns | • Text change, minor configuration update |
| 2 points | • Straightforward, well-understood work<br/>• Follows existing patterns<br/>• Functionality changes suggest writing or modifying at least one unit test | • Modifying a single component's behavior with clear boundaries<br/>• Typically a single acceptance criterion |
| 3 points | • Straightforward but requires some thought or research<br/>• Some small unknowns but clear solution path | • Modifying the behavior of 2-3 well-defined components<br/>• Often two to three acceptance criteria |
| 5 points | • Moderate complexity requiring significant technical design<br/>• Some research, learning, or prototyping required<br/>• Notable but manageable unknowns<br/>• Strong indicator this user story should be broken down into smaller vertical slices of user value for agile feedback | • Cross-cutting concerns across multiple components<br/>• Often many acceptance criteria, or criteria spanning multiple personas |
| 8 points | • High complexity work with significant unknowns<br/>• Substantial research needed<br/>• Not ready to pull: split it before it enters a sprint (see [Definition of Ready](./definition-of-ready-done.md)). A team may decide in planning, explicitly, that an 8 is the most agile way to deliver value; that is a recorded exception, not a default. | • Work that touches many system components or requires deep architectural changes<br/>• Many complex acceptance criteria |

Two notes on reading the table. First, points measure complexity, not time, but they meet the Definition of Ready in one place: experience says 1-3 point stories fit the "finish and deploy in a day or two" gate and 5s usually do not, which is exactly why a 5 triggers a split conversation rather than a bigger number. Second, the acceptance-criteria counts in the examples are correlations, not rules; merging or splitting criteria does not change a story's real complexity.

## 🐛 ⚙️ Bugs/Refactors/Chores/Spikes/Design QA

We typically do not point these, not because they don't count as work or because they are hard to estimate; the velocity impact is meant to be there and to be addressed in retro.

The other categories of stories are considered part of normal software product overhead - they emerge over time, and are continual overhead and an ongoing cost of doing business. Velocity is meant to coarsely forecast how much user-valued work the team can take on, which lets us focus our planning on user value, risk, and priorities. Therefore, these categories are not normally estimated.

These tickets might be a sign of (partially) incomplete acceptance criteria and thus allow us to track and complete acceptance criteria after a ticket might have already been deployed to staging or production and considered done. These tickets are also worked on and created by engineers handling DevOps and maintenance work as they attempt to support and streamline the codebase, thus increasing our velocity over time. If a ticket feels like it should have points, we should ask ourselves if it's a feature instead.

Note that much of this category may also take a lighter review path (see [code review](./code-review.md)), though bug fixes do not. Unpointed and lightly reviewed must not mean invisible: maintenance-day pickup and the retro velocity check are where this work stays seen.

### Chores Sizing

That said, when refining dev-specific chores, we size them to compare relative effort and to acknowledge we have reviewed them for pickup on a maintenance day like in Friday tasks. This is their sizing breakdown:

| Tier | Definition | Example |
|------|------------|---------|
| Extra Small | • Trivial, localized changes requiring minimal effort<br/>• No testing challenges or deployment concerns<br/>• Can be completed in background time with no planning | Renaming a variable or fixing a typo in documentation |
| Small | • Contained to a single file or component<br/>• Straightforward with clear solution path<br/>• Minimal testing requirements | Adding test coverage for an existing method or implementing a linter rule |
| Medium | • Spans multiple files but within a single functional area<br/>• Requires some planning and careful execution<br/>• Moderate testing requirements | Refactoring a class to improve readability or replacing a deprecated API with a current alternative |
| Large | • Impacts multiple components or systems<br/>• Requires careful planning and incremental approach<br/>• Comprehensive testing strategy | Migrating from one logging framework to another throughout the codebase |
| Extra Large | • Cross-cutting architectural changes<br/>• Significant risks to system stability<br/>• Would require multiple sprints if not broken down | Breaking a monolithic component into microservices or upgrading a major framework version with breaking changes |

_Last updated: Jun 16, 2026_
