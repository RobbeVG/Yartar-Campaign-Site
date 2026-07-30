---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
title: "Beholder Zombie"
aliases:
- "Beholder Zombie"
conditionImmunities:
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- [prone](3.Mechanics/rules/conditions.md#Prone)
---
# Beholder Zombie
*Source: Monster Manual (2024) p. 347*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Zombies.webp#right)

Zombies animated from the corpses of beholders retain some use of those monsters' magical eyestalks. These hovering corpses rely on their magic to destroy impediments and paralyze foes, allowing them to savage foes with their rotting maws.

Magic-using beholders typically raise these abominations from the corpses of defeated rivals.

## Zombies

*Relentless Reanimated Corpses*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Zombies are unthinking, reanimated corpses, often gruesomely marred by decay and lethal traumas. They serve whatever supernatural force animates them—typically evil necromancers or fiendish spirits. Zombies are relentless, merciless, and resilient, and their dead flesh can carry on even after suffering grievous wounds. While they can follow simple orders, they rely on primal drives rather than thought. They fulfill commands by working tirelessly or battering through foes, but they are easily stymied by barriers or unexpected circumstances.

Zombies are usually created from Humanoid corpses, but the remains of other creatures can also become zombies. Such monstrous zombies might possess the strength they had in life or a measure of their supernatural abilities, but they employ such abilities haphazardly at best.

> [!quote] A quote from Account of the Night of the Walking Dead  
> 
> Then, by a spectacular crack of lightning, the figures came into view, moving slowly toward the village. Over driving winds a voice cried out, "The dead come for Marais d'Tarascon! An army of the walking dead!"


```ad-statblock
title: Beholder Zombie
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Beholder%20Zombie.webp#token)
*Large Undead, Neutral Evil*

- **Armor Class** 15 
- **Hit Points** 93 (11d10 + 33) 
- **Speed** 5 ft., fly 20 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 14 | +2 | +2 |
|Int| 3 | -4 | -4 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 8 | -1 | -1 |
|Wis| 8 | -1 | **+2** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 16 | +3 | +3 |
|Cha| 5 | -3 | -3 |


- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +2
- **Skills** ⏤
- **Damage Immunities** Poison
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Prone](3.Mechanics/rules/conditions.md#Prone)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 9
- **Languages** Understands Deep Speech and Undercommon but can't speak
- **Challenge** 5

## Traits

***Undead Fortitude.*** If damage reduces the zombie to 0 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md), it makes a Constitution saving throw (DC 5 plus the damage taken) unless the damage is Radiant or from a [Critical Hit](3.Mechanics/rules/variant-rules/critical-hit-xphb.md). On a successful save, the zombie drops to 1 [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) instead.

## Actions

***Multiattack.*** The zombie uses Eye Rays twice.

***Bite.*** *Melee Attack Roll:* `dice:1d20+5|noform|noparens|text(+5)`, reach 5 ft. *Hit:* `dice:4d6+2|noform|noparens|avg|text(16)` (`4d6 + 2`) Piercing damage.

***Eye Rays.*** The zombie randomly shoots one of the following magical rays at a target it can see within 120 feet of itself (roll `dice:1d4|noform|noparens|avg` (`1d4`); reroll if the zombie has already used that ray during this turn):

- **1 Paralyzing Ray.** *Constitution Saving Throw:* DC 14. *Failure:* The target has the [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed) condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically.  
- **2 Fear Ray.** *Wisdom Saving Throw:* DC 14. *Failure:* `dice:3d8|noform|noparens|avg|text(13)` (`3d8`) Psychic damage, and the target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the end of its next turn.  
- **3 Enervation Ray.** *Constitution Saving Throw:* DC 14. *Failure:* `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Necrotic damage, and the target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition until the end of its next turn. While [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), the target can't regain [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md). *Success:* Half damage only.  
- **4 Disintegration Ray.** *Dexterity Saving Throw:* DC 14. *Failure:* `dice:5d10|noform|noparens|avg|text(27)` (`5d10`) Force damage. If the target is a nonmagical object or a creation of magical force, a 10-foot [Cube](3.Mechanics/rules/variant-rules/cube-area-of-effect-xphb.md) of it disintegrates into dust. *Success:* Half damage. *Failure or Success:* If the target is a creature and this damage reduces it to 0 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md), it disintegrates into dust.  
```
^statblock

## Environment

planar, shadowfell, underdark, urban