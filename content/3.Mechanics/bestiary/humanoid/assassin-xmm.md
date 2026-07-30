---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
title: "Assassin"
aliases:
- "Assassin"
---
# Assassin
*Source: Monster Manual (2024) p. 22. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Assassin.webp#right)

## Assassin

*Contract Killer*

- **Habitat.** Any  
- **Treasure.** [Implements](3.Mechanics/tables/random-magic-items-implements.md), Individual  

Assassins are professional killers skilled at stealthily approaching their victims and striking unseen. Most assassins kill for a reason, perhaps hiring themselves out to wealthy patrons or slaying for an unscrupulous cause. They use poisons and other deadly tools, and they might carry equipment to help them break into secure areas or avoid capture.

Many assassins adhere to a professional code or exhibit some signature quirk. Roll on or choose a result from the Assassin Modus Operandi table to inspire an assassin's distinctive habits.

**Assassin Modus Operandi**

`dice: [](assassin-xmm.md#^assassin-modus-operandi)`

| dice: 1d6 | The Assassin Is Infamous For... |
|-----------|---------------------------------|
| 1 | Arranging their victims in artful tableaux. |
| 2 | Hiding within large objects, such as suits of armor or hollow furnishings. |
| 3 | Leaving behind a signature item, such as a calling card, flower, seashell, or tooth. |
| 4 | Posing as celebrities, holy people, or servants. |
| 5 | Taking trophies from their victims. |
| 6 | Using poison with a distinctive color or smell. |
^assassin-modus-operandi
```ad-statblock
title: Assassin
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Assassin.webp#token)
*Small or Medium Humanoid, Neutral*

- **Armor Class** 16 
- **Hit Points** 97 (15d8 + 30) 
- **Speed** 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 11 | +0 | +0 |
|Int| 16 | +3 | **+6** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 18 | +4 | **+7** |
|Wis| 11 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 14 | +2 | +2 |
|Cha| 10 | +0 | +0 |


- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +7, Intelligence +6
- **Skills** [Acrobatics](3.Mechanics/rules/skills.md#Acrobatics) +7, [Perception](3.Mechanics/rules/skills.md#Perception) +6, [Stealth](3.Mechanics/rules/skills.md#Stealth) +10
- **Damage Resistances** Poison
- **Gear** [light crossbow](3.Mechanics/items/light-crossbow-xphb.md), [shortsword](3.Mechanics/items/shortsword-xphb.md), [studded leather armor](3.Mechanics/items/studded-leather-armor-xphb.md)
- **Senses** Passive Perception 16
- **Languages** Common, Thieves' cant
- **Challenge** 8

## Traits

***Evasion.*** If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the save and only half damage if it fails. It can't use this trait if it has the [Incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition.

## Actions

***Multiattack.*** The assassin makes three attacks, using Shortsword or Light Crossbow in any combination.

***Shortsword.*** *Melee Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, reach 5 ft. *Hit:* `dice:1d6+4|noform|noparens|avg|text(7)` (`1d6 + 4`) Piercing damage plus `dice:5d6|noform|noparens|avg|text(17)` (`5d6`) Poison damage, and the target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition until the start of the assassin's next turn.

***Light Crossbow.*** *Ranged Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, range 80/320 ft. *Hit:* `dice:1d8+4|noform|noparens|avg|text(8)` (`1d8 + 4`) Piercing damage plus `dice:6d6|noform|noparens|avg|text(21)` (`6d6`) Poison damage.

## Bonus Actions

***Cunning Action.*** The assassin takes the [Dash](3.Mechanics/rules/actions.md#Dash), [Disengage](3.Mechanics/rules/actions.md#Disengage), or [Hide](3.Mechanics/rules/actions.md#Hide) action.
```
^statblock

## Environment

any