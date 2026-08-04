---
date: <% tp.date.now("YYYY-MM-DD") %>
---
<%* 
let newFileName = "Session " + tp.user.getNewSessionNr(tp) + " - "
await tp.file.rename(newFileName) 
-%>
# Samenvatting
- Wat is er gebeurd? 
^Summary
# Vorige keer?

>[!summary] [[<% tp.user.getPrevSession(tp) %>]]

%%
![[<% tp.user.getPrevSession(tp) %>#^summary]]
%%
# Gebeurtenissen
- 
	- 