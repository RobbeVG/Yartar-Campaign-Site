---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/chromatic
title: "Ancient Black Dragon"
aliases:
- "Ancient Black Dragon"
---
# Ancient Black Dragon
*Source: Monster Manual (2024) p. 40. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![As terrifying as it is titanic, an ancient black dragon eradicates unwanted life in its despoiled territory](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Ancient%20Black%20Dragon.webp#right)

Ancient black dragons plot the ruin of whole realms. They seek magic to corrupt the land, raise undead hordes, bind fiends, and replicate magical disasters. Ancient black dragons strive to create vast, dead domains where they are the greatest things that remain.

## Black Dragons

*Dragons of Decay and Despair*

- **Habitat.** Swamp  
- **Treasure.** [Relics](3.Mechanics/tables/random-magic-items-relics.md)  

Black dragons delight in suffering and ruin. While other chromatic dragons scheme for power and wealth, these dragons seek to tear down all they see and rule over what remains.

Black dragons are terrifying creatures with curved horns and withered visages suggestive of fiendish skulls. They typically inhabit stagnant swamps, crumbling ruins, or places of magical or environmental corruption. Their acid breath scars their domains, eroding the features from ancient statues and leaving nature with festering wounds.

Black dragons hoard tarnished symbols of hope and relics of fallen empires. The more sought-after the treasure, the more black dragons prize it—particularly if they were responsible for it being lost.

### Black Dragon Lairs

Black dragons lurk in dismal ruins, polluted bogs, or other sites gripped by decay.

```ad-statblock
title: Ancient Black Dragon
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Ancient%20Black%20Dragon.webp#token)
*Gargantuan Dragon (chromatic), Chaotic Evil*

- **Armor Class** 22 
- **Hit Points** 367 (21d20 + 147) 
- **Speed** 40 ft., fly 80 ft., swim 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 27 | +8 | +8 |
|Int| 16 | +3 | +3 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | **+9** |
|Wis| 15 | +2 | **+9** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 25 | +7 | +7 |
|Cha| 22 | +6 | +6 |


- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +9, Wisdom +9
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +16, [Stealth](3.Mechanics/rules/skills.md#Stealth) +9
- **Damage Immunities** Acid
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft., [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 26
- **Languages** Common, Draconic
- **Challenge** 21

## Traits

***Amphibious.*** The dragon can breathe air and water.

***Legendary Resistance (4/Day, or 5/Day in Lair).*** If the dragon fails a saving throw, it can choose to succeed instead.

## Actions

***Multiattack.*** The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast [Melf's Acid Arrow](3.Mechanics/spells/melfs-acid-arrow-xphb.md) (level 4 version).

***Rend.*** *Melee Attack Roll:* `dice:1d20+15|noform|noparens|text(+15)`, reach 15 ft. *Hit:* `dice:2d8+8|noform|noparens|avg|text(17)` (`2d8 + 8`) Slashing damage plus `dice:2d8|noform|noparens|avg|text(9)` (`2d8`) Acid damage.

***Acid Breath (Recharge 5-6).*** *Dexterity Saving Throw:* DC 22, each creature in a 90-foot-long, 10-foot-wide [Line](3.Mechanics/rules/variant-rules/line-area-of-effect-xphb.md). *Failure:* `dice:15d8|noform|noparens|avg|text(67)` (`15d8`) Acid damage. *Success:* Half damage.

***Spellcasting.*** The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 21, `dice:1d20+13|noform|noparens|text(+13)` to hit with spell attacks):

**At will:** [Detect Magic](3.Mechanics/spells/detect-magic-xphb.md), [Fear](3.Mechanics/spells/fear-xphb.md), [Melf's Acid Arrow](3.Mechanics/spells/melfs-acid-arrow-xphb.md) (level 4 version)

**1/day each:** [Create Undead](3.Mechanics/spells/create-undead-xphb.md), [Speak with Dead](3.Mechanics/spells/speak-with-dead-xphb.md), [Vitriolic Sphere](3.Mechanics/spells/vitriolic-sphere-xphb.md) (level 5 version)

## Legendary Actions

Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.

***Cloud of Insects.*** *Dexterity Saving Throw:* DC 21, one creature the dragon can see within 120 feet. *Failure:* `dice:6d10|noform|noparens|avg|text(33)` (`6d10`) Poison damage, and the target has [Disadvantage](3.Mechanics/rules/variant-rules/disadvantage-xphb.md) on saving throws to maintain [Concentration](3.Mechanics/rules/conditions.md#Concentration) until the end of its next turn. *Failure or Success:* The dragon can't take this action again until the start of its next turn.

***Frightful Presence.*** The dragon uses Spellcasting to cast [Fear](3.Mechanics/spells/fear-xphb.md). The dragon can't take this action again until the start of its next turn.

***Pounce.*** The dragon moves up to half its [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md), and it makes one Rend attack.

## Regional Effects

The region containing an adult or ancient black dragon's lair is warped by its presence, creating the following effects:

- **Acrid Haze.** Odorous and stifling fog covers the area within 1 mile of the lair, rendering that area [Lightly Obscured](3.Mechanics/rules/variant-rules/lightly-obscured-xphb.md). Travel for creatures other than the dragon and its allies takes twice the usual time in that area.  
- **Foul Water.** Water sources within 1 mile of the lair are supernaturally fouled. A creature that drinks such water must succeed on a DC 15 Constitution saving throw or have the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition for 1 hour.  

If the dragon dies or moves its lair elsewhere, these effects end immediately.
```
^statblock

## Environment

swamp