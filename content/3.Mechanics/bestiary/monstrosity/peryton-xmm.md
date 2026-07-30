---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
title: "Peryton"
aliases:
- "Peryton"
---
# Peryton
*Source: Monster Manual (2024) p. 238*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Peryton.webp#right)

## Peryton

*Winged Heart Hunter*

- **Habitat.** Hill, Mountain  
- **Treasure.** [Armaments](3.Mechanics/tables/random-magic-items-armaments.md)  

Perytons are monstrous predators that hunt people—particularly humans and elves—in favor of all other prey. With the bodies of mighty avian scavengers and fanged, stag-like heads, perytons use ambush tactics to dive-bomb travelers. Strangely, the shadows they cast resemble humanoid silhouettes. This supernatural oddity lends credence to stories that perytons are cursed humans or elves, or that they arise from carrion birds that feed on the corpses of villains.

Perytons tear out the hearts of those they slay, carrying the organs back to grisly lairs. This gives rise to numerous superstitions surrounding perytons. Roll on or choose a result from the Peryton Superstitions table to inspire why a peryton steals hearts.

**Peryton Superstitions**

`dice: [](peryton-xmm.md#^peryton-superstitions)`

| dice: 1d4 | If a Peryton Collects Enough Hearts... |
|-----------|----------------------------------------|
| 1 | The hearts grant an evil wish. |
| 2 | It reverts to its original form. |
| 3 | A new peryton hatches from each heart. |
| 4 | A portal opens to the Lower Planes. |
^peryton-superstitions
```ad-statblock
title: Peryton
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Peryton.webp#token)
*Medium Monstrosity, Chaotic Evil*

- **Armor Class** 13 
- **Hit Points** 33 (6d8 + 6) 
- **Speed** 20 ft., fly 60 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 16 | +3 | +3 |
|Int| 9 | -1 | -1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 12 | +1 | +1 |
|Wis| 12 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 13 | +1 | +1 |
|Cha| 10 | +0 | +0 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +5, [Stealth](3.Mechanics/rules/skills.md#Stealth) +3
- **Senses** Passive Perception 15
- **Languages** Understands Common and Elvish but can't speak
- **Challenge** 2

## Traits

***Flyby.*** The peryton doesn't provoke an [Opportunity Attack](3.Mechanics/rules/actions.md#Opportunity%20Attack) when it flies out of an enemy's reach.

## Actions

***Multiattack.*** The peryton makes one Gore attack and one Talons attack.

***Gore.*** *Melee Attack Roll:* `dice:1d20+5|noform|noparens|text(+5)`, reach 5 ft. *Hit:* `dice:1d8+3|noform|noparens|avg|text(7)` (`1d8 + 3`) Piercing damage. If the peryton moved 30+ feet straight toward the target immediately before the hit, the target takes an extra `dice:2d8|noform|noparens|avg|text(9)` (`2d8`) Piercing damage.

***Talons.*** *Melee Attack Roll:* `dice:1d20+5|noform|noparens|text(+5)`, reach 5 ft. *Hit:* `dice:2d4+3|noform|noparens|avg|text(8)` (`2d4 + 3`) Piercing damage. If the attack reduces a Humanoid target to 0 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md), the peryton kills the target by removing its heart.
```
^statblock

## Environment

hill, mountain