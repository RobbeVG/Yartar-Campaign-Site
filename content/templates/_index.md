---
title: <% tp.file.folder().charAt(0).toUpperCase() + tp.file.folder().slice(1) %>
---
<%* tp.file.rename("index") -%>
# Index of <% tp.file.folder().charAt(0).toUpperCase() + tp.file.folder().slice(1) %>

<!-- QueryToSerialize: 
LIST WITHOUT ID link(file.link, title)
FROM "<% tp.file.folder(true)%>"
WHERE !draft AND !unlisted AND file != this.file
SORT title ASC
-->




<style> .page-listing { display: none; } </style>