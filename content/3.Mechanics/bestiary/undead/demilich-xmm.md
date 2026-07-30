---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
title: "Demilich"
aliases:
- "Demilich"
---
# Demilich
*Source: Monster Manual (2024) p. 96*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Demilich.webp#right)

## Demilich

*What Lies beyond Lichdom*

- **Habitat.** Any  
- **Treasure.** [Arcana](3.Mechanics/tables/random-magic-items-arcana.md)  

A demilich is a skull harboring the remnants of a lich's wicked essence. If the burden of immortality overwhelms a lich, its consciousness turns inward as its body rots away. But if its remains are disturbed, a demilich rises. Demiliches usually appear as skulls adorned with gems or arcane sigils.

### Demilich Lairs

Demiliches jealously guard their deathtrap-laden sanctums. The most notorious of these is the Tomb of Horrors, lair of the infamous Acererak.

```ad-statblock
title: Demilich
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Demilich.webp#token)
*Tiny undead, Neutral Evil*

- **Armor Class** 20 
- **Hit Points** 180 (`72d4`) 
- **Speed** 5 ft., fly 30 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 (-5)|20 (+5)|10 (+0)|20 (+5)|17 (+3)|20 (+5)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +11, Constitution +6, Intelligence +11, Wisdom +9
- **Skills** ⏤
- **Senses** [Truesight](3.Mechanics/rules/senses.md#Truesight) 120 ft., passive Perception 13
- **Damage Resistances** bludgeoning, piercing, slashing
- **Damage Immunities** necrotic, poison, psychic
- **Condition Immunities** [charmed](3.Mechanics/rules/conditions.md#Charmed), [deafened](3.Mechanics/rules/conditions.md#Deafened), [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [frightened](3.Mechanics/rules/conditions.md#Frightened), [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [petrified](3.Mechanics/rules/conditions.md#Petrified), [poisoned](3.Mechanics/rules/conditions.md#Poisoned), [prone](3.Mechanics/rules/conditions.md#Prone), [stunned](3.Mechanics/rules/conditions.md#Stunned)
- **Languages** —
- **Challenge** 18

## Traits

***Legendary Resistance (3/Day, or 4/Day in Lair).*** If the demilich fails a saving throw, it can choose to succeed instead.

***Undead Restoration.*** If the demilich is destroyed, it reforms and regains all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) in `dice:1d10|noform|noparens|avg` (`1d10`) days unless a [Wish](3.Mechanics/spells/wish-xphb.md) spell is cast on its remains.

## Actions

***Multiattack.*** The demilich makes three Necrotic Burst attacks.

***Necrotic Burst.*** *Melee  or Ranged Attack Roll:* `dice:1d20+11|noform|noparens|text(+11)`, reach 5 ft. or range 120 ft. *Hit:* `dice:7d6|noform|noparens|avg|text(24)` (`7d6`) Necrotic damage.

***Howl (Recharge 5-6).*** *Constitution Saving Throw:* DC 19, each creature in a 30-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the demilich. *Failure:* `dice:20d6|noform|noparens|avg|text(70)` (`20d6`) Psychic damage. *Failure or Success:* The target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the start of the demilich's next turn.

## Legendary Actions

Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the demilich can expend a use to take one of the following actions. The demilich regains all expended uses at the start of each of its turns.

***Energy Drain.*** *Constitution Saving Throw:* DC 19, one creature the demilich can see within 120 feet. *Failure:* The target's [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum decreases by `dice:4d6|noform|noparens|avg|text(14)` (`4d6`). *Failure or Success:* The demilich can't take this action again until the start of its next turn.

***Grave-Dust Flight.*** The demilich flies up to its [Fly Speed](3.Mechanics/rules/variant-rules/fly-speed-xphb.md), shedding grave dust. Each creature within 5 feet of the demilich as it moves is targeted once by the following effect. *Constitution Saving Throw:* DC 19. *Failure:* The target has the [Blinded](3.Mechanics/rules/conditions.md#Blinded) condition until the end of the demilich's next turn. *Failure or Success:* The demilich can't take this action again until the start of its next turn.

***Necrosis.*** The demilich makes one Necrotic Burst attack.

## Regional Effects

The region containing a demilich's lair is twisted by its presence, creating the following effects:

- **Enervating Domain.** Whenever a creature other than the demilich or one of its allies finishes a [Long Rest](3.Mechanics/rules/variant-rules/long-rest-xphb.md) within 1 mile of the lair, the creature must succeed on a DC 20 Constitution saving throw or have its [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum reduced by `dice:1d4|noform|noparens|avg` (`1d4`). This reduction lasts until the creature finishes a [Long Rest](3.Mechanics/rules/variant-rules/long-rest-xphb.md) outside that area.  
- **Travel Ward.** Creatures can't use teleportation or planar travel to enter or exit the lair.  

If the demilich dies or moves its lair elsewhere, these effects end immediately.
```
^statblock

## Environment

any