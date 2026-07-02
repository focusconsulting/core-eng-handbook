---
sidebar_position: 7
---

# Working On and Completing a Story

Writing a good story is half the work. The other half is how the team moves it from ready to done without it stalling, sprawling, or siloing. The principles at play are shared responsibility, rapid feedback, and finishing over starting.

## Pull, don't get assigned

Take the highest-priority ready story you can help move. We hire full-stack engineers and we don't own domains, so the right story is usually the most valuable one, not the one in your comfort zone (see shared context & shared responsibility). Working in unfamiliar parts of the codebase is how the team stays un-siloed, and it is exactly what estimating in complexity rather than time is meant to encourage.

## Prefer finishing to starting

A story in progress is feedback not yet collected. Two stories at 90% deliver nothing; one story at 100% ships and starts teaching you. Limit how much you have in flight, and when you must choose, finish before you start. This is the same logic as small vertical slices, applied to the board instead of the code.

## Keep it visible

Move the card as the work moves. Keep status honest. The board is how the rest of the team keeps shared context without interrupting you, so a stale board is a broken feedback channel, the same failure mode as a noisy log. Flag blockers loudly and early; a blocker you sit on is a blocker the team can't help clear.

Inside the story, work in small, green, independently deployable commits on short-lived branches (see trunk-based development). Each commit is a checkpoint the rest of the team can build on and a smaller surface to debug when something breaks.

## Bucket brigades: working a story together

A bucket brigade is a way for a team to flow one story through its stages together, like passing buckets down a line. Rather than each engineer carrying a separate story end to end, work moves hand to hand: one person starts the API test-first, hands the slice to whoever is free to build the UI on it, and another hardens edge cases and error handling, while attention converges on whatever stage is the current bottleneck. Tests travel with every stage (we test as we go); they are not a stage of their own at the end of the line.

It is the antidote to a lottery count of 1. Because several people touch each story, context spreads automatically and no single story depends on a single person. It also gets stories to done faster, since the team's effort pools on finishing rather than scattering across many half-built tracks.

When a story stalls or a deadline tightens, swarm it. More hands on one valuable thing beats more things half-done.

## Completing

A story is complete when it meets the Definition of Done, which means it is deployed and the feedback loop has opened, not merely merged. Don't let a finished story sit undeployed; a feature parked on the shelf has quietly become a mini-waterfall, and the value you built is going stale waiting to be discovered.

Then close the loop. Watch it work in production, and feed what you learn into the next story. That is where the iteration starts again.

_Last updated: Jun 16, 2026_
