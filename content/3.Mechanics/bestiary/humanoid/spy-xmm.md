---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
title: "Spy"
aliases:
- "Spy"
---
# Spy
*Source: Monster Manual (2024) p. 295. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Spies.webp#right)

Spies use charm and deception to veil their true intentions. If forced into combat, they seek to end such conflicts quietly and decisively.

## Spies

*Infiltrators and Informants*

- **Habitat.** Any  
- **Treasure.** [Implements](3.Mechanics/tables/random-magic-items-implements.md), Individual  

Spies gather information and disseminate lies, manipulating people to gain the results the spies' patrons desire. They're trained to manipulate, infiltrate, and—when necessary—escape in a hurry. Many adopt disguises, aliases, or code names to maintain anonymity. Roll on or choose a result from the Spy Personas table to inspire a spy's disguise.

**Spy Personas**

`dice: [](spy-xmm.md#^spy-personas)`

| dice: 1d4 | The Spy Disguises Themself As... |
|-----------|----------------------------------|
| 1 | A bard or traveling performer. |
| 2 | A captive or servant of a monster or villain. |
| 3 | A dignitary or traveler from a distant land. |
| 4 | A visitor from a different time or world. |
^spy-personas

## Statblock

```ad-statblock
title: Spy
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Spy.webp#token)
*Small or Medium humanoid, Neutral*

- **Armor Class** 12 
- **Hit Points** 27 (`6d8`) 
- **Speed** 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|15 (+2)|10 (+0)|12 (+1)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Deception](3.Mechanics/rules/skills.md#Deception) +5, [Insight](3.Mechanics/rules/skills.md#Insight) +4, [Investigation](3.Mechanics/rules/skills.md#Investigation) +5, [Perception](3.Mechanics/rules/skills.md#Perception) +6, [Sleight of Hand](3.Mechanics/rules/skills.md#Sleight%20of%20Hand) +4, [Stealth](3.Mechanics/rules/skills.md#Stealth) +6
- **Senses** passive Perception 16
- **Gear** [hand crossbow](3.Mechanics/items/hand-crossbow-xphb.md), [shortsword](3.Mechanics/items/shortsword-xphb.md), [thieves' tools](3.Mechanics/items/thieves-tools-xphb.md)
- **Languages** Common plus one other language
- **Challenge** 1

## Actions

***Shortsword.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* `dice:1d6+2|noform|noparens|avg|text(5)` (`1d6 + 2`) Piercing damage plus `dice:2d6|noform|noparens|avg|text(7)` (`2d6`) Poison damage.

***Hand Crossbow.*** *Ranged Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, range 30/120 ft. *Hit:* `dice:1d6+2|noform|noparens|avg|text(5)` (`1d6 + 2`) Piercing damage plus `dice:2d6|noform|noparens|avg|text(7)` (`2d6`) Poison damage.

## Bonus Actions

***Cunning Action.*** The spy takes the [Dash](3.Mechanics/rules/actions.md#Dash), [Disengage](3.Mechanics/rules/actions.md#Disengage), or [Hide](3.Mechanics/rules/actions.md#Hide) action.
```
^statblock

## Environment

any