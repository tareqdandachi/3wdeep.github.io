---
layout: page
title: Residents
permalink: /residents
permalink_name: residents

residents:
  - aadrewj
  - changk
  - jnh
  - luzg
  - mqliu
  - tareq
---

Residents of the **Deep**:

<ul>
{%- for resident in page.residents -%}
<li><a href="/the-deep/residents/{{ resident }}">{{ resident }}</a></li>
{%- endfor -%}
</ul>
