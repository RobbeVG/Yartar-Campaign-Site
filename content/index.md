---
aliases:
  - overzicht
  - overview
  - home
title: Campaign Home
unlisted: true
---
# Gegroet

Dit is een overzicht van de huidige campagne. Zo zien jullie de [[index#Avonturiers|Avonturiers]] alsook de huidige [[index#Queestes|Queestes]] van de groep. Deze website zal blijven groeien door de loop van de campagne, **hou hem goed in het oog**. Er valt namelijk veel meer te ontdekken dan enkel deze pagina....

- Wil je meer vertrouwd geraken met de wereld rondom? Ga naar de [[2.World Almanac/index|Almanac van de wereld]]. 
- [[4.Sessions/index|Overzicht van de sessies]]? Geen enkel probleem.
- Wil je een [[03-chapter-2-creating-a-character|character maken]]?
- Soms wil je gewoon even... [[fireball-xphb|FIREBALL!!!!!]]
- Enzovoort...
<p style="text-align:center">
Nu... tijd voor avontuur <br><br>
	<img src=https://mir-s3-cdn-cf.behance.net/project_modules/source/08ed4616107631.562a57f655340.gif
	style="max-height: 200px; max-width: 400px;"
	>
</p>


# Avonturiers

Dit is een voorbeeld van hoe characters afgebeeld worden.
```base
filters:
  not:
    - file.inFolder("templates")
    - file.inFolder("0.DM Notes")
views:
  - type: cards
    name: Characters
    filters:
      and:
        - file.hasTag("PC")
    order:
      - file.name
      - Current Items
    image: note.socialImage

```
# Queestes

**DIT IS GEEN VOORBEELD**
```base
filters:
  not:
    - file.inFolder("templates")
    - file.inFolder("0.DM Notes")
views:
  - type: cards
    name: Actief
    filters:
      and:
        - file.hasTag("Quest")
        - Status == "Active"
    cardSize: 290

```
