---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
title: "Mind Flayer Arcanist"
aliases:
- "Mind Flayer Arcanist"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
---
# Mind Flayer Arcanist
*Source: Monster Manual (2024) p. 214*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Mind%20Flayers.webp#right)

Mind flayer arcanists enhance their psionic abilities with magic. Other mind flayers view those that undertake such experiments with disgust and fear.

## Mind Flayers

*Brain-Eating Underdark Tyrants*

- **Habitat.** Underdark  
- **Treasure.** [Arcana](3.Mechanics/tables/random-magic-items-arcana.md)  

Scattered survivors of a world-ruining, multiversal empire, mind flayers lurk in secret conclaves hidden deep within Material Plane worlds. Within their alien sanctuaries, these wicked masterminds—also known as illithids—reshape the Underdark and its inhabitants to serve their unfathomable whims. Mind flayers are feared for their psionic powers, which allow them to stun and control other creatures, and for their horrific method of feeding: using their four slimy tentacles to extract the brains of their victims.

Mind flayers are infamous plotters and manipulators, concocting plans that reach beyond their subterranean realms. Aside from using their psionic powers to control others, mind flayers often experiment with their own bizarre life cycles, implanting other creatures with illithid young to create unnatural servants. Creatures such as grimlocks and intellect devourers result from mind flayers' biological tampering, while other Underdark-dwelling monsters—including kuo-toa, quaggoths, and troglodytes—often serve illithid masters. Githyanki and githzerai have a long adversarial history with mind flayers and bear the scars of illithid manipulation.

### Mind Flayer Colonies

Mind flayers work as lone schemers, in mysterious cabals, or as part of worlds-spanning illithid conspiracies. In groups, mind flayers work toward bizarre agendas organized by an elder brain—a massive, brain-like being with incredible psionic powers. Without such a leader, groups of mind flayers fall to self-destructive squabbling. Roll on or choose a result from the Mind Flayer Machinations table to inspire an illithid conclave's plots.

**Mind Flayer Machinations**

`dice: [](mind-flayer-arcanist-xmm.md#^mind-flayer-machinations)`

| dice: 1d6 | The Mind Flayer Colony Seeks To... |
|-----------|------------------------------------|
| 1 | Blot out the sun so their Underdark-dwelling servants can invade the surface. |
| 2 | Create a new monstrous fusion between mind flayers and a legendary monster. |
| 3 | Forge a psionic network uniting illithid colonies. |
| 4 | Replace world leaders with intellect devourers. |
| 5 | Restore a vessel to travel through Wildspace. |
| 6 | Sacrifice the mental energy of a planet's populace to take control of a githyanki bastion. |
^mind-flayer-machinations

```ad-statblock
title: Mind Flayer Arcanist
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Mind%20Flayer%20Arcanist.webp#token)
*Medium Aberration, Lawful Evil*

- **Armor Class** 16 
- **Hit Points** 143 (26d8 + 26) 
- **Speed** 30 ft., fly 30 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 11 | +0 | +0 |
|Int| 20 | +5 | **+9** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | **+6** |
|Wis| 17 | +3 | **+7** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 13 | +1 | +1 |
|Cha| 17 | +3 | **+7** |


- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +6, Intelligence +9, Wisdom +7, Charisma +7
- **Skills** [Arcana](3.Mechanics/rules/skills.md#Arcana) +13, [Insight](3.Mechanics/rules/skills.md#Insight) +7, [Perception](3.Mechanics/rules/skills.md#Perception) +7, [Stealth](3.Mechanics/rules/skills.md#Stealth) +6
- **Damage Immunities** Psychic
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Frightened](3.Mechanics/rules/conditions.md#Frightened)
- **Gear** [breastplate](3.Mechanics/items/breastplate-xphb.md)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 17
- **Languages** Deep Speech, Undercommon; Telepathy 120 ft.
- **Challenge** 11

## Traits

***Magic Resistance.*** The mind flayer has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The mind flayer makes three Arcane Tentacles attacks.

***Arcane Tentacles.*** *Melee  or Ranged Attack Roll:* `dice:1d20+9|noform|noparens|text(+9)`, reach 5 ft. or range 120 ft. *Hit:* `dice:4d10+5|noform|noparens|avg|text(27)` (`4d10 + 5`) Psychic damage, and the mind flayer can teleport the target up to 30 feet to an unoccupied space the mind flayer can see on a surface or liquid large enough to support the target. If this damage reduces the target to 0 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md), the mind flayer kills it and magically devours its brain.

***Mind Burst (Recharge 5-6).*** *Intelligence Saving Throw:* DC 17, each creature in a 40-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the mind flayer. *Failure:* `dice:8d8+5|noform|noparens|avg|text(41)` (`8d8 + 5`) Psychic damage, and the target has the [Stunned](3.Mechanics/rules/conditions.md#Stunned) condition until the end of the mind flayer's next turn. *Success:* Half damage only.

***Spellcasting.*** The mind flayer casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 17):

**At will:** [Detect Magic](3.Mechanics/spells/detect-magic-xphb.md), [Detect Thoughts](3.Mechanics/spells/detect-thoughts-xphb.md), [Disguise Self](3.Mechanics/spells/disguise-self-xphb.md), [Mage Hand](3.Mechanics/spells/mage-hand-xphb.md) (the hand is [Invisible](3.Mechanics/rules/conditions.md#Invisible))

**1/day each:** [Clairvoyance](3.Mechanics/spells/clairvoyance-xphb.md), [Dimension Door](3.Mechanics/spells/dimension-door-xphb.md), [Fireball](3.Mechanics/spells/fireball-xphb.md) (level 5 version), [Lightning Bolt](3.Mechanics/spells/lightning-bolt-xphb.md) (level 5 version), [Plane Shift](3.Mechanics/spells/plane-shift-xphb.md) (self only), [Sending](3.Mechanics/spells/sending-xphb.md)

## Reactions

***Shield (2/Day).*** The mind flayer casts [Shield](3.Mechanics/spells/shield-xphb.md) in response to that spell's trigger, using the same spellcasting ability as Spellcasting.

```
^statblock

## Environment

underdark