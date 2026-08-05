---
tags:
  - PC
<%* let imageFilePath = await tp.system.suggester((item) => item.basename, tp.app.vault.getFolderByPath("assets").children)%>
socialImage: "[[<% imageFilePath %>]]"
xp: 0
Current Items:
---
<%* let characterName = await tp.system.prompt("What is the name of the character?", "character_name", true, false, true);
await tp.file.rename(characterName)
-%>

> [!infobox|content-padding-small wikipedia clear-headings]
> # <% characterName %>
> ![[<% imageFilePath %>|cover hsmall]]
> ###### Stats
> <!-- QueryToSerialize: LIST WITHOUT ID "Current XP: " + [[]].xp + " | Level: " + level
> FROM "3 Mechanics/tables/Level Files"
> WHERE xp <= [[]].xp
> SORT xp DESC
> LIMIT 1  
> -->
> <!-- SerializedQuery: LIST WITHOUT ID "Current XP: " + [[]].xp + " | Level: " + level FROM "3 Mechanics/tables/Level Files" WHERE xp <= [[]].xp SORT xp DESC LIMIT 1 -->
> - Current XP: 0 | Level: 1
>
> <!-- SerializedQuery END -->
> | Type | Stat |
> | ---- | ---- |
> | Species | [SPECIES]() |
> | Class | [CLASS]() |
> | AC | 0 |
> | PP | 0 |
> # Items
> <!-- QueryToSerialize: LIST WITHOUT ID  
> row["current-items"] 
> WHERE file = this.file 
> FLATTEN current-items 
> -->
> <!-- SerializedQuery: LIST WITHOUT ID row["current-items"] WHERE file = this.file FLATTEN current-items -->
> - \-
>
> <!-- SerializedQuery END -->
