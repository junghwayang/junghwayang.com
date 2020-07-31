---
title: 'Route 53'
date: '2020-03-31'
---

> This note was taken while learning AWS on <a href='https://www.udemy.com/course/aws-certified-solutions-architect-associate/' target='__blank'>Udemy</a>.

### Route 53
: scalable cloud DNS web service - register new domains, transfer existing domains

## DNS (Domain Name System)

- convert human friendly domain names into IP address
- IP addresses are used by computers to identify each other on the network
  - come in 2 different forms - IPv4 and IPv6
- `.com.au`
  - `au` : top-level domain
  - `com` : second level domain name
- ELBs never have pre-defined IPv4 addresses
  - always resolve to them using DNS name
- Alias Record : virtual host record type which is used to point one domain name to another one
  - in exam, always choose **Alias Record** over CNAME
- **IPv4 vs IPv6**
  - IPv4
      - 32bit - 4B different address - is running out
  - IPv6
      - 128bit

## Routing Policies

> When you create a record, you choose a routing policy, which determines how Route 53 responds to queries

### 1. Simple routing

- only have one record with multiple IP addresses
- if you specify multiple values in a record, Route 53 returns all values to the user in a random order.
- send 1st traffic to 1st record, 2nd traffic to 2nd record
- cannot use health check

### 2. Weighted routing

- split traffic based on different weights assigned
- e.g. set 10% of traffic to go to US-East-1 and 90% to go to EU-West-1

### 3. Latency routing

- when you want to create an active/passive set up
- primary(active) site to be in EU-West-2 and secondary(passive) DR site in CA-Central-1
- when you detect a failure in primary site, send traffic to secondary instead

### 4. Geolocation routing

- choose where traffic will be sent based on the geographic location of users (location from which DNS queries originate)
- send European users to EU-West-1, US users to US-East-1
- e.g. all queries from Europe
  - routed to a fleet of EC2 instances that are specifically configured for European customers
  - such as local language and currency in Euros

### 5. Multivalue Answer routing

- configure Route 53 to return multiple values
- like IP addresses for web servers, in response to DNS queries
- let you check health of each resource,
  - Route 53 returns only values for healthy resources
- if 1st one is unhealthy, send to 2nd
- similar to simple routing, but this one can use **health check**

### < Health Checks >

- can set health checks on individual record sets
- if a record set fails a health check, it'll be removed from Route53 until it passes health check.
- can set SNS notifications to alert you if failed