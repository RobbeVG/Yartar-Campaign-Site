---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
title: "Clay Golem"
aliases:
- "Clay Golem"
---
# Clay Golem
*Source: Monster Manual (2024) p. 72. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Clay%20Golem.webp#right)

## Clay Golem

*Guardian of Home and Heart*

- **Habitat.** Urban  
- **Treasure.** [Relics](3.Mechanics/tables/random-magic-items-relics.md)  

Clay golems are magical defenders made from earth and clay to protect places or communities. The materials used in creating clay golems originate from near the location the golems protect and often have special significance to their creators, such as clay from a holy site or bricks from a magical ruin. While some clay golems are masterfully sculpted to resemble living beings, others have only vaguely humanlike forms.

These golems obey their creators' orders and protect what their makers value most. Some still follow these orders long after their creators' deaths. Roll on or choose a result from the Clay Golem Orders table to inspire the commands a clay golem follows.

**Clay Golem Orders**

`dice: [](clay-golem-xmm.md#^clay-golem-orders)`

| dice: 1d4 | The Clay Golem Follows Orders To... |
|-----------|-------------------------------------|
| 1 | Block the path of anyone who enters a site with a weapon drawn. |
| 2 | Defend any member of their creator's family or community who is threatened in its sight. |
| 3 | Prevent any Fiend from crossing a bridge. |
| 4 | Remove any who enter its creator's workshop. |
^clay-golem-orders

```ad-statblock
title: Clay Golem
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Clay%20Golem.webp#token)
*Large construct, Unaligned*

- **Armor Class** 14 
- **Hit Points** 123 (`13d10 + 52`) 
- **Speed** 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)| 9 (-1)|18 (+4)| 3 (-4)| 8 (-1)| 1 (-5)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 ft., passive Perception 9
- **Damage Resistances** bludgeoning, piercing, slashing
- **Damage Immunities** acid, poison, psychic
- **Condition Immunities** [charmed](3.Mechanics/rules/conditions.md#Charmed), [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [frightened](3.Mechanics/rules/conditions.md#Frightened), [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [petrified](3.Mechanics/rules/conditions.md#Petrified), [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Languages** Common plus one other language
- **Challenge** 9

## Traits

***Acid Absorption.*** Whenever the golem is subjected to Acid damage, it takes no damage and instead regains a number of [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) equal to the Acid damage dealt.

***Berserk.*** Whenever the golem starts its turn [Bloodied](3.Mechanics/rules/conditions.md#Bloodied), roll `dice:1d6|noform|noparens|avg` (`1d6`). On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it continues to be berserk until it is destroyed or it is no longer [Bloodied](3.Mechanics/rules/conditions.md#Bloodied).

***Immutable Form.*** The golem can't shape-shift.

***Magic Resistance.*** The golem has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The golem makes two Slam attacks, or it makes three Slam attacks if it used Hasten this turn.

***Slam.*** *Melee Attack Roll:* `dice:1d20+9|noform|noparens|text(+9)`, reach 5 ft. *Hit:* `dice:1d10+5|noform|noparens|avg|text(10)` (`1d10 + 5`) Bludgeoning damage plus `dice:1d12|noform|noparens|avg|text(6)` (`1d12`) Acid damage, and the target's [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum decreases by an amount equal to the Acid damage taken.

## Bonus Actions

***Hasten (Recharge 5-6).*** The golem takes the [Dash](3.Mechanics/rules/actions.md#Dash) and [Disengage](3.Mechanics/rules/actions.md#Disengage) actions.
```
^statblock

## Environment

urban