---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
title: "Balor"
aliases:
- "Balor"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Balor
*Source: Monster Manual (2024) p. 26. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Balor.webp#right)

## Balor

*Demon of Overwhelming Rage*

- **Habitat.** Planar (Abyss)  
- **Treasure.** [Armaments](3.Mechanics/tables/random-magic-items-armaments.md)  

Balors embody demons' ruinous fury and hatred. Towering, winged terrors, these demonic warlords seethe with wrath, their rage erupting in waves of fire and as a pair of vicious weapons: a sword of crackling lightning and a whip of lashing flames. A balor's fury persists until the moment of its demise, at which point it explodes—a last act of vengeance against those who slew it. Demon lords and evil gods harness balors' rage by making balors commanders of armies or guardians of grave secrets.
```ad-statblock
title: Balor
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Balor.webp#token)
*Huge Fiend (demon), Chaotic Evil*

- **Armor Class** 19 
- **Hit Points** 287 (23d12 + 138) 
- **Speed** 40 ft., fly 80 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 26 | +8 | +8 |
|Int| 20 | +5 | +5 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 15 | +2 | +2 |
|Wis| 16 | +3 | **+9** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 22 | +6 | **+12** |
|Cha| 22 | +6 | +6 |


- **Proficiency Bonus** +6
- **Saving Throws** Constitution +12, Wisdom +9
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +9
- **Damage Resistances** Cold, Lightning
- **Damage Immunities** Fire, Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Truesight](3.Mechanics/rules/senses.md#Truesight) 120 Ft., Passive Perception 19
- **Languages** Abyssal; Telepathy 120 ft.
- **Challenge** 19

## Traits

***Death Throes.*** The balor explodes when it dies. *Dexterity Saving Throw:* DC 20, each creature in a 30-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the balor. *Failure:* `dice:9d6|noform|noparens|avg|text(31)` (`9d6`) Fire damage plus `dice:9d6|noform|noparens|avg|text(31)` (`9d6`) Force damage. *Success:* Half damage. *Failure or Success:* If the balor dies outside the Abyss, it gains a new body instantly, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) somewhere in the Abyss.

***Fire Aura.*** At the end of each of the balor's turns, each creature in a 5-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the balor takes `dice:3d8|noform|noparens|avg|text(13)` (`3d8`) Fire damage.

***Legendary Resistance (3/Day).*** If the balor fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The balor has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The balor makes one Flame Whip attack and one Lightning Blade attack.

***Flame Whip.*** *Melee Attack Roll:* `dice:1d20+14|noform|noparens|text(+14)`, reach 30 ft. *Hit:* `dice:3d6+8|noform|noparens|avg|text(18)` (`3d6 + 8`) Force damage plus `dice:5d6|noform|noparens|avg|text(17)` (`5d6`) Fire damage. If the target is a Huge or smaller creature, the balor pulls the target up to 25 feet straight toward itself, and the target has the [Prone](3.Mechanics/rules/conditions.md#Prone) condition.

***Lightning Blade.*** *Melee Attack Roll:* `dice:1d20+14|noform|noparens|text(+14)`, reach 10 ft. *Hit:* `dice:3d8+8|noform|noparens|avg|text(21)` (`3d8 + 8`) Force damage plus `dice:4d10|noform|noparens|avg|text(22)` (`4d10`) Lightning damage, and the target can't take Reactions until the start of the balor's next turn.

## Bonus Actions

***Teleport.*** The balor teleports itself or a willing demon within 10 feet of itself up to 60 feet to an unoccupied space the balor can see.
```
^statblock

## Environment

planar, abyss