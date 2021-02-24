---
title: 'CI/CD'
date: '2020-07-20'
---

- CI/CD is a method to **frequently** deliver apps to customers by introducing **automation** into the stages of app development.
- A solution to the problems integrating new code can cause (a.k.a *integration hell*).
- Introduces ongoing automation and continuous monitoring throughout the lifecycle of apps, from integration and testing phases to delivery and deployment.
- These connected practices are often referred to as a <span>CI/CD pipeline</span>
- Supported by development and operations teams working together in an agile way.

## CI = Continuous Integration

- A coding philosophy and set of practices to <span>build automated tests and commit small changes frequently</span>
- Each commit triggers an automated pipeline on a CI server, which can notify developers of any issues about integration.
- Merge changes back to the main branch as often as possible.
- Establish a consistent and automated way to build, package, and test applications.
- Automate tests to check that the application is not broken whenever new commits are integrated into the main branch.

## CD = Continuous Delivery / Continuous Deployment

### Continuous Delivery

- Automatically release to repository.
  - = A developer’s changes to an application are automatically bug tested and uploaded to a repository, where they can then be deployed to a live production environment by the operations team.
- Automated testing + automated release process = deploy app at anytime by clicking on a button.

### Continuous Deployment

- Automatically deploy to production.
- One step further than continuous delivery
- Every change that passes all stages of production pipeline is released to customers.
- If test fails, new changes will not deployed.
- Can see changed code go live minutes after they're committed.
- Deploy with small batches continuously, so there isn't a **Release Day** anymore.

> CI is part of CD. Continuous Deployment is like Continuous Delivery, except that releases happen automatically.

![](https://wac-cdn.atlassian.com/dam/jcr:b2a6d1a7-1a60-4c77-aa30-f3eb675d6ad6/ci%20cd%20asset%20updates%20.007.png?cdnVersion=1134)
