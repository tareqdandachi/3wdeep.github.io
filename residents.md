---
layout: page
title: Residents
permalink: /residents
permalink_name: residents

residents:
  - aadrewj
  - aolsen0
  - changk
  - hsavoldy
  - jnh
  - luzg
  - mqliu
  - tareq
---

Residents of the **Deep**:

<ul>
{%- for resident in page.residents -%}
<li><a href="{{ site.baseurl }}/residents/{{ resident }}">{{ resident }}</a></li>
{%- endfor -%}
</ul>
