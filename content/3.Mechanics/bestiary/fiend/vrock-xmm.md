---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
title: "Vrock"
aliases:
- "Vrock"
---
# Vrock
*Source: Monster Manual (2024) p. 319. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Vrock.webp#right)

## Vrock

*Demon of Carnage and Ruin*

- **Habitat.** Planar (Abyss)  
- **Treasure.** [Armaments](3.Mechanics/tables/random-magic-items-armaments.md)  

Screeching, vulturelike demons, vrocks soar from the Abyss to spread ruin and slaughter. Their filthy feathers carry magical toxins from the Lower Planes, creating a noxious cloud capable of killing those who escape the vrocks' vicious beaks and claws. To further terrorize their foes, vrocks unleash an otherworldly screech so terrible it can halt creatures in their tracks.

```ad-statblock
title: Vrock
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Vrock.webp#token)
*Large fiend (demon), Chaotic Evil*

- **Armor Class** 15 
- **Hit Points** 152 (`16d10 + 64`) 
- **Speed** 40 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|15 (+2)|18 (+4)| 8 (-1)|13 (+1)| 8 (-1)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +5, Wisdom +4, Charisma +2
- **Skills** ⏤
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 ft., passive Perception 11
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Languages** Abyssal; telepathy 120 ft.
- **Challenge** 6

## Traits

***Demonic Restoration.*** If the vrock dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) somewhere in the Abyss.

***Magic Resistance.*** The vrock has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The vrock makes two Shred attacks.

***Shred.*** *Melee Attack Roll:* `dice:1d20+6|noform|noparens|text(+6)`, reach 5 ft. *Hit:* `dice:2d6+3|noform|noparens|avg|text(10)` (`2d6 + 3`) Piercing damage plus `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Poison damage.

***Spores (Recharge 6).*** *Constitution Saving Throw:* DC 15, each creature in a 20-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the vrock. *Failure:* The target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. While [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), the target takes `dice:1d10|noform|noparens|avg|text(5)` (`1d10`) Poison damage at the start of each of its turns. Emptying a flask of [Holy Water](3.Mechanics/items/holy-water-xphb.md) on the target ends the effect early.

***Stunning Screech (1/Day).*** *Constitution Saving Throw:* DC 15, each creature in a 20-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the vrock (demons succeed automatically). *Failure:* `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Thunder damage, and the target has the [Stunned](3.Mechanics/rules/conditions.md#Stunned) condition until the end of the vrock's next turn.
```
^statblock

## Environment

planar, abyss