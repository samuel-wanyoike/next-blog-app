---
title: 'Two Forms of Pre-rendering'
date: '2023-07-05'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**.
The difference is when it generates the **HTML** for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is the _reused_ on **each request**.

- **Server-side  Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you chose what form of pre-rendering you want to use for each page. you can create a 'hybrid' Next.js app where you use static generation for some pages and server-side rendering for others.