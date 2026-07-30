---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/lower
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
title: "Incubus"
aliases:
- "Incubus"
---
# Incubus
*Source: Monster Manual (2024) p. 178. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Incubus.webp#right)

## Incubus

*Life-Leeching Dream Stalker*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** Any  

Incubi exploit the vulnerability of mortal dreams. Slipping into the homes of sleepers, incubi feed off dreams and replace them with terrifying nightmares. Incubi visit victims nightly until their prey expires. The incubi then hunt for new victims, preferring the loved ones of past targets.

Incubi can transform into succubi and vice versa, taking the forms they need to manipulate foes in dreams or in the flesh.

Those visited by an incubus have recurring nightmares. Roll on or choose a result from the Incubus Nightmares table to inspire these night terrors.

**Incubus Nightmares**

`dice: [](incubus-xmm.md#^incubus-nightmares)`

| dice: 1d8 | The Incubus's Victim Has Dreams Of... |
|-----------|---------------------------------------|
| 1 | An angry family member or authority figure. |
| 2 | Being chased through the wilderness. |
| 3 | Being devoured by animals or monsters. |
| 4 | [Falling](3.Mechanics/traps-hazards/falling-xphb.md), drowning, or suffocating. |
| 5 | A ruinous public embarrassment. |
| 6 | A shadowy intruder or monstrous silhouette. |
| 7 | A traumatic past event. |
| 8 | A visitor with an eerie or enigmatic message. |
^incubus-nightmares
```ad-statblock
title: Incubus
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Incubus.webp#token)
*Medium Fiend, Neutral Evil*

- **Armor Class** 15 
- **Hit Points** 66 (12d8 + 12) 
- **Speed** 30 ft., fly 60 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 8 | -1 | -1 |
|Int| 15 | +2 | +2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 17 | +3 | +3 |
|Wis| 12 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 13 | +1 | +1 |
|Cha| 20 | +5 | +5 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Deception](3.Mechanics/rules/skills.md#Deception) +9, [Insight](3.Mechanics/rules/skills.md#Insight) +5, [Perception](3.Mechanics/rules/skills.md#Perception) +5, [Persuasion](3.Mechanics/rules/skills.md#Persuasion) +9, [Stealth](3.Mechanics/rules/skills.md#Stealth) +7
- **Damage Resistances** Cold, Fire, Poison, Psychic
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 15
- **Languages** Abyssal, Common, Infernal; Telepathy 60 ft.
- **Challenge** 4

## Traits

***Succubus Form.*** When the incubus finishes a [Long Rest](3.Mechanics/rules/variant-rules/long-rest-xphb.md), it can shape-shift into a [Succubus](3.Mechanics/bestiary/fiend/succubus-xmm.md), using that stat block instead of this one. Any equipment it's wearing or carrying isn't transformed.

## Actions

***Multiattack.*** The incubus makes two Restless Touch attacks.

***Restless Touch.*** *Melee Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, reach 5 ft. *Hit:* `dice:3d6+5|noform|noparens|avg|text(15)` (`3d6 + 5`) Psychic damage, and the target is cursed for 24 hours or until the incubus dies. Until the curse ends, the target gains no benefit from finishing Short Rests.

***Spellcasting.*** The incubus casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 15):

**At will:** [Disguise Self](3.Mechanics/spells/disguise-self-xphb.md), [Etherealness](3.Mechanics/spells/etherealness-xphb.md)

**1/day each:** [Dream](3.Mechanics/spells/dream-xphb.md), [Hypnotic Pattern](3.Mechanics/spells/hypnotic-pattern-xphb.md)

## Bonus Actions

***Nightmare (Recharge 6).*** *Wisdom Saving Throw:* DC 15, one creature the incubus can see within 60 feet. *Failure:* If the target has 20 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) or fewer, it has the [Unconscious](3.Mechanics/rules/conditions.md#Unconscious) condition for 1 hour, until it takes damage, or until a creature within 5 feet of it takes an action to wake it. Otherwise, the target takes `dice:4d8|noform|noparens|avg|text(18)` (`4d8`) Psychic damage.
```
^statblock

## Environment

planar, lower, urban