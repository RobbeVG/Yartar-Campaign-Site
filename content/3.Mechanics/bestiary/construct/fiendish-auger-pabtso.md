---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
title: "Fiendish Auger"
aliases:
- "Fiendish Auger"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [petrified](3.Mechanics/rules/conditions.md#Petrified)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- [unconscious](3.Mechanics/rules/conditions.md#Unconscious)
---
# Fiendish Auger
*Source: Phandelver and Below: The Shattered Obelisk p. 206*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Fiendish%20Auger.webp#right)

A fiendish auger is created when a wicked spirit enters an excavation drill, causing the hulking corkscrew bore to glow brightly with hellfire.

Fueled by the fervent aggression of the evil spirit within, fiendish augers can rapidly churn through solid rock. However, those who employ a fiendish auger must keep a keen eye on the machine. Without careful instruction, a fiendish auger indiscriminately bores through creature and earth alike.
```ad-statblock
title: Fiendish Auger
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Fiendish%20Auger.webp#token)
*Huge Construct, Typically  Neutral Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** 85 (9d12 + 27) 
- **Speed** 40 ft., burrow 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 23 | +6 | +6 |
|Int| 6 | -2 | -2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 10 | +0 | +0 |
|Wis| 12 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 17 | +3 | +3 |
|Cha| 5 | -3 | -3 |


- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Immunities** Fire, Poison
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded), [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft. (can't see beyond this radius), Passive Perception 11
- **Languages** —
- **Challenge** 5

## Traits

***Siege Monster.*** The auger deals double damage to objects and structures.

***Tunneler.*** The auger can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake.

## Actions

***Flaming Drill.*** *Melee Weapon Attack:* `dice:1d20+9|noform|noparens|text(+9)` to hit, reach 5 ft., one target. *Hit:* `dice:2d10+6|noform|noparens|avg|text(17)` (`2d10 + 6`) piercing damage plus `dice:2d6|noform|noparens|avg|text(7)` (`2d6`) fire damage. If the auger moves at least 20 feet in a straight line toward the target immediately before the hit, the target takes an additional `dice:2d10|noform|noparens|avg|text(11)` (`2d10`) piercing damage, and if the target is a creature, it must succeed on a DC 17 Strength saving throw or have the [prone](3.Mechanics/rules/conditions.md#Prone) condition.

## Bonus Actions

***Burst of Heat (Recharge 5-6).*** The auger releases an intense burst of heat in a 30-foot-radius sphere centered on itself. This heat spreads around corners. Each creature in this area must make a DC 17 Constitution saving throw, taking `dice:3d8|noform|noparens|avg|text(13)` (`3d8`) fire damage on a failed save, or half as much damage on a successful one.
```
^statblock