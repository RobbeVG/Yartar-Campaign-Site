---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
title: "Warrior Commander"
aliases:
- "Warrior Commander"
---
# Warrior Commander
*Source: Monster Manual (2024) p. 321*  
![An aasimar commander leads warriors charging into battle](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Warriors.webp#right)

Skilled in both combat and leadership, warrior commanders overcome challenges through a combination of martial skill and clever tactics.

## Warriors

*Soldiers and Scrappers*

- **Habitat.** Any  
- **Treasure.** [Armaments](3.Mechanics/tables/random-magic-items-armaments.md)  

Warriors are professionals who make a living through their prowess in battle. They might be skilled in using a variety of tactics or trained to take advantage of unusual battlefields. Warriors often work together, whether in armies or in teams with deliberate goals.

Roll on or choose a result from the Warrior Roles table to inspire the creation of different sorts of warriors.

**Warrior Roles**

`dice: [](warrior-commander-xmm.md#^warrior-roles)`

| dice: 1d10 | The Warrior Is... |
|------------|-------------------|
| 1 | A bodyguard who protects a noble. |
| 2 | A cavalry officer with an unusual steed. |
| 3 | A crusader who fights for a divine cause. |
| 4 | A duelist who claims to be unbeatable. |
| 5 | A gate guard who asks nonsensical questions. |
| 6 | A grizzled veteran who trains new recruits. |
| 7 | A hunter skilled at slaying specific monsters. |
| 8 | A retired general who is weary of battle. |
| 9 | A volunteer with a homemade weapon. |
| 10 | A young mercenary trying to prove their skill. |
^warrior-roles

> [!quote] A quote from Minsc, Hero of Baldur's Gate  
> 
> Make way, evil! I'm armed to the teeth and packing a hamster!


```ad-statblock
title: Warrior Commander
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Warrior%20Commander.webp#token)
*Small or Medium Humanoid, Neutral*

- **Armor Class** 18 
- **Hit Points** 161 (19d8 + 76) 
- **Speed** 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 21 | +5 | **+9** |
|Int| 14 | +2 | +2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 20 | +5 | **+9** |
|Wis| 16 | +3 | **+7** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 18 | +4 | **+8** |
|Cha| 14 | +2 | +2 |


- **Proficiency Bonus** +4
- **Saving Throws** Strength +9, Dexterity +9, Constitution +8, Wisdom +7
- **Skills** [Athletics](3.Mechanics/rules/skills.md#Athletics) +9, [Insight](3.Mechanics/rules/skills.md#Insight) +7, [Perception](3.Mechanics/rules/skills.md#Perception) +7
- **Gear** [greatsword](3.Mechanics/items/greatsword-xphb.md), [longbow](3.Mechanics/items/longbow-xphb.md), [plate armor](3.Mechanics/items/plate-armor-xphb.md)
- **Senses** Passive Perception 17
- **Languages** Common plus one other language
- **Challenge** 10

## Actions

***Multiattack.*** The warrior makes three attacks, using Greatsword or Longbow in any combination.

***Greatsword.*** *Melee Attack Roll:* `dice:1d20+9|noform|noparens|text(+9)`, reach 5 ft. *Hit:* `dice:4d6+5|noform|noparens|avg|text(19)` (`4d6 + 5`) Slashing damage. The warrior also creates one of the following effects:

- **Sap.** The target has [Disadvantage](3.Mechanics/rules/variant-rules/disadvantage-xphb.md) on its next attack roll before the start of the warrior's next turn.  
- **Maneuver.** One ally who can see or hear the warrior can take a [Reaction](3.Mechanics/rules/variant-rules/reaction-xphb.md) to move up to half the ally's [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md) without provoking [Opportunity Attacks](3.Mechanics/rules/actions.md#Opportunity%20Attack).  

***Longbow.*** *Ranged Attack Roll:* `dice:1d20+9|noform|noparens|text(+9)`, range 150/600 ft. *Hit:* `dice:3d8+5|noform|noparens|avg|text(18)` (`3d8 + 5`) Piercing damage, and the target's [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md) decreases by 10 feet until the end of the target's next turn.

## Bonus Actions

***Tactical Charge.*** The warrior moves up to half its [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md) straight toward an enemy it can see without provoking [Opportunity Attacks](3.Mechanics/rules/actions.md#Opportunity%20Attack).

## Reactions

***Counterattack.*** Trigger: The warrior is hit by an attack roll. _Response:_ The warrior adds 4 to its AC against that attack, possibly causing it to miss. On a miss, the warrior can make one Greatsword or Longbow attack against the attacker.
```
^statblock

## Environment

any