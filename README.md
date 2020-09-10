# Determining Cardiac Output on VV ECMO Using O2 Saturation

There are two equations when solved allow us to determine the cardiac output. 

The first one states that the total oxygen content equals the oxygen content from the ECMO plus the oxygen content from venous return. 

The second equation states that the total flow (cardiac output) equals the flow from the ECMO plus the venous return.

The implementation in python is the following: 

```python
from sympy import *
init_printing()

CO, O2Art = symbols('CO O2Art')
FlowECMO, O2ECMO = symbols('FlowECMO O2ECMO')
FlowVenous, O2Venous = symbols('FlowVenous O2Venous')

eq1 = Eq(CO * O2Art, FlowECMO * O2ECMO + FlowVenous * O2Venous)
eq2 = Eq(CO, FlowECMO + FlowVenous)
solution = solve([eq1, eq2], [FlowVenous, CO])

print(eq1)
print(eq2)
print(solution)
```

The output to the program is the following:

```
Eq(CO*O2Art, FlowECMO*O2ECMO + FlowVenous*O2Venous)
Eq(CO, FlowECMO + FlowVenous)

CO: FlowECMO*(O2ECMO - O2Venous)/(O2Art - O2Venous)
FlowVenous: -FlowECMO*(O2Art - O2ECMO)/(O2Art - O2Venous)

```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/coecmo)