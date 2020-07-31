---
title: 'Database'
date: '2020-03-30'
--- 

> This note was taken while learning AWS on <a href='https://www.udemy.com/course/aws-certified-solutions-architect-associate/' target='__blank'>Udemy</a>.

## RDS (Relational Database Service)

1. SQL
1. MySQL
1. PostgreSQL
1. Oracle
1. Aurora
1. MariaDB

> Amazon's NoSQL = DynamoDB

- RDS runs on virtual machines
- cannot log in to these OS
- patching of RDS OS & DB is Amazon's responsibility
- RDS : **NOT** serverless
  - only Aurora Serverless is serverless

### OLTP vs OLAP

- OLTP (Online <span>Transaction</span> Processing)
  - pull up a **single row of data**
  - like name, date, address, status
  - RDS is suitable for OLTP
- OLAP (Online <span>Analytics</span> Processing)
  - pull in large numbers of records
  - run queries against your database
  - like net profit for product, sum of products sold in Pacific
  - Redshift is suitable for OLAP

## Data Warehousing

- used for business intelligence
- used to pull in very large and complex datasets
- usually used by management to do queries on data
- use different type of architecture both from a database perspective & infrastructure layer
  - Amazon's data warehouse solution = **Redshift**

## ElastiCache

- easily deploy/operate/scale **in-memory cache** in cloud.
- to **speed up** performance of existing databases (frequent identical queries)
- a way of caching your most common web queries
  - so when your web servers get a request,
  - they'll go to ElastiCache first, and get information
  - it takes hugh load off of your database
- improve performance of web applications by allowing you to retrieve information from fast, managed, in-memory caches.
- when your databases **overloaded**, what to do to perform better
  - choose ElastiCache or Read replicas
- support two in-memory caching engines
  - **Memcached**
      - for something very simple
      - when you need to scale horizontally
  - **Redis**
      - for more advanced data types
      - Multi-AZ
      - can do backups and restores

## Backups for RDS

### Automated Backups

- recover database to any point in time within a retention period
  - retention period = 1~35days
- take a full daily snapshot & store transaction logs throughout day
- enabled by default
- backup data is stored in S3
  - free storage space same size of database
  - if you have 10GB RDS, you'll get 10GB free storage in S3
- during backup, storage I/O may be suspended

### Database snapshots

- done manually
- stored even after you delete original RDS instance
- **Restoring Backups** : restored version of database has
  - new RDS instance
  - with new DNS endpoint

## Multi-AZ vs Read Replicas

### Multi-AZ

- for <span>disaster recovery</span> only
- have exact copy of your production database in another AZ
- if one AZ fails - update DNS settings and RDS endpoint automatically

### Read replicas

- for <span>performance</span>
- must have **automatic backup** turned on
- up to 5 read replica copies of any database
- can have read replicas of read replicas.
- each read replica have its own DNS endpoint
- can be Multi-AZ
- can be in different regions

## DynamoDB

- a fast & flexible NoSQL database service
- stored on SSD storage
- spread across 3 geographically distinct data centres

- <span>Eventual</span> Consistent Reads (default)
  - consistency across all copies of data is usually reached within a second.
  - repeating a read after a short time should return the updated data.
- <span>Strongly</span> Consistent Reads
  - returns a result that reflects all writes that received a successful response prior to the read
  - read data within or **less than a second**

## Redshift

- fast <span>data warehousing</span> service in the cloud
- used for business intelligence
- only available in 1 AZ
- **columnar** data storage
  - advanced compression : easily compressed much more than row-based system
  - because similar data is stored sequentially
- **MPP (Massively Parallel Processing)**
  - Redshift automatically distributes data and query load across all nodes
  - makes it easy to add nodes to your data warehouse
  - enables you to maintain fast query performance as your data warehouse grows.
- Backups
  - retention period : 1day(default) ~ 35days
  - always attempts to maintain at least 3 copies of data
      - original & replica : on the compute nodes
      - backup : in S3
  - can replicate snapshots to S3 in another region for disaster recovery
- charged by
  - **compute node hours**
      - not be charged for leader node hours
  - backup
  - data transfer - only within a VPC, not outside it

### configuration

- Single node : 160GB
- Multi node
  - <span>Leader</span> node : manage client connections & receive queries
  - <span>Compute</span> node : store data & perform queries, computations (up to 128 compute nodes behind a leader node)

## Aurora

- a MySQL and PostgreSQL-compatible relational database built for the cloud
- start with 10GB, scale in 10GB increments to 64TB (storage autoscaling)
- compute resources can scale up to 32vCPUs & 244GB memory.
- 2 copies of data in each AZ, with minimum of 3 AZ. = total 6 copies
  - loss in a couple of AZ - no affect on performance
- 3 types of replicas available
  - **Aurora** replicas
      - can have up to 15 replicas
      - automated failover is only available with Aurora replicas
  - **MySQL** replicas - can have up to 5 replicas
  - **PostgreSQL** replicas
- backups
  - automated backups are always enabled
  - can take snapshots - can share with other AWS accounts
  - backups don't impact on database performance

### Aurora Serverless

- an on-demand, autoscaling configuration for MySQL, PostgreSQL-compatible editions of Aurora.
- DB cluster automatically starts up, shuts down, and scales capacity up or down based on your application's needs. 
- use if you want simple, **cost-effective** option for infrequent, intermittent, or **unpredictable** workloads.
  - when you don't know when people will access your website.
- pay on a per invocation basis
  - pay only when someone's actually accessing your website (not by hours)