---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
title: "Oculorb"
aliases:
- "Oculorb"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
- [prone](3.Mechanics/rules/conditions.md#Prone)
---
# Oculorb
*Source: Phandelver and Below: The Shattered Obelisk p. 214*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Oculorb.webp#right)

Many oculorbs are dreamed into existence by beholders. The Far Realm's strange power can pervade a beholder's dreams, resulting in the birth of an oculorb.

Oculorbs resemble a slimy conglomeration of eyes in many sizes and shapes. They are dreaded even by the beholders that birth them. An oculorb is a tangle of negative emotions—the fury, melancholy, and obsession of its creator, all given gruesome, corporeal form. Like a beholder, an oculorb can fire beams of energy from its eyes, but an oculorb's eyes lack the more sophisticated magical nature of a beholder's eyestalks. Instead, an oculorb unleashes powerful waves of energy charged with negative emotions, cowing its foes with despair and ire.
```ad-statblock
title: Oculorb
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Oculorb.webp#token)
*Large Aberration, Typically  Chaotic Evil*

- **Armor Class** 13 (natural armor)
- **Hit Points** 127 (15d10 + 45) 
- **Speed** 0 ft., fly 60 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 13 | +1 | +1 |
|Int| 14 | +2 | **+6** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 10 | +0 | +0 |
|Wis| 15 | +2 | **+6** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 17 | +3 | +3 |
|Cha| 19 | +4 | **+8** |


- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +6, Wisdom +6, Charisma +8
- **Skills** [Investigation](3.Mechanics/rules/skills.md#Investigation) +6, [Perception](3.Mechanics/rules/skills.md#Perception) +10
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded), [Prone](3.Mechanics/rules/conditions.md#Prone)
- **Senses** [Truesight](3.Mechanics/rules/senses.md#Truesight) 60 Ft., Passive Perception 20
- **Languages** Deep Speech, Telepathy 120 ft.
- **Challenge** 9

## Traits

***Magic Resistance.*** The oculorb has advantage on saving throws against spells and other magical effects.

***Watchful Eyes.*** The oculorb has advantage on initiative rolls and can't be surprised.

## Actions

***Multiattack.*** The oculorb makes two Dreadful Contact attacks or four Eye Beam attacks.

***Dreadful Contact.*** *Melee Weapon Attack:* `dice:1d20+5|noform|noparens|text(+5)` to hit, reach 5 ft., one creature. *Hit:* `dice:3d6+4|noform|noparens|avg|text(14)` (`3d6 + 4`) psychic damage, or `dice:6d6+4|noform|noparens|avg|text(25)` (`6d6 + 4`) psychic damage if the target has the [frightened](3.Mechanics/rules/conditions.md#Frightened) condition.

***Eye Beam.*** *Ranged Spell Attack:* `dice:1d20+8|noform|noparens|text(+8)` to hit, range 120 ft., one creature. *Hit:* `dice:3d6+4|noform|noparens|avg|text(14)` (`3d6 + 4`) psychic damage.

***Antipathic Flood (Recharge 5-6).*** The oculorb releases a wave of negative emotions, choosing one of the following options:

***Weeping Eyes.*** The oculorb weeps, releasing a wave of crushing despair. Each creature within 30 feet of the oculorb must make a DC 16 Constitution saving throw. On a failed save, a creature's speed is reduced to 0 feet until the end of the oculorb's next turn, and if the creature was [concentrating](3.Mechanics/rules/conditions.md#Concentration), its [concentration](3.Mechanics/rules/conditions.md#Concentration) is broken.

***Withering Glare.*** The oculorb's eyes unleash furious scarlet energy in a 60-foot cone. Each creature in that area must make a DC 16 Wisdom saving throw. On a failed save, a creature takes `dice:6d10|noform|noparens|avg|text(33)` (`6d10`) necrotic damage and has the [frightened](3.Mechanics/rules/conditions.md#Frightened) condition for 1 minute. On a successful save, a creature takes half as much damage and isn't [frightened](3.Mechanics/rules/conditions.md#Frightened). A [frightened](3.Mechanics/rules/conditions.md#Frightened) creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.

## Reactions

***Obsessive Rebuke.*** When the oculorb is damaged by a creature it can see within 60 feet of itself, it forces the creature to make a DC 16 Wisdom saving throw. The creature takes `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) psychic damage on a failed save, or half as much damage on a successful one.
```
^statblock