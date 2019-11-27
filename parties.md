---
layout: page
title: deep parties
permalink: /parties
permalink_name: /parties

detail_image: assets/parties.png
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}/{{ post.url }}">{{ post.post-title }}</a>
    </li>
  {% endfor %}
</ul>
