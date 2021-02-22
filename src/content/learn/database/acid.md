---
title: 'Database ACID Properties'
date: '2020-07-16'
---

## A (Atomicity)

All changes to the data must be done completely or not at all. (all or nothing. If some part of the transaction fails, all transactions fail. No partial changes are made.)

## C (Consistency)

Data must be in a consistent state before & after the transaction. (no change if not in transaction)

## I (Isolation)

While transaction is running, other process should not change the database.

## D (Durability)

Once a transaction has been committed, changes must persist. (even in power loss, crashes, errors)
