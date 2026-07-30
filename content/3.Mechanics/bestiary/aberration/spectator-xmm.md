---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/beholder
title: "Spectator"
aliases:
- "Spectator"
conditionImmunities:
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [prone](3.Mechanics/rules/conditions.md#Prone)
---
# Spectator
*Source: Monster Manual (2024) p. 289*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Spectator.webp#right)

## Spectator

*Magic-Bound Beholder-Kin*

- **Habitat.** Underdark  
- **Treasure.** Any  

Invoking mysterious rites involving four beholder eyestalks, a spellcaster can mold aberrant dreams into a beholder-like guardian. Called a spectator, the being summoned by such a ritual resembles a beholder with five magical eyes—a central eye and four on stalks arrayed around the crown of the creature's spherical body.

A spectator serves its conjurer for 101 years by guarding something of the spellcaster's choice—typically a treasure or location. The spectator is a reliable guardian and allows only its summoner access to what it protects. A spectator might converse with other creatures, openly discussing its orders and the magic-user who conjured it, but it has no ambitions of its own and won't abandon its post. Should an intruder ignore its warnings, a spectator attempts to drive away the intruder with its magical eye rays.

At the end of its service, a spectator might discorporate back into nothingness or wander away, seeking to learn more of the multiverse.
```ad-statblock
title: Spectator
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Spectator.webp#token)
*Medium Aberration (beholder), Lawful Neutral*

- **Armor Class** 14 
- **Hit Points** 45 (7d8 + 14) 
- **Speed** 5 ft., fly 30 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 8 | -1 | -1 |
|Int| 13 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | +2 |
|Wis| 14 | +2 | +2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 14 | +2 | +2 |
|Cha| 11 | +0 | +0 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +6
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Prone](3.Mechanics/rules/conditions.md#Prone)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 16
- **Languages** Deep Speech, Undercommon; Telepathy 120 ft.
- **Challenge** 3

## Actions

***Multiattack.*** The spectator uses Eye Rays twice.

***Bite.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* `dice:1d6+2|noform|noparens|avg|text(5)` (`1d6 + 2`) Piercing damage.

***Eye Rays.*** The spectator randomly shoots one of the following magical rays at a target it can see within 90 feet of itself (roll `dice:1d4|noform|noparens|avg` (`1d4`); reroll if the spectator has already used that ray during this turn):

- **1 Confusion Ray.** *Wisdom Saving Throw:* DC 12. *Failure:* `dice:2d4|noform|noparens|avg|text(5)` (`2d4`) Psychic damage, and the target can't take Reactions until the end of its next turn. On its next turn, the target can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can't attack, it does nothing on that turn.  
- **2 Paralyzing Ray.** *Constitution Saving Throw:* DC 12. *Failure:* The target has the [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed) condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.  
- **3 Fear Ray.** *Wisdom Saving Throw:* DC 12. *Failure:* `dice:2d4|noform|noparens|avg|text(5)` (`2d4`) Psychic damage, and the target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the end of its next turn.  
- **4 Wounding Ray.** *Constitution Saving Throw:* DC 12. *Failure:* `dice:3d10|noform|noparens|avg|text(16)` (`3d10`) Necrotic damage. *Success:* Half damage.  

## Reactions

***Spell Reflection.*** Trigger: The spectator succeeds on a saving throw against a spell, or a spell's attack roll misses it. _Response—_*Dexterity Saving Throw:* DC 12, one creature the spectator can see within 120 feet. *Failure:* `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Force damage.
```
^statblock

## Environment

underdark