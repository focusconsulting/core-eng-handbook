---
sidebar_position: 5
---

# Working Agreement

This is how our team works. Not how we are told to work, but what we have agreed, together, to expect of one another. It is the day-to-day expression of our values and principles: where those say what we believe, this says what we will actually do.

It is a living document. We own it, and we change it whenever it stops serving us (see continuous improvement). Bracketed items, like [core hours], are decisions each team makes for itself and fills in. Everything else is our shared default, adopted from this handbook and amended by us in retro.

## How we treat each other

- We assume positive intent and put kindness first (Respect).
- It is all our code. We don't own domains and we don't say "not my problem" (shared context & shared responsibility).
- Helping a stuck teammate and mentoring are real work, not interruptions to it.
- We work at a sustainable pace. Nights and weekends are not expected. When time, scope, and quality collide, we renegotiate scope, not our health.
- We can say "I don't know" without it costing us anything.

## How we communicate

- We default to async, in Slack (project channels, not DMs), and reserve meetings for what genuinely needs them.
- During core hours (9:00 AM - 5:00 PM ET), we aim to respond within the same working day. Outside them, no one is expected to be reachable.
- We raise blockers loudly and early. A blocker you sit on is one the team can't help clear.
- We keep the board honest and current. It is how we hold shared context without interrupting each other.
- We welcome feedback in every direction, and we ask for it rather than wait for it (rapid feedback).

## How we decide

- Technical decisions rest with the engineers doing the work (developer trust & autonomy). We own the outcomes, and we communicate the implications, especially tradeoffs like tech debt, to our PM and team.
- We hold strong opinions loosely. We argue, we decide, and then we commit. When we are stuck, we return to our shared values to find the way forward.
- We trust by default. Review before merge is our baseline, not a trust failure. Before adding anything heavier (extra required approvers, protected branches, locked-down areas), we say why the default trust falls short here.

## How we handle the code

- We practice trunk-based development: short-lived branches, merged back within a day or two, integrated often.
- Every commit to main is green and independently deployable. A partially finished commit does not land.
- When main goes red, fixing it is everyone's first priority, because what's broken for one is broken for all.
- We review before merge by default, via ship / show / ask with Ask as the default. A change merges once approved; Show and Ship are for low-risk classes we have agreed in advance may skip the gate.
- We test as we go, and we never trust a test we have not seen fail.
- We fix flaky tests and noisy logs rather than live with them. A dulled signal is worse than none.
- We leave code cleaner than we found it, whoever wrote it (the campground rule), and we refactor when "doing what works" has started to mean building on a mess.

## How we work stories

- We pull the highest-priority ready story we can help move, not only the ones we already know how to do.
- We honor our Definition of Ready and Definition of Done. Done means deployed and learning from users, not merged.
- We prefer finishing to starting. We limit work in progress, and we swarm a stalled or urgent story rather than scatter (see working a story).
- We deploy to production regularly, targeting at least once a week, because work that isn't released gives us no feedback.

## How we improve

- We hold a retro every two weeks, at the end of each sprint. It is blameless. We fail quickly, learn, and adjust.
- We treat feedback, on code, on product, and on each other, as the engine of the work rather than an event that happens to us.
- We revisit this agreement in retro and amend it when it no longer fits. Practices serve principles; when a practice stops doing that, we change the practice, not the principle.

## Our cadences

Each of these earns its place. We drop or reshape any that stops being worth the time, because we don't run ceremonies for their own sake.

- **Standup** — daily, Monday-Thursday, 1:30 PM ET (Friday is a maintenance day). Brief sync on progress, plans, and blockers.
- **Planning / refinement** — Sprint Planning every two weeks (Tuesday), Backlog Refinement on the off-week Monday, and a mid-sprint check partway through. We refine, split, and estimate upcoming stories.
- **Retro** — every two weeks, at the end of the sprint. Team health and process.
- **Demo / review** — Sprint Review every two weeks (Tuesday), plus a stakeholder demo monthly. We show working software and gather feedback.
- **Dev / design sync** — design sync every two weeks (Wednesday).

_Last updated: Jun 29, 2026_
