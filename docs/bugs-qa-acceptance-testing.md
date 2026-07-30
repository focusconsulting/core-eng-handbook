---
sidebar_position: 12
---

# Bugs, QA, and Acceptance Testing

A bug is observed behavior that differs from agreed behavior. A request for new behavior is a story, even when someone first reports it as a bug.

## Report a bug

Anyone who finds a bug should record it in the team's tracker. Do not wait for a complete diagnosis. Create one ticket for each observable behavior and include:

- A concise title that names the effect.
- The expected and actual behavior.
- Steps to reproduce, including the environment and build when known.
- Evidence such as screenshots, logs, or affected records, with sensitive information removed.
- The user impact and known scope.
- Links to the source story, pull request, deployment, or incident when relevant.

For an outage, security issue, data loss, or data corruption, use the team's incident or escalation path immediately. The bug ticket records the work; it does not replace the alert.

## Can the person who finds a bug fix it?

Yes. An engineer who finds a bug may investigate and fix it when the expected behavior is clear and the work fits the team's current priorities. This does not bypass the reporting, review, or verification steps below.

Check with product or design when the expected behavior is unclear, the proposed fix changes acceptance criteria or user experience, or the work is large enough to affect planned priorities.

These permissions do not replace the incident path or the stronger review and verification required for higher-risk changes.

## Triage and manage it

Product and engineering triage bugs together. Confirm the behavior, identify duplicates, separate impact from urgency, and choose an owner and next step. Severity describes how much the bug hurts; priority describes when the team will address it.

A triaged bug should have one clear outcome:

- Address it immediately through the incident path.
- Fix it as the team's next available work.
- Prioritize it with the backlog.
- Close it as a duplicate, expected behavior, or not reproducible, with the reason and evidence recorded.

Keep the owner, status, and blockers current in the tracker. Link the fix to the bug and follow the team's agreed [code-review path](./code-review.md); Ask is the default. When practical, include a regression test that fails before the fix and passes afterward.

## Verify and close it

Quality assurance (QA) checks that the change meets its acceptance criteria and does not break related behavior. Acceptance testing (AT) confirms that the result solves the intended product or user need. One person may perform both, but record each result when the distinction matters.

For QA and AT, record:

- The environment and build tested.
- The tester and date.
- A pass, fail, or blocked result for each relevant acceptance criterion.
- Evidence and links to any bugs found.
- The final result and any remaining release decision.

Close a bug after someone verifies the expected behavior in the target environment. If verification fails, reopen the bug rather than creating a duplicate.

## Automate tracking, not judgment

Automation should keep QA and AT work visible without deciding whether the work passed. When an item enters QA or AT, automation can:

- Create or update the linked QA or AT record.
- Capture the build, environment, and deployment link.
- Assign the next owner from the team's working agreement.
- Remind the team when an item exceeds its response target.
- Carry evidence into a linked bug when a test fails.
- Report aging items and recurring failures for the team to discuss in retro.

A person records the verdict and evidence. Automation must not mark QA or AT complete on its own.

_Last updated: Jul 30, 2026_
