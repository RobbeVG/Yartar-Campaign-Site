---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
title: "Chasme"
aliases:
- "Chasme"
conditionImmunities:
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Chasme
*Source: Monster Manual (2024) p. 69*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Chasme.webp#right)

## Chasme

*Demon of Betrayal and Sycophancy*

- **Habitat.** Planar (Abyss)  
- **Treasure.** [Relics](3.Mechanics/tables/random-magic-items-relics.md)  

Flying forth from the Abyss, chasmes resemble horse-size flies. They incapacitate foes by producing a mind-numbing droning, then use their proboscises to drain victims of life. In the Abyss, most chasmes obsequiously serve more powerful demons and search for captives to press into demonic hordes.
```ad-statblock
title: Chasme
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Chasme.webp#token)
*Large Fiend (demon), Chaotic Evil*

- **Armor Class** 15 
- **Hit Points** 78 (12d10 + 12) 
- **Speed** 20 ft., fly 60 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 15 | +2 | +2 |
|Int| 11 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 15 | +2 | **+5** |
|Wis| 14 | +2 | **+5** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 12 | +1 | +1 |
|Cha| 10 | +0 | +0 |


- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +5, Wisdom +5
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +5
- **Damage Resistances** Cold, Fire, Lightning
- **Damage Immunities** Poison
- **Condition Immunities** [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 10 Ft., [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 15
- **Languages** Abyssal; Telepathy 120 ft.
- **Challenge** 6

## Traits

***Demonic Restoration.*** If the chasme dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) somewhere in the Abyss.

***Magic Resistance.*** The chasme has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

***Spider Climb.*** The chasme can climb difficult surfaces, including along ceilings, without needing to make an ability check.

## Actions

***Proboscis.*** *Melee Attack Roll:* `dice:1d20+5|noform|noparens|text(+5)`, reach 5 ft. *Hit:* `dice:4d6+2|noform|noparens|avg|text(16)` (`4d6 + 2`) Piercing damage plus `dice:6d6|noform|noparens|avg|text(21)` (`6d6`) Necrotic damage. If the target is a creature, its [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum decreases by an amount equal to the Necrotic damage taken.

## Bonus Actions

***Drone.*** *Constitution Saving Throw:* DC 12, each creature in a 30-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the chasme (demons automatically succeed on this save). *Failure:* The target has the [Unconscious](3.Mechanics/rules/conditions.md#Unconscious) condition and repeats the save at the end of each of its turns. The target succeeds automatically after 10 minutes or if it takes damage or a creature within 5 feet of it takes an action to empty a flask of [Holy Water](3.Mechanics/items/holy-water-xphb.md) on it. *Success:* The target is immune to this chasme's Drone for 24 hours.
```
^statblock

## Environment

planar, abyss