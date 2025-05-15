---
layout: level-two
title: Study Guides
description: Study guides based on books in the collection of the Center and Library for the Bible and Social Justice.
keywords: study guides
published: true
---

Study guides based on books in the collection of the Center and Library for the Bible and Social Justice.

{%- assign sorted_guides = site.study_guides | sort: 'sort_order' -%}
{% for guide in sorted_guides %}
  {% include study-guide-item.html guide=guide %}
{% endfor %}