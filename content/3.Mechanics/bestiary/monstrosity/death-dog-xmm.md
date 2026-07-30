---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
title: "Death Dog"
aliases:
- "Death Dog"
---
# Death Dog
*Source: Monster Manual (2024) p. 91. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Death%20Dog.webp#right)

## Death Dog

*Two-Headed Spreader of Disease*

- **Habitat.** Desert  
- **Treasure.** None  

Death dogs are plagues on the arid lands they inhabit. These vicious, two-headed canines ambush creatures they perceive as weaker than themselves, favoring the wounded or infirm. They attack recklessly, infecting as many creatures as possible with their diseased jaws. If driven off, death dogs linger close to their victims, letting infection weaken their prey before they attack again.

Legends tie death dogs to malicious death gods, the underworld, and cursed rulers. These stories are based on the malady death dogs spread. Roll on or choose a result from the Death Dog Malady Symptoms table to inspire symptoms spread by a death dog's bite. These symptoms are cosmetic and don't alter the effects of the death dog's Bite action. The symptoms vanish when a creature no longer has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition from a death dog's Bite.

> [!quote] A quote from Tablet Fragment  
> 
> And his sorrows will stalk your land like hungry dogs until the seas turn to sand and the sun burns to cinders.

**Death Dog Malady Symptoms**

`dice: [](death-dog-xmm.md#^death-dog-malady-symptoms)`

| dice: 1d6 | The Death Dog's Malady Causes... |
|-----------|----------------------------------|
| 1 | Marks from canine jaws to appear on the victim's body, as if they were still being mauled. |
| 2 | The victim's body to wither, as if constantly exposed to desert heat. |
| 3 | The victim to be distracted by distant howling or vague whispers only they can hear. |
| 4 | The victim's flesh to rot like a corpse. |
| 5 | The victim to itch, as if they had fleas or sand beneath their skin. |
| 6 | Wicked symbols to gradually appear on and spread across the victim's body. |
^death-dog-malady-symptoms

```ad-statblock
title: Death Dog
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Death%20Dog.webp#token)
*Medium monstrosity, Neutral Evil*

- **Armor Class** 12 
- **Hit Points** 39 (`6d8 + 12`) 
- **Speed** 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|14 (+2)| 3 (-4)|13 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +5, [Stealth](3.Mechanics/rules/skills.md#Stealth) +4
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 ft., passive Perception 15
- **Condition Immunities** [blinded](3.Mechanics/rules/conditions.md#Blinded), [charmed](3.Mechanics/rules/conditions.md#Charmed), [deafened](3.Mechanics/rules/conditions.md#Deafened), [frightened](3.Mechanics/rules/conditions.md#Frightened), [stunned](3.Mechanics/rules/conditions.md#Stunned), [unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Languages** —
- **Challenge** 1

## Actions

***Multiattack.*** The death dog makes two Bite attacks.

***Bite.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* `dice:1d4+2|noform|noparens|avg|text(4)` (`1d4 + 2`) Piercing damage. If the target is a creature, it is subjected to the following effect. *Constitution Saving Throw:* DC 12. *1St Failure:* The target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition. While [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), the target's [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum doesn't return to normal when finishing a [Long Rest](3.Mechanics/rules/variant-rules/long-rest-xphb.md), and it repeats the save every 24 hours that elapse, ending the effect on itself on a success. Subsequent Failures: The [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) target's [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum decreases by `dice:1d10|noform|noparens|avg|text(5)` (`1d10`).
```
^statblock

## Environment

desert