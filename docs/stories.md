---
sidebar_position: 6
---

# How to Write a Good Story

A story is the smallest unit of work that delivers value to a user. That sentence carries the whole practice. "Smallest" serves rapid feedback and iteration; "value to a user" is the irreducible unit from our vertical-slice practice. If a thing is not valuable on its own, it is not a story. It is a task, a subtask, or a piece of one.

Stories exist to give us three things: a feedback loop (ship it, learn from it), a prioritization handle (the product team ranks value), and shared understanding (the team agrees on what and why before how).

## What a good story looks like

Write from the user's point of view, and lead with the value:

> As a [kind of user], I want [some capability], so that [some outcome].

The format is a tool, not a ritual. The clause that matters is the last one. If you can't name the outcome, you don't yet have a story worth pulling. Don't cargo-cult the template onto work that has no user (those are chores).

A useful checklist is INVEST. A good story is:

- **Independent.** It can ship without waiting on a sibling story.
- **Negotiable.** It captures intent, not a frozen spec. Engineer and PM refine it together (developer trust & autonomy).
- **Valuable.** It delivers a vertical slice of user value, front to back.
- **Estimable.** The team understands it well enough to size its complexity. If not, split off a spike.
- **Small.** Small enough to finish and deploy in a day or two. Smaller stories give faster feedback.
- **Testable.** "Done" is observable. That is what acceptance criteria are for.

## Acceptance criteria

Acceptance criteria define done in terms anyone can check. They are the story's tests, written in English before the code. They feed estimation directly (their complexity, more than their count, drives the points) and they become the spine of the Definition of Done.

Keep them about behavior and outcome, not implementation. "The user sees a confirmation after saving" is a criterion. "Use a Postgres trigger" is not.

Acceptance criteria tell you that you built the thing right. They do not tell you the thing worked. Before pulling a story, also name its success signal: the metric, user behavior, or learning you will watch for once it ships (see Definition of Ready). That is what turns a deploy into the feedback our principles are built on, rather than a feature shipped and forgotten.

## Splitting a story

When a story is too big (an 8 is a strong signal; see estimation), split it. Split along lines of value, never along technical layers. "Build the backend" is not a story, because it delivers nothing a user can use until the frontend lands. That is the mini-waterfall the vertical-slice practice exists to prevent.

Patterns that split while keeping each piece valuable:

- **Happy path first**, then edge cases and error handling.
- **By workflow step**, shipping the first step end to end.
- **By data variation**, one input type now, the rest later.
- **By acceptance criterion**, when one story has quietly become several.

The test after splitting is the same as before: can each piece ship on its own and teach us something? If yes, you have stories. If no, keep cutting.

_Last updated: Jul 2, 2026_
