---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
title: "Graveyard Revenant"
aliases:
- "Graveyard Revenant"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [petrified](3.Mechanics/rules/conditions.md#Petrified)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- [stunned](3.Mechanics/rules/conditions.md#Stunned)
- [unconscious](3.Mechanics/rules/conditions.md#Unconscious)
---
# Graveyard Revenant
*Source: Monster Manual (2024) p. 260*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Revenant%20and%20Graveyard%20Revenant.webp#right)

Graveyard revenants possess dozens of bodies that combine to form grotesque masses. They take revenge on those responsible for mass deaths or institutions that callously ruin lives.

## Revenants

*Vengeance from beyond the Grave*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** Any  

Wrathful spirits bent on revenge, revenants possess corpses and other materials, using them to seek justice or vent their rage on those who wronged them. Revenants refuse to rest until those they seek to punish are no more. If their bodies are destroyed, revenants claim new forms and continue their ruthless quests.

```ad-statblock
title: Graveyard Revenant
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Graveyard%20Revenant.webp#token)
*Huge Undead, Neutral*

- **Armor Class** 14 
- **Hit Points** 161 (14d12 + 70) 
- **Speed** 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 20 | +5 | **+8** |
|Int| 13 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | +2 |
|Wis| 16 | +3 | **+6** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 20 | +5 | **+8** |
|Cha| 18 | +4 | **+7** |


- **Proficiency Bonus** +3
- **Saving Throws** Strength +8, Constitution +8, Wisdom +6, Charisma +7
- **Skills** ⏤
- **Damage Resistances** Necrotic, Psychic
- **Damage Immunities** Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Stunned](3.Mechanics/rules/conditions.md#Stunned), [Unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 13
- **Languages** Common plus two other languages
- **Challenge** 7

## Traits

***Undead Restoration.*** If the revenant dies, it revives 24 hours later unless [Dispel Evil and Good](3.Mechanics/spells/dispel-evil-and-good-xphb.md) is cast on its remains. If it revives, it animates another group of corpses elsewhere on the same plane of existence; it now looks different but uses the same stat block and returns with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md).

## Actions

***Multiattack.*** The revenant makes two Suffocate attacks.

***Suffocate.*** *Melee Attack Roll:* `dice:1d20+8|noform|noparens|text(+8)`, reach 10 ft. *Hit:* `dice:1d10+5|noform|noparens|avg|text(10)` (`1d10 + 5`) Bludgeoning damage plus `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Necrotic damage. If the target is a Large or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 15). Until the grapple ends, the target is suffocating. The revenant can have up to two targets [Grappled](3.Mechanics/rules/conditions.md#Grappled) in this way at a time.

***Haunting Glare (Recharge 5-6).*** *Wisdom Saving Throw:* DC 15, each creature in a 30-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the revenant. *Failure:* The target has the [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed) condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.
```
^statblock

## Environment

forest, swamp, urban