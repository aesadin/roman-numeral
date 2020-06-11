## Specifications

**Behavior:** Adds the values of all symbols
* input: llXVL
* output: 66  

**Behavior:** A symbol is not repeated more than three times.      
* input: 90 !== LXXXX
* output: XC

**Behavior:**  If a symbol is repeated, its value is added as many times as it occurs. For example, II=2, XX=20 etc.
The symbols V, L and D are never repeated.
* input: II
* output: 2

**Behavior:** If a smaller symbol is written to the right of a symbol with greater value, then its value gets added to the value of the greater symbol. For example, VI=5+1=6, XI=11 and so on.
* input: 6 === (5+1)
* output: VI

**Behavior:**If a smaller symbol is written on the left of a symbol with greater value, then its value is subtracted from the value of the greater symbol. IV= 5-1=4, IX=9 etc. 
* input: 4 === (5-1)
* output: IV

**Behavior:** The symbols V, L and D are never written to the left of a symbol of greater value i.e. V, L and D are never subtracted. 
* input: 5, 50, 500
* output: V, L, D

**Behavior:** A symbol cannot be subtracted more than once from a particular symbol of greater value. In other words, we cannot repeat a symbol on the left side of a symbol. Eg, 98 is written as XCVIII and not as IIC.
* input: 98 (!== IIC)
* output: XCVIII

**Behavior:** 4000
* input: 4001
* output: "Slow down brother!"

**Behavior:** Does not take Non-alphanumeric inputs
* input:
* output:

1→ I             10→X             C→100

2→ II           20→XX         D→500

3→ III         30→XXX      M→1000

4→ IV         40→XL

5→ V           50→L

6→VI          60→LX

7→VII         70→LXX

8→VIII       80→LXXX

9→IX          90→XC

Roman numbers follow certain rules, which helps determine how the number is written. It will also help us in reading or recognizing roman numbers. Let us take a look.

If a symbol is repeated, its value is added as many times as it occurs. For example, II=2, XX=20 etc.
The symbols V, L and D are never repeated.

A symbol is not repeated more than three times.

If a smaller symbol is written to the right of a symbol with greater value, then its value gets added to the value of the greater symbol. For example, VI=5+1=6, XI=11 and so on.

If a smaller symbol is written on the left of a symbol with greater value, then its value is subtracted from the value of the greater symbol. IV= 5-1=4, IX=9 etc.

The symbols V, L and D are never written to the left of a symbol of greater value i.e. V, L and D are never subtracted. The symbol I can be subtracted from V and X only. The symbol X can be subtracted from L, M, and C only.
A symbol cannot be subtracted more than once from a particular symbol of greater value. In other words, we cannot repeat a symbol on the left side of a symbol. Eg, 98 is written as XCVIII and not as IIC.




