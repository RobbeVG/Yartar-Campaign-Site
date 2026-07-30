---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/chromatic
title: "Ancient Green Dragon"
aliases:
- "Ancient Green Dragon"
---
# Ancient Green Dragon
*Source: Monster Manual (2024) p. 154. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![An ancient green dragon manipulates the fates of its pawns from deep within its forest lair](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Ancient%20Green%20Dragon.webp#right)

Ancient green dragons are creatures of legend, rarely seen by their servants or foes. Via magic and well-hidden agents, these dragons stoke suspicion between allies and undermine noble works. As bonds fray, the dragons reap rewards of greater wealth and control. Eventually the ambitions of ancient green dragons stretch beyond their territories as they seek control over empires, planar realms, or death itself.

## Green Dragons

*Dragons of Deceit and Derision*

- **Habitat.** Forest  
- **Treasure.** [Arcana](3.Mechanics/tables/random-magic-items-arcana.md)  

From forbidden forest depths, green dragons whisper evils into the world and manipulate the lives of those who listen. Elusive, conniving, and egotistical, these chromatic dragons patiently prey on the fears of shorter-lived beings, corrupting and isolating them. Green dragons might lurk amid labyrinthine wildernesses for centuries without revealing themselves; even their most devoted followers might know them only as the voice of the woodlands or a whisper in their dreams.

Despite their might, most green dragons disdain physical violence, viewing combat as servants' work and preferring to trick foes into dangerous or exploitative scenarios. These dragons collect "baubles" that embody their webs of manipulation and serve as tools of extortion, such as compromising documents, family heirlooms, and sentimental treasures.

### Green Dragon Lairs

Green dragons lair in ancient forests, often shaping stands of massive trees into compounds of interwoven branches, hollow trunks, and caverns amid mighty roots. They might also dwell amid forested ruins, particularly the former homes of those they've conquered.

## Statblock

```ad-statblock
title: Ancient Green Dragon
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Ancient%20Green%20Dragon.webp#token)
*Gargantuan dragon (chromatic), Lawful Evil*

- **Armor Class** 21 
- **Hit Points** 402 (`23d20 + 161`) 
- **Speed** 40 ft., fly 80 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)|12 (+1)|25 (+7)|20 (+5)|17 (+3)|22 (+6)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +8, Wisdom +10
- **Skills** [Deception](3.Mechanics/rules/skills.md#Deception) +13, [Perception](3.Mechanics/rules/skills.md#Perception) +17, [Persuasion](3.Mechanics/rules/skills.md#Persuasion) +13, [Stealth](3.Mechanics/rules/skills.md#Stealth) +8
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 ft., [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 ft., passive Perception 27
- **Damage Immunities** poison
- **Condition Immunities** [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Languages** Common, Draconic
- **Challenge** 22

## Traits

***Amphibious.*** The dragon can breathe air and water.

***Legendary Resistance (4/Day, or 5/Day in Lair).*** If the dragon fails a saving throw, it can choose to succeed instead.

## Actions

***Multiattack.*** The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast [Mind Spike](3.Mechanics/spells/mind-spike-xphb.md) (level 5 version).

***Rend.*** *Melee Attack Roll:* `dice:1d20+15|noform|noparens|text(+15)`, reach 15 ft. *Hit:* `dice:2d8+8|noform|noparens|avg|text(17)` (`2d8 + 8`) Slashing damage plus `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Poison damage.

***Poison Breath (Recharge 5-6).*** *Constitution Saving Throw:* DC 22, each creature in a 90-foot [Cone](3.Mechanics/rules/variant-rules/cone-area-of-effect-xphb.md). *Failure:* `dice:22d6|noform|noparens|avg|text(77)` (`22d6`) Poison damage. *Success:* Half damage.

***Spellcasting.*** The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21):

**At will:** [Detect Magic](3.Mechanics/spells/detect-magic-xphb.md), [Mind Spike](3.Mechanics/spells/mind-spike-xphb.md) (level 5 version)

**1/day each:** [Geas](3.Mechanics/spells/geas-xphb.md), [Modify Memory](3.Mechanics/spells/modify-memory-xphb.md)

## Legendary Actions

Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.

***Mind Invasion.*** The dragon uses Spellcasting to cast [Mind Spike](3.Mechanics/spells/mind-spike-xphb.md) (level 5 version).

***Noxious Miasma.*** *Constitution Saving Throw:* DC 21, each creature in a 30-foot-radius [Sphere](3.Mechanics/rules/variant-rules/sphere-area-of-effect-xphb.md) centered on a point the dragon can see within 90 feet. *Failure:* `dice:5d6|noform|noparens|avg|text(17)` (`5d6`) Poison damage, and the target takes a -2 penalty to AC until the end of its next turn. *Failure or Success:* The dragon can't take this action again until the start of its next turn.

***Pounce.*** The dragon moves up to half its [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md), and it makes one Rend attack.

## Regional Effects

The region containing an adult or ancient green dragon's lair is warped by its presence, creating the following effects:

- **Beast Spies.** Tiny Beasts magically gain the ability to understand Draconic and can communicate telepathically with the dragon while within 1 mile of the lair.  
- **Poisonous Thicket.** Ordinary plants growing within 1 mile of the lair poison the air around them. Whenever a creature other than the dragon or its allies finishes a [Long Rest](3.Mechanics/rules/variant-rules/long-rest-xphb.md) in that area, it must succeed on a DC 15 Constitution saving throw or have the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition for 1 hour.  

If the dragon dies or moves its lair elsewhere, these effects end immediately.
```
^statblock

## Environment

forest