---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/metallic
title: "Ancient Bronze Dragon"
aliases:
- "Ancient Bronze Dragon"
---
# Ancient Bronze Dragon
*Source: Monster Manual (2024) p. 60. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![An ancient bronze dragon uses its repulsion breath to protect a community from rampaging Water elementals](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Ancient%20Bronze%20Dragon.webp#right)

Ancient bronze dragons develop dramatic patinas on their glimmering scales. These dragons strive to protect whole regions, continents, or planets from threats. They seek solutions to planes-spanning calamities or multiversal perils and oppose the evil of mighty chromatic dragons.

## Bronze Dragons

*Dragons of Potential and Preservation*

- **Habitat.** Coastal  
- **Treasure.** [Implements](3.Mechanics/tables/random-magic-items-implements.md)  

Where bronze dragons dwell, wonders flourish. Imaginative yet mindful, these metallic dragons work toward greatness and help others achieve all they can. They strive to preserve innovations, from the works of past civilizations to new discoveries, and they share such works widely. When dealing with shorter-lived beings, bronze dragons prefer to win them over through conversation and cultivation, but they don't shy from battle when villains keep others from achieving their potential.

Bronze dragons enjoy the power and endless possibilities of the sea, and they often make their lairs in places of natural beauty or communities they wish to preserve. Within their dwellings, bronze dragons hoard things they believe will be useful one day. They salvage treasure lost to the sea, reclaiming wealth or sunken ships.

### Bronze Dragon Lairs

Bronze dragons usually make their homes near or under the sea.

## Statblock

```ad-statblock
title: Ancient Bronze Dragon
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Ancient%20Bronze%20Dragon.webp#token)
*Gargantuan dragon (metallic), Lawful Good*

- **Armor Class** 22 
- **Hit Points** 444 (`24d20 + 192`) 
- **Speed** 40 ft., fly 80 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|29 (+9)|10 (+0)|27 (+8)|18 (+4)|17 (+3)|25 (+7)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +7, Wisdom +10
- **Skills** [Insight](3.Mechanics/rules/skills.md#Insight) +10, [Perception](3.Mechanics/rules/skills.md#Perception) +17, [Stealth](3.Mechanics/rules/skills.md#Stealth) +7
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 ft., [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 ft., passive Perception 27
- **Damage Immunities** lightning
- **Languages** Common, Draconic
- **Challenge** 22

## Traits

***Amphibious.*** The dragon can breathe air and water.

***Legendary Resistance (4/Day, or 5/Day in Lair).*** If the dragon fails a saving throw, it can choose to succeed instead.

## Actions

***Multiattack.*** The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast [Guiding Bolt](3.Mechanics/spells/guiding-bolt-xphb.md) (level 2 version).

***Rend.*** *Melee Attack Roll:* `dice:1d20+16|noform|noparens|text(+16)`, reach 15 ft. *Hit:* `dice:2d8+9|noform|noparens|avg|text(18)` (`2d8 + 9`) Slashing damage plus `dice:2d8|noform|noparens|avg|text(9)` (`2d8`) Lightning damage.

***Lightning Breath (Recharge 5-6).*** *Dexterity Saving Throw:* DC 23, each creature in a 120-foot-long, 10-foot-wide [Line](3.Mechanics/rules/variant-rules/line-area-of-effect-xphb.md). *Failure:* `dice:15d10|noform|noparens|avg|text(82)` (`15d10`) Lightning damage. *Success:* Half damage.

***Repulsion Breath.*** *Strength Saving Throw:* DC 23, each creature in a 30-foot [Cone](3.Mechanics/rules/variant-rules/cone-area-of-effect-xphb.md). *Failure:* The target is pushed up to 60 feet straight away from the dragon and has the [Prone](3.Mechanics/rules/conditions.md#Prone) condition.

***Spellcasting.*** The dragon casts one of the following spells, requiring no Material components and using Charisma as the spellcasting ability (spell save DC 22, `dice:1d20+14|noform|noparens|text(+14)` to hit with spell attacks):

**At will:** [Detect Magic](3.Mechanics/spells/detect-magic-xphb.md), [Guiding Bolt](3.Mechanics/spells/guiding-bolt-xphb.md) (level 2 version), [Shapechange](3.Mechanics/spells/shapechange-xphb.md) (Beast or Humanoid form only, no [Temporary Hit Points](3.Mechanics/rules/variant-rules/temporary-hit-points-xphb.md) gained from the spell, and no [Concentration](3.Mechanics/rules/conditions.md#Concentration) or [Temporary Hit Points](3.Mechanics/rules/variant-rules/temporary-hit-points-xphb.md) required to maintain the spell), [Speak with Animals](3.Mechanics/spells/speak-with-animals-xphb.md), [Thaumaturgy](3.Mechanics/spells/thaumaturgy-xphb.md)

**1/day each:** [Detect Thoughts](3.Mechanics/spells/detect-thoughts-xphb.md), [Control Water](3.Mechanics/spells/control-water-xphb.md), [Scrying](3.Mechanics/spells/scrying-xphb.md), [Water Breathing](3.Mechanics/spells/water-breathing-xphb.md)

## Legendary Actions

Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.

***Guiding Light.*** The dragon uses Spellcasting to cast [Guiding Bolt](3.Mechanics/spells/guiding-bolt-xphb.md) (level 2 version).

***Pounce.*** The dragon moves up to half its [Speed](3.Mechanics/rules/variant-rules/speed-xphb.md), and it makes one Rend attack.

***Thunderclap.*** *Constitution Saving Throw:* DC 22, each creature in a 20-foot-radius [Sphere](3.Mechanics/rules/variant-rules/sphere-area-of-effect-xphb.md) centered on a point the dragon can see within 120 feet. *Failure:* `dice:3d8|noform|noparens|avg|text(13)` (`3d8`) Thunder damage, and the target has the [Deafened](3.Mechanics/rules/conditions.md#Deafened) condition until the end of its next turn.

## Regional Effects

The region containing an adult or ancient bronze dragon's lair is changed by its presence, creating the following effects:

- **Buoying Currents.** Creatures within 1 mile of the lair that lack a [Swim Speed](3.Mechanics/rules/variant-rules/swim-speed-xphb.md) ignore the extra cost of movement while swimming.  
- **Sun and Storms.** While in its lair, the dragon can cast [Control Weather](3.Mechanics/spells/control-weather-xphb.md), requiring no Material components and using the same spellcasting ability as its Spellcasting action. When casting the spell this way, the dragon can control the weather within 1 mile of its lair, regardless if the dragon is inside or outside.  

If the dragon dies or moves its lair elsewhere, these effects end immediately.
```
^statblock

## Environment

coastal