---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial/angel
title: "Deva"
aliases:
- "Deva"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
---
# Deva
*Source: Monster Manual (2024) p. 97. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Deva.webp#right)

## Deva

*World-Changing Angelic Messenger*

- **Habitat.** Planar (Upper Planes)  
- **Treasure.** [Relics](3.Mechanics/tables/random-magic-items-relics.md)  

Devas are emissaries of divine will. These immortal messengers adopt the shapes of mystical beasts or idealized, winged mortals. As with all angels, their true forms are known only to the gods they serve.

Rather than literal correspondence from a god, a deva conveys an allegory or quest to mortals, tasking them with delivering something to its rightful place. While the angel might be called on in times of need, it encourages mortal heroism. Should a deva's chosen champions carry out their charge, they experience a revelation or the world is changed in line with divine purpose. Roll on or choose a result from the Deva Messages table to inspire a deva's charge.

**Deva Messages**

`dice: [](deva-xmm.md#^deva-messages)`

| dice: 1d6 | The Deva Tasks a Mortal with Delivering... |
|-----------|--------------------------------------------|
| 1 | The corpse of a hero in need of redemption. |
| 2 | The cure for a plague in a distant land. |
| 3 | A holy coffer that must not be opened. |
| 4 | A magic weapon usable only by a true hero. |
| 5 | A seedling that wilts if exposed to anger. |
| 6 | Someone from another world with a prophesied purpose but no memory. |
^deva-messages
```ad-statblock
title: Deva
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Deva.webp#token)
*Medium Celestial (angel), Lawful Good*

- **Armor Class** 17 
- **Hit Points** 229 (27d8 + 108) 
- **Speed** 30 ft., fly 90 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 18 | +4 | +4 |
|Int| 17 | +3 | +3 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 18 | +4 | +4 |
|Wis| 20 | +5 | **+9** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 18 | +4 | +4 |
|Cha| 20 | +5 | **+9** |


- **Proficiency Bonus** +4
- **Saving Throws** Wisdom +9, Charisma +9
- **Skills** [Insight](3.Mechanics/rules/skills.md#Insight) +9, [Perception](3.Mechanics/rules/skills.md#Perception) +9
- **Damage Resistances** Radiant
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 19
- **Languages** All; Telepathy 120 ft.
- **Challenge** 10

## Traits

***Exalted Restoration.*** If the deva dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) somewhere in Mount Celestia.

***Magic Resistance.*** The deva has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The deva makes two Holy Mace attacks.

***Holy Mace.*** *Melee Attack Roll:* `dice:1d20+8|noform|noparens|text(+8)`, reach 5 ft. *Hit:* `dice:1d6+4|noform|noparens|avg|text(7)` (`1d6 + 4`) Bludgeoning damage plus `dice:4d8|noform|noparens|avg|text(18)` (`4d8`) Radiant damage.

***Spellcasting.*** The deva casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 17):

**At will:** [Detect Evil and Good](3.Mechanics/spells/detect-evil-and-good-xphb.md), [Shapechange](3.Mechanics/spells/shapechange-xphb.md) (Beast or Humanoid form only, no [Temporary Hit Points](3.Mechanics/rules/variant-rules/temporary-hit-points-xphb.md) gained from the spell, and no [Concentration](3.Mechanics/rules/conditions.md#Concentration) or [Temporary Hit Points](3.Mechanics/rules/variant-rules/temporary-hit-points-xphb.md) required to maintain the spell)

**1/day each:** [Commune](3.Mechanics/spells/commune-xphb.md), [Raise Dead](3.Mechanics/spells/raise-dead-xphb.md)

## Bonus Actions

***Divine Aid (2/Day).*** The deva casts [Cure Wounds](3.Mechanics/spells/cure-wounds-xphb.md), [Lesser Restoration](3.Mechanics/spells/lesser-restoration-xphb.md), or [Remove Curse](3.Mechanics/spells/remove-curse-xphb.md), using the same spellcasting ability as Spellcasting.

```
^statblock

## Environment

planar, upper