---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
title: "Oni"
aliases:
- "Oni"
---
# Oni
*Source: Monster Manual (2024) p. 232. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Oni.webp#right)

## Oni

*Wickedness Drawn to the Wicked*

- **Habitat.** Forest, Urban  
- **Treasure.** [Armaments](3.Mechanics/tables/random-magic-items-armaments.md)  

Oni are elusive entities that inhabit dark forests and other wildernesses. By shape-shifting into the form of an innocent or moving invisibly, oni encroach on communities and lonely roads. They frequently harass people of faith, testing the limits of their piousness, or torment selfish people, punishing them for their wickedness. Wise communities often have guardian statues, annual rituals, or local superstitions meant to keep oni at bay. In rare cases, an oni might gradually befriend such communities and protect them from other threats for generations.

Oni torment villages that don't pay them or other supernatural forces respect. Roll on or choose a result from the Oni Troubles table to inspire how an oni menaces such communities.

**Oni Troubles**

`dice: [](oni-xmm.md#^oni-troubles)`

| dice: 1d4 | The Oni Torments People By... |
|-----------|-------------------------------|
| 1 | Charming people to perform nasty tricks. |
| 2 | Claiming a bridge, gate, shrine, or trail and trying to eat anyone who comes near. |
| 3 | Luring other monsters to the settlement. |
| 4 | Playing drums that keep everyone awake. |
^oni-troubles

```ad-statblock
title: Oni
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Oni.webp#token)
*Large fiend, Lawful Evil*

- **Armor Class** 17 
- **Hit Points** 119 (`14d10 + 42`) 
- **Speed** 30 ft., fly 30 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|11 (+0)|16 (+3)|14 (+2)|12 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +3, Constitution +6, Wisdom +4, Charisma +5
- **Skills** [Arcana](3.Mechanics/rules/skills.md#Arcana) +5, [Deception](3.Mechanics/rules/skills.md#Deception) +8, [Perception](3.Mechanics/rules/skills.md#Perception) +4
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 ft., passive Perception 14
- **Damage Resistances** cold
- **Languages** Common, Giant
- **Challenge** 7

## Traits

***Regeneration.*** The oni regains 10 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) at the start of each of its turns if it has at least 1 [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md).

## Actions

***Multiattack.*** The oni makes two Claw or Nightmare Ray attacks. It can replace one attack with a use of Spellcasting.

***Claw.*** *Melee Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, reach 10 ft. *Hit:* `dice:1d12+4|noform|noparens|avg|text(10)` (`1d12 + 4`) Slashing damage plus `dice:2d8|noform|noparens|avg|text(9)` (`2d8`) Necrotic damage.

***Nightmare Ray.*** *Ranged Attack Roll:* `dice:1d20+5|noform|noparens|text(+5)`, range 60 ft. *Hit:* `dice:2d6+2|noform|noparens|avg|text(9)` (`2d6 + 2`) Psychic damage, and the target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the start of the oni's next turn.

***Shape-Shift.*** The oni shape-shifts into a Small or Medium Humanoid or a Large Giant, or it returns to its true form. Other than its size, its game statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed.

***Spellcasting.*** The oni casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 13):

**1/day each:** [Charm Person](3.Mechanics/spells/charm-person-xphb.md) (level 2 version), [Darkness](3.Mechanics/spells/darkness-xphb.md), [Gaseous Form](3.Mechanics/spells/gaseous-form-xphb.md), [Sleep](3.Mechanics/spells/sleep-xphb.md)

## Bonus Actions

***Invisibility.*** The oni casts [Invisibility](3.Mechanics/spells/invisibility-xphb.md) on itself, requiring no spell components and using the same spellcasting ability as Spellcasting.

```
^statblock

## Environment

forest, urban