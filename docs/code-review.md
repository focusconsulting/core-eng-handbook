---
sidebar_position: 11
---

# Code Review

Code review gives us the second kind of code feedback named in our principles. Tests answer "does it work?" Review answers "is it high-quality, and does the rest of the team understand it?" One activity serving rapid feedback, shared context, and shared responsibility at once. It is also where the campground rule gets enforced socially: we leave code cleaner than we found it, and review is where we notice when we haven't.

Review is our default path to main, not an obstacle in front of it. We review because shared responsibility means more than one person should understand and stand behind what ships, not because we distrust the author (see developer trust & autonomy). The goal is feedback and shared understanding; approval is how we record it happened.

## Ship / Show / Ask

Ask is our default. Every change is reviewed and approved before it merges, unless the team has agreed in advance that a specific, low-risk class of change may take a lighter path. Show and Ship are those lighter paths.

- **Ask.** Open a pull request and wait for review and approval before merging. This is the default for everything. It is always the path, whatever standing exceptions exist, when you are uncertain, when the change is high-risk or hard to reverse, or when it touches security or sensitive data.
- **Show.** Merge to main, then open a pull request (or post the diff) for visibility. You are not blocked on a response, but the change still gets eyes after the fact. For an agreed low-risk change worth sharing: a pattern others should see, a decision worth recording.
- **Ship.** Merge to main without review. The natural candidates are low-risk, non-feature work: chores, debug and spike commits, trivial refactors, and copy fixes. Bug fixes are not Ship candidates: a bug is proof that someone's understanding of that code already failed once, so fixes take Ask by default (or Show, by standing agreement). Feature work tends the other way, toward Ask.

This handbook grants no standing exceptions. Every Show and Ship class, including the candidates named above, is a team decision made in advance and recorded, never a per-change judgment call. A team agrees the classes of change it will trust with less scrutiny and says why (autonomy is empowerment plus responsibility; trust is justified, not assumed). As trust and shared context grow, a team widens what it lets Show and Ship. When in doubt, Ask.

**Some changes are always Ask, whatever standing exceptions your team has and whatever your confidence:** authentication and authorization, database migrations, anything touching PII or secrets, and changes that affect the accessibility of a public-facing page. The exposure here is legal or security risk (see responsibilities), which sits above individual judgment. No Show or Ship exception covers these.

## What a reviewer looks for

Automated checks (tests, linting, type-checking, and accessibility scans where available) cover the mechanical layer. Spend human attention where machines are blind:

- **Correctness the tests miss:** edge cases, absent tests. Never trust a test you've never seen fail.
- **Readability and maintainability:** would someone joining tomorrow understand this? Naming, structure, clarity.
- **Design:** is this the simplest thing that works? Does it fit the existing system or quietly fork it?
- **Security and data handling:** secrets, access control, PII (see responsibilities).
- **Accessibility:** the half or more that automated tools miss (see responsibilities).

You share responsibility for code you review. Approving means you understand it and stand behind it.

## Giving feedback

Review comments are interpersonal feedback, so the Respect value applies. Assume positive intent. Be kind and specific.

- Label severity so the author can triage. A useful convention: **nit** (optional polish), **suggestion** (worth considering), **blocking** (change before merge). Most comments are not blocking.
- Comment on the code, not the coder.
- Give the reasoning, not just the verdict. "This re-queries on every render; can we memoize?" beats "this is slow."
- Praise good work too. Review is also how we learn from each other.

## Receiving feedback

Strong opinions, loosely held, runs both ways. Defend your reasoning; change your mind when someone else's is better. It takes courage to ask for review and courage to hear it. None of it is personal. It is all in service of the code and the team.

## Keep reviews small and fast

Big reviews get rubber-stamped. A 1,000-line PR earns a "looks good"; a 50-line PR gets read. Large diffs flood the feedback channel with noise and dull the signal, the same failure mode as flaky tests. And with review gating every change by default, a slow review stalls a teammate, so its speed matters more than ever. Two habits protect both:

- Keep changes small. Vertical-slice stories and green, independently-deployable commits buy you this.
- Review promptly. An open Ask blocks a teammate; treat it above your own next task. Shared responsibility means their blocker is your blocker.

## Pairing is review

Code written by two people has already been reviewed continuously, line by line, by someone who shares the full context. A pair is a reviewer: paired work satisfies the review requirement and merges as Show, opening a post-merge pull request for visibility rather than waiting on a second approval. Pairing and review are two points on one spectrum: both spread context and catch problems early. Choose whichever delivers the right feedback at the right moment.

The one limit: pairing does not clear the always-Ask changes above. Authentication, migrations, PII, and public-facing accessibility still want a separate reviewer, because the exposure there is legal or security risk, not just code quality, and two people who built it together share the same blind spots.

_Last updated: Jun 29, 2026_
