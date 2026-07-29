---
title: assets references
unlisted: true
publish: true
---
# All assets

Needed for adding them through quartz syncer. Otherwise these won't be uploaded.


```dataviewjs
	dv.paragraph("Hello World")
```

```dataviewjs
const imgFiles = app.vault.getFiles().filter(file => file.path.includes('assets')).sort((a, b) => a.name.localeCompare(b.name))

const filePaths = [] 
imgFiles.forEach(file => filePaths.push(file.path))

dv.paragraph(imgFiles.map(file => `[[${file.path}]]`)) 
```




---
>[!note]- Baby-beholder.png
>![[baby-beholder.png]]

>[!note]- Sword Coast
>![[SwordCoastMap_MedRes.jpg]]

>[!note]- D20
>![[d20.png]]

>[!note]- Vorbelion
>![[vorbelion.png]]

>[!note]- Yartar
![[assets/yartar.jpg]]
