---
title: 'Serverless'
date: '2020-04-07'
---

> This note was taken while learning AWS on <a href='https://www.udemy.com/course/aws-certified-solutions-architect-associate/' target='__blank'>Udemy</a>.

## Lambda

- a compute service where you can upload your code and create a Lambda function
- takes care of provisioning and managing the servers that you use to run the code
- What ways to use Lambda?
  - as an event-driven compute service
      - run your code in response to events
      - events could be changes to data in S3 bucket or DynamoDB table
  - as a compute service
      - to run your code in response to HTTP requests using API Gateway or API calls made using AWS SDKs
- lambda scales out (not up) automatically
  - if you have 5 invocations to scale, it's gonna scale out to 5 different lambda functions being executed at the same time
- independent - 1 event = 1 function
- Lambda is **serverless**
- Lambda functions can trigger other lambda functions
  - 1 event can = x functions
- X-ray allow you to debug what is happening with Lambda
- can do things globally