---
title: 'IAM'
date: '2020-03-24'
---

> This note was taken while learning AWS on <a href='https://www.udemy.com/course/aws-certified-solutions-architect-associate/' target='__blank'>Udemy</a>.

## Region

### Region

- separate **geographical** area. (physical location)
- consists of 2 or more Availability Zones.

### AZ (Availability Zone)

- one or more discrete data centers within an AWS region.
- to be isolated from failures.
- each with redundant power, networking and connectivity, housed in separate facilities.

### Edge location

- endpoints for AWS which are used for caching content.
- 시드니에 있는 유저가 뉴욕 서버에 있는 파일을 다운받을 경우 시드니 edge location에 캐싱해놓고, 다음에 시드니에 있는 다른 누군가가 다운받으려고 할때 뉴욕 서버에서 또 받아오는 게 아니라 시드니 edge location에서 파일을 받아옴

> 개체수 : Edge locations > AZ's > Regions

---

# IAM (Identity and Access Management)

allows you to **manage users and their level of access** to the AWS Console.

## Offers

- centralised control
- shared access
- granular(세분화된) permissions
- identity federation (incl. Active Directory, Facebook, LinkedIn, ...)
- provide temporary access for users/devices/services
- allow you to set up your own password rotation policy (주기적으로 비밀번호 변경하도록 하게함)
- integrate with many different AWS services
- support PCI DSS compliance (compliance framework)
- universal = **global** (doesn't apply to regions)
- new user has NO access

## Key terminology for IAM

1. <span>Users</span> : end users
2. <span>Groups</span> : a collection of users
3. <span>Policies</span> : made up of docs (in a JSON format). give permissions.
4. <span>Roles</span> : create roles and assign them to AWS resources.