---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
title: "Pit Fiend"
aliases:
- "Pit Fiend"
conditionImmunities:
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Pit Fiend
*Source: Monster Manual (2024) p. 243. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Pit%20Fiend.webp#right)

## Pit Fiend

*Devil of Domination*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** [Relics](3.Mechanics/tables/random-magic-items-relics.md)  

Masterminds of the Nine Hells and generals of infernal legions, pit fiends seek conquests across the planes of existence. More than warmongers, these diabolical tyrants concoct intricate plots that play out among fiendish battlefields, infernal politics, and mortal conspiracies.

Pit fiends are the nobility of the Nine Hells, and many rule Lower Planar fiefdoms, doomed mortal worlds, and other infernal redoubts. Most serve archdevils of the Nine Hells as they pursue their own ambitions. Ranks of lesser devils obey pit fiends, but these cunning tyrants remain on guard against betrayal from their servants.

Smoldering with the evil of the Nine Hells, pit fiends strike fear in creatures with their mere presence. Despite their size and incredible physical and magical might, pit fiends are as likely to try to corrupt foes as they are to destroy them outright. Pit fiends' arrogance can lead them to underestimate mortal foes—a failing that can lead to their downfall.
```ad-statblock
title: Pit Fiend
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Pit%20Fiend.webp#token)
*Large Fiend (devil), Lawful Evil*

- **Armor Class** 21 
- **Hit Points** 337 (27d10 + 189) 
- **Speed** 30 ft., fly 60 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 26 | +8 | +8 |
|Int| 22 | +6 | +6 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | **+8** |
|Wis| 18 | +4 | **+10** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 24 | +7 | +7 |
|Cha| 24 | +7 | +7 |


- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +8, Wisdom +10
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +10, [Persuasion](3.Mechanics/rules/skills.md#Persuasion) +19
- **Damage Resistances** Cold
- **Damage Immunities** Fire, Poison
- **Condition Immunities** [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Truesight](3.Mechanics/rules/senses.md#Truesight) 120 Ft., Passive Perception 20
- **Languages** Infernal; Telepathy 120 ft.
- **Challenge** 20

## Traits

***Diabolical Restoration.*** If the pit fiend dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) somewhere in the Nine Hells.

***Fear Aura.*** The pit fiend emanates an aura in a 20-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) while it doesn't have the [Incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition. *Wisdom Saving Throw:* DC 21, any enemy that starts its turn in the aura. *Failure:* The target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the start of its next turn. *Success:* The target is immune to this pit fiend's aura for 24 hours.

***Legendary Resistance (4/Day).*** If the pit fiend fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The pit fiend has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The pit fiend makes one Bite attack, two Devilish Claw attacks, and one Fiery Mace attack.

***Bite.*** *Melee Attack Roll:* `dice:1d20+14|noform|noparens|text(+14)`, reach 10 ft. *Hit:* `dice:3d6+8|noform|noparens|avg|text(18)` (`3d6 + 8`) Piercing damage. If the target is a creature, it must make the following saving throw. *Constitution Saving Throw:* DC 21. *Failure:* The target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition. While [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), the target can't regain [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) and takes `dice:6d6|noform|noparens|avg|text(21)` (`6d6`) Poison damage at the start of each of its turns, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.

***Devilish Claw.*** *Melee Attack Roll:* `dice:1d20+14|noform|noparens|text(+14)`, reach 10 ft. *Hit:* `dice:4d8+8|noform|noparens|avg|text(26)` (`4d8 + 8`) Necrotic damage.

***Fiery Mace.*** *Melee Attack Roll:* `dice:1d20+14|noform|noparens|text(+14)`, reach 10 ft. *Hit:* `dice:4d6+8|noform|noparens|avg|text(22)` (`4d6 + 8`) Force damage plus `dice:6d6|noform|noparens|avg|text(21)` (`6d6`) Fire damage.

***Hellfire Spellcasting (Recharge 4-6).*** The pit fiend casts [Fireball](3.Mechanics/spells/fireball-xphb.md) (level 5 version) twice, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21). It can replace one [Fireball](3.Mechanics/spells/fireball-xphb.md) with [Hold Monster](3.Mechanics/spells/hold-monster-xphb.md) (level 7 version) or [Wall of Fire](3.Mechanics/spells/wall-of-fire-xphb.md).

```
^statblock

## Environment

planar, nine hells