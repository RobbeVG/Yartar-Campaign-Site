---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/plant
title: "Gulthias Blight"
aliases:
- "Gulthias Blight"
conditionImmunities:
- [deafened](3.Mechanics/rules/conditions.md#Deafened)
---
# Gulthias Blight
*Source: Monster Manual (2024) p. 45*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Gulthias%20Blight.webp#right)

Ancient plants twisted by evil, Gulthias blights feed on blood and despoil the surrounding land, often giving rise to subservient blights. These cursed plants take their name from the story of their creation; the first of their kind was a tree that grew from the stake piercing the heart of the vampire Gulthias. These blights consider all creatures either servants or fertilizer for the blights' corruption.

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.


```ad-statblock
title: Gulthias Blight
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Gulthias%20Blight.webp#token)
*Gargantuan Plant, Neutral Evil*

- **Armor Class** 20 
- **Hit Points** 264 (16d20 + 96) 
- **Speed** 50 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 25 | +7 | +7 |
|Int| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 10 | +0 | +0 |
|Wis| 18 | +4 | +4 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 22 | +6 | +6 |
|Cha| 12 | +1 | +1 |


- **Proficiency Bonus** +5
- **Saving Throws** ⏤
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +9
- **Damage Resistances** Fire, Necrotic
- **Condition Immunities** [Deafened](3.Mechanics/rules/conditions.md#Deafened)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 120 Ft., Passive Perception 19
- **Languages** Common, Druidic
- **Challenge** 16

## Traits

***Blight Seeds.*** When it finishes a [Long Rest](3.Mechanics/rules/variant-rules/long-rest-xphb.md), the blight expels `dice:1d6|noform|noparens|avg` (`1d6`) seeds into unoccupied spaces on the ground within 30 feet of itself. After 24 hours, the seeds become creatures under the blight's control. Roll `dice:1d8|noform|noparens|avg` (`1d8`) for each seed to determine the creature it becomes: on 1-4, [Twig Blight](3.Mechanics/bestiary/plant/twig-blight-xmm.md); on 5-6, [Needle Blight](3.Mechanics/bestiary/plant/needle-blight-xmm.md); on 7-8, [Vine Blight](3.Mechanics/bestiary/plant/vine-blight-xmm.md).

## Actions

***Multiattack.*** The blight makes two attacks, using Slam or Thorn Volley in any combination. It also uses Life-Draining Root.

***Slam.*** *Melee Attack Roll:* `dice:1d20+12|noform|noparens|text(+12)`, reach 10 ft. *Hit:* `dice:4d8+7|noform|noparens|avg|text(25)` (`4d8 + 7`) Bludgeoning damage.

***Thorn Volley.*** *Ranged Attack Roll:* `dice:1d20+12|noform|noparens|text(+12)`, range 60/180 ft. *Hit:* `dice:3d8+7|noform|noparens|avg|text(20)` (`3d8 + 7`) Piercing damage.

***Life-Draining Root.*** *Constitution Saving Throw:* DC 20, one Huge or smaller creature the blight can see within 30 feet. *Failure:* `dice:2d6+7|noform|noparens|avg|text(14)` (`2d6 + 7`) Necrotic damage, and the target has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 17) from one of six roots. Until the grapple ends, the target has the [Restrained](3.Mechanics/rules/conditions.md#Restrained) condition and takes `dice:4d6|noform|noparens|avg|text(14)` (`4d6`) Necrotic damage at the start of each of its turns. The target's [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum decreases by an amount equal to the Necrotic damage taken, and the blight regains [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) equal to that amount.
```
^statblock

## Environment

forest