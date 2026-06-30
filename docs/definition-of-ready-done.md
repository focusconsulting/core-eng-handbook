---
sidebar_position: 9
---

# Definition of Ready / Definition of Done

A Definition of Ready (DoR) and a Definition of Done (DoD) are two short, explicit checklists a team agrees on: when is a story ready to start, and when is it actually finished? They exist to create shared understanding and to prevent the two ways work quietly goes wrong, starting on something half-understood and calling something half-finished done.

These are team agreements. Each team writes its own and revisits them in retro. What follows is a starting point, not a mandate.

## Definition of Ready

A story is ready to pull when:

- The user and the value are clear (see how to write a good story).
- Acceptance criteria are written and observable.
- We can name how we will know it worked: a metric to watch, or a specific user behavior or learning to look for once it ships.
- Known dependencies are identified and unblocked, or split into their own work.
- It is small enough to finish and deploy in a day or two.
- It is estimated, if the team estimates, with no unknowns large enough to need a spike first.

One caution. DoR is the practice most likely to rot into heavyweight up-front planning, the opposite of do what works. Keep it light. Its job is to catch a story that is genuinely not understood yet, not to demand a complete specification before anyone writes code. When in doubt, start, and let rapid feedback fill the gaps.

## Definition of Done

A story is done when:

- Every acceptance criterion is met.
- Tests are written and green (see TDD and our note on flaky tests).
- The change has been reviewed and approved before merge (ship / show / ask, Ask by default).
- It is merged to main as an independently deployable, green commit.
- It is deployed to the agreed environment.
- Accessibility is checked, including the manual pass automated tools miss (see responsibilities).
- Documentation is updated where the change calls for it.

The load-bearing item is deployment. Done means the work is in front of users where the feedback loop can begin, not "it works on my branch." A feature finished but not deployed is providing no value and is, by our definition, not done (see CI/CD and estimation). Hold that line, because the moment "done" drifts back to "merged," we have rebuilt the mini-waterfall.

One honest exception. On some engagements production is genuinely out of our hands: a partner controls the release, access is gated, or a legal or security sign-off stands between staging and production. There, "deployed to the agreed environment" means deployed as far as we are permitted, and the remaining gate is named on the story, owned by a person, and given a date. That is a different thing from a finished feature sitting un-deployed because no one pushed it. Name the blocker; never let it become cover for "done" sliding back to "merged."

_Last updated: Jun 29, 2026_
