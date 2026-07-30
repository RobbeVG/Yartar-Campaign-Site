---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
title: "Vine Blight"
aliases:
- "Vine Blight"
---
# Vine Blight
*Source: Monster Manual (2024) p. 44*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Vine%2C%20Needle%2C%20and%20Tree%20Blights.webp#right)

Vine blights resemble humans wrapped in vines common to the areas in which they grow, from hairy ivy vines to flowering kudzu. They can cause plants to burst from the ground around themselves and entangle nearby foes.

Unlike most other blights, vine blights can speak. They do so rarely, typically only to convey messages from their masters or to repeat the words of their victims in rasping voices.

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.


## Statblock

```ad-statblock
title: Vine Blight
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Vine%20Blight.webp#token)
*Medium plant, Neutral Evil*

- **Armor Class** 12 
- **Hit Points** 19 (`3d8 + 6`) 
- **Speed** 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)| 8 (-1)|14 (+2)| 5 (-3)|10 (+0)| 3 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Stealth](3.Mechanics/rules/skills.md#Stealth) +1
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 ft., passive Perception 10
- **Condition Immunities** [deafened](3.Mechanics/rules/conditions.md#Deafened)
- **Languages** Common
- **Challenge** 1/2

## Actions

***Constricting Vine.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 10 ft. *Hit:* `dice:1d8+2|noform|noparens|avg|text(6)` (`1d8 + 2`) Bludgeoning damage. If the target is a Large or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 12). Until the grapple ends, the target takes `dice:1d8|noform|noparens|avg|text(4)` (`1d8`) Bludgeoning damage at the start of each of its turns, and the blight can't make Constricting Vine attacks.

***Entangling Plants (Recharge 5-6).*** The blight casts the [Entangle](3.Mechanics/spells/entangle-xphb.md) spell, using Constitution as the spellcasting ability (spell save DC 12).

```
^statblock

## Environment

forest