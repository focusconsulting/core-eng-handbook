---
sidebar_position: 3
---

# Principles

Principles are one layer removed from values. They're not as abstract as "we value respect" but they are still a loftier guidance for "how we see our work" rather than practices, which are closer to "how we do work" or "what we do day-to-day." Each of these principles connects back directly to one or more values that it supports.

## Do what works / do the right thing

We **do what works** by doing the smallest, simplest thing to get a test passing, or to complete a feature, or to put a useful slice of an unfinished product in the hands of users. We know that we don't need to plan for every possible future case upfront -we can do what works with the information we have. We don't have to design the whole database ecosystem and microservice architecture on day one -we do what works for the problem at hand and approach each new requirement as it comes.

Simultaneously, we **do the right thing** by knowing what is right, and what is necessary, even if it's not the "simplest" case. It may be simpler to store user passwords as an unencrypted string, and it would even get the job done for now, but it is not the right thing. We know when we should spend time coding something well, doing it right the first time to make future cases easier to work with. We know that it is right to document and test our code, even if it gets in the way of doing-what-works and continuously, quickly delivering new features. The "right thing" might be subjective, but it should always be centered on what is best for the user.

## Shared context / shared responsibility

We don't want a lottery count of 1: one person whose departure would sink the project. When there is more than one engineer on a team, we want to create an engineering environment where everyone has context on any given story or part of the code. We hire full-stack engineers so that anyone can (and should) touch any part of the codebase. As a principle, we don't believe in siloing, nor in creating "ownership domains" that define my code and your code. Instead it's all our code.

Shared context comes with shared responsibility for the codebase. We follow the campground rule to leave code cleaner than you found it -no matter who wrote it. We also take shared responsibility for the health of the team, and to put time towards activities that better the team at large. This means making time to mentor other team members, or help someone who's stuck. There is no such thing as "not my problem".

Sometimes, we have teams of just 1 engineer. In this case, we still look for ways to share responsibility and context across the team, especially within an initiative. We have the freedom to experiment with ways we can increase **context awareness** even when the responsibility lies on one engineer.

## Context awareness

We aim to have a team where all engineers are at least familiar with the work, challenges, and successes of the rest of the engineering team. Outside of a given initiative where you work closely and frequently, we should at least know what's happening, even if not directly having ownership.

## Developer trust & autonomy

We respect each other's expertise and have courage to trust one another to make good decisions and take feedback. (That being said, as we mention in the shared responsibility above, nothing is your own problem, and you should be encouraged to reach out to others.)

Trust shows up first in how we make decisions, not in whether we review code. We trust engineers to own technical choices, to size their own work, and to pick up any part of the codebase. Review before merge is our default (see the [Code Review](./code-review.md) page), and that is no contradiction: we review because shared responsibility means more than one person should stand behind what ships, not because we distrust the author.

Many of us come from backgrounds at private companies, where large organizations default toward a lack of trust in developers: heavyweight approval chains, protected everything, sign-off for trivia. We push back on that mindset, which can be implicit in your attitude without your realizing it. A single review before merge is a light, shared-responsibility default; anything heavier (multiple required approvers, sign-off gates, locking people out of parts of the codebase) is a real restriction. Consider why the default trust falls short here before you add it.

Regarding **developer autonomy**: this is an empowerment and a responsibility.

- You are empowered to be the decision-maker when it comes to technical choices. For example, you should decide when tech debt has accumulated such that you should spend time pausing feature development to do refactoring.
- You are responsible for the outcomes of this decision-making -ideally, you would work with a PM to communicate the implications of the tech debt. Neither you nor the PM is an autocrat. We respect autonomy between disciplines in harmony with our values of collaboration, communication, and feedback.

## Rapid feedback in all contexts

We want **code feedback** ("does it solve the problem well?") -this comes in the form of testing. A unit test is immediate, tangible feedback that a piece of code does what I think it does. You also get code feedback from peer review answering the question "is my code high-quality?" As well, it is worth noting that we want the right granularity of feedback -we should have confidence that our code will work in production. We can get this with tests which fail if we change our code logic to break the intended functionality, even if we can get it by other means as well, including type systems and deployments to lower environments.

