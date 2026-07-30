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
---
# Fiendish Auger
*Source: Phandelver and Below: The Shattered Obelisk p. 206*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Fiendish%20Auger.webp#right)

A fiendish auger is created when a wicked spirit enters an excavation drill, causing the hulking corkscrew bore to glow brightly with hellfire.

Fueled by the fervent aggression of the evil spirit within, fiendish augers can rapidly churn through solid rock. However, those who employ a fiendish auger must keep a keen eye on the machine. Without careful instruction, a fiendish auger indiscriminately bores through creature and earth alike.

```ad-statblock
title: Fiendish Auger
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Fiendish%20Auger.webp#token)
*Huge construct, typically  Neutral Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** 85 (`9d12 + 27`) 
- **Speed** 40 ft., burrow 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|10 (+0)|17 (+3)| 6 (-2)|12 (+1)| 5 (-3)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** [blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 ft. (can't see beyond this radius), passive Perception 11
- **Damage Immunities** fire, poison
- **Condition Immunities** [blinded](3.Mechanics/rules/conditions.md#Blinded), [charmed](3.Mechanics/rules/conditions.md#Charmed), [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [frightened](3.Mechanics/rules/conditions.md#Frightened), [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [petrified](3.Mechanics/rules/conditions.md#Petrified), [poisoned](3.Mechanics/rules/conditions.md#Poisoned), [unconscious](3.Mechanics/rules/conditions.md#Unconscious)
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