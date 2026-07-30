---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
title: "Guardian Naga"
aliases:
- "Guardian Naga"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- [restrained](3.Mechanics/rules/conditions.md#Restrained)
---
# Guardian Naga
*Source: Monster Manual (2024) p. 161. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Guardian%20Naga.webp#right)

## Guardian Naga

*Enduring Serpentine Lore Keeper*

- **Habitat.** Desert, Forest, Planar (Upper Planes)  
- **Treasure.** [Relics](3.Mechanics/tables/random-magic-items-relics.md)  

Guardian nagas are immortal, serpentine scholars that possess perfect memories. They collect the histories and lore of those they live among, guarding cultures' stories and passing them on to new generations with infallible accuracy. Guardian nagas that outlive their host civilizations might linger in whatever ruins remain, preserving the civilizations' stories so their lost people might live on.

Roll on or choose a result from the Guardian Naga Lore table to inspire what a naga knows.

**Guardian Naga Lore**

`dice: [](guardian-naga-xmm.md#^guardian-naga-lore)`

| dice: 1d8 | The Guardian Naga Recalls... |
|-----------|------------------------------|
| 1 | The last words of an ancient sage or leader. |
| 2 | The location of a hidden city or continent. |
| 3 | A magic word, password, or riddle's answer. |
| 4 | The names of all who have told it stories. |
| 5 | An otherwise forgotten ritual or spell. |
| 6 | Recipes using regional ingredients. |
| 7 | Stories of forgotten gods and local spirits. |
| 8 | The vulnerabilities of a legendary monster. |
^guardian-naga-lore
```ad-statblock
title: Guardian Naga
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Guardian%20Naga.webp#token)
*Large Celestial, Lawful Good*

- **Armor Class** 18 
- **Hit Points** 136 (16d10 + 48) 
- **Speed** 40 ft., climb 40 ft., swim 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 19 | +4 | +4 |
|Int| 16 | +3 | **+7** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 18 | +4 | **+8** |
|Wis| 19 | +4 | **+8** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 16 | +3 | **+7** |
|Cha| 18 | +4 | **+8** |


- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +8, Constitution +7, Intelligence +7, Wisdom +8, Charisma +8
- **Skills** [Arcana](3.Mechanics/rules/skills.md#Arcana) +11, [History](3.Mechanics/rules/skills.md#History) +11, [Religion](3.Mechanics/rules/skills.md#Religion) +11
- **Damage Immunities** Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Restrained](3.Mechanics/rules/conditions.md#Restrained)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 14
- **Languages** Celestial, Common
- **Challenge** 10

## Traits

***Celestial Restoration.*** If the naga dies, it returns to life in `dice:1d6|noform|noparens|avg` (`1d6`) days and regains all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) unless [Dispel Evil and Good](3.Mechanics/spells/dispel-evil-and-good-xphb.md) is cast on its remains.

## Actions

***Multiattack.*** The naga makes two Bite attacks. It can replace any attack with a use of Poisonous Spittle.

***Bite.*** *Melee Attack Roll:* `dice:1d20+8|noform|noparens|text(+8)`, reach 10 ft. *Hit:* `dice:2d12+4|noform|noparens|avg|text(17)` (`2d12 + 4`) Piercing damage plus `dice:4d10|noform|noparens|avg|text(22)` (`4d10`) Poison damage.

***Poisonous Spittle.*** *Constitution Saving Throw:* DC 16, one creature the naga can see within 60 feet. *Failure:* `dice:7d8|noform|noparens|avg|text(31)` (`7d8`) Poison damage, and the target has the [Blinded](3.Mechanics/rules/conditions.md#Blinded) condition until the start of the naga's next turn. *Success:* Half damage only.

***Spellcasting.*** The naga casts one of the following spells, requiring no Somatic or Material components and using Wisdom as the spellcasting ability (spell save DC 16):

**At will:** [Thaumaturgy](3.Mechanics/spells/thaumaturgy-xphb.md)

**1/day each:** [Clairvoyance](3.Mechanics/spells/clairvoyance-xphb.md), [Cure Wounds](3.Mechanics/spells/cure-wounds-xphb.md) (level 6 version), [Flame Strike](3.Mechanics/spells/flame-strike-xphb.md) (level 6 version), [Geas](3.Mechanics/spells/geas-xphb.md), [True Seeing](3.Mechanics/spells/true-seeing-xphb.md)
```
^statblock

## Environment

desert, forest, planar, upper