UML Class Diagram: Inheritance (Is-A) and Aggregation (Has-A) Relationships
### **1. Multiplicity:&#x20;**`1`**&#x20;and&#x20;**`0..1`

- **1 (Employee):** Each project in this relationship is associated with one Employee.
- **0..1 (Project):** An Employee can have zero or one Project assigned.

### **2. Diamond (◇) — Has-A Relationship**

- Represents **aggregation**, a type of has-a relationship.
- An Employee **has a** Project.
- The hollow diamond is placed next to the **Employee** class.
- The Project can exist independently of the Employee.

### **3. Open Triangle (△) — Is-A Relationship**

- Represents **inheritance (generalization)**.
- A Developer **is an** Employee.
- The hollow triangle always points toward the **parent class (Employee)**.
- Developer inherits Employee's attributes and methods.

**Key distinction:** The diamond represents a *has-a* relationship (aggregation), while the open triangle represents an *is-a* relationship (inheritance).