We want **product feedback** ("does it solve the problem well?") -this comes in the form of user testing, analytics, product testing, rapid deployments to production to continuously get feedback on new features. (Note: sometimes other principles like _do the right thing_ are higher-priority than rapid production deployments. That is the judgment of the team to decide what's most important. But without production deployments, we are not getting that critical rapid feedback.)

We want **interpersonal feedback** ("are we doing this well?") -this comes in the form of retrospectives and other touchpoints to consider team health and adjustments to be made. This kind of feedback takes **courage**, which is why a team that is safe to be vulnerable in matters so much.

Regarding interpersonal feedback, it may be your responsibility to request feedback from your teammates and stakeholders as applicable and aligned with your career goals. Some initiatives or individuals have avenues for feedback, such as 1:1s and speedback. Additionally, you should feel empowered to ask for feedback, set up 1:1s, and organize feedback structures within your team.

In all cases, we want **rapid** feedback, which is why:

- We write tests as we go, so we immediately know if the software works -we don't wait until days have passed implementing a huge feature to start testing it.
- We deploy to production as often as possible -ideally one or more times a week -we don't wait weeks or months between building a feature and discovering if it really solves our users' problems or not.
- We seek timely feedback from our teammates -if something I'm doing is hurting our team, I want to know now, when I am best suited to make a change. Or if not "now" -as rapidly as possible / makes sense. Late is better than never!

## Iteration & incremental change

We do the simplest, smallest thing that works, watch it work, and then make it better.

This applies to _product iteration_. We follow the agile method to deploy the simplest piece of software that provides value to our users. We watch it work (in production), we get feedback, and then we iterate and improve.

This applies to _coding iteration_. We do the simplest thing to get a test passing, or we do the simplest thing to get a feature out to users (which means we follow the "do the right thing" principle). We watch the code work / watch the test pass / watch the build compile, and then we iterate to make it better - refactoring or improving the existing design. Start with the simplest thing, and expand slowly into complexity as needed. Break down problems into small, manageable steps that can be iterated on.

This depends on the _rapid feedback_ principle. In order to iterate and make it better, you need feedback to adjust and decide the path for the next iteration.

## Continuous improvement & embracing failure

On a **team level**, we practice continuous improvement by always looking for ways to improve our practices and processes. We hold retrospective meetings to identify what's going well and what could go better.

On an **individual level**, we keep improving at our craft: seeking new knowledge, welcoming feedback, staying open to other perspectives.

On a **code level**, we continuously improve by embracing refactoring. Refactoring is the process that allows us to continuously write high-quality code under changing conditions. See the refactoring practice for more.

At all levels, we embrace the principle of _fail quickly; learn from it_. Failure is blameless. Mistakes are expected, and we'd rather make them fast. As long as we fail quickly (thanks to the _rapid feedback_ discussed earlier), we can always learn, iterate, and continuously improve. We embrace change in the form of feedback, in others' opinions, and in others' ideas. We are agile.

## Strong opinions, loosely held

We have strong opinions, and we believe in our expertise and our ability to make a strong recommendation and to defend it. Simultaneously, our opinions are loosely-held -we are capable of changing our mind when someone else's strong opinion is persuasive and well-reasoned. We are experts, and we are always listening to others' expertise.

As a note: part of this principle is also embracing that it's okay to say "I don't know" when you don't know.

## Open/public by default, closed/private when necessary

We want to be open source & a model for other governments / organizations / etc.

## Sustainable pace

We believe in work-life balance for our team members. This means that you are not expected to work nights and weekends, etc. We avoid "fixed-time, fixed-scope" pain by redefining deliverables, dates, and requirements in collaboration with our partners.

## Version control & automation over process

We believe in the value of version control. It provides us the ability to iterate incrementally by building off of what worked in the past. While this obviously includes checking in and pushing code to our Git repository, we also believe in prioritizing version control for configuration and infrastructure when appropriate.

We strive to recognize when the complexity of what we are doing should be recorded in code, rather than kept in the mind of one person.

> "If you find yourself writing down a series of commands in a google doc...maybe there's a better way!"

We suggest implementing this principle by scripting commonly used processes, valuing infrastructure-as-code, and beyond.

We refer to the principles of this wiki:

- Document all processes with 3+ steps
- Automate anything you've repeated 3+ times
- Transfer any Google Doc you've referenced 3+ times

This applies not just to docs on this wiki, but to recommend automating any process with manual or repeatable steps.

_Last updated: Jun 25, 2026_
