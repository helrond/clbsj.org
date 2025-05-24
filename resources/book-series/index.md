---
layout: level-two
title: CLBSJ Book Series
description: null
keywords: book series
---

The Center and Library for the Bible and Social Justice produces a book series in collaboration with Wipf and Stock’s Cascade Books. Currently edited by Matthew J.M. Coomber, the series features broadly accessible renderings of cutting edge biblical scholarship geared toward the academy, congregations, seminaries, and activist communities so as to fulfill CLBSJ’s mission to connect biblically informed activists and justice-oriented scholars.

{%- assign sorted_books = site.books | sort: 'sort_order' | reverse -%}
{% for book in sorted_books %}
    {% include book-list-item.html book=book %}
{% endfor %}