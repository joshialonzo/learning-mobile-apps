int age = 30; // integer

double price = 19.99; // decimal

String name = "Joshi"; // string of characters

bool isActive = false; // false

// Operators

// 1. Arithmetic
// Sum, Multiply, Substract, Division

// 2. Comparison
// Equal to (==), Different to (!=), Greater than (>), Less than (<)
// Greater or equal than (>=), Less or equal than (<=)

// 3. Logic
// AND (&&), OR (||), NOT (!)

void main() {
  // Control structures

  // 1. Conditions
  int userAge = 19;
  if (userAge >= 18) {
    print("Granted access");
  } else if (userAge >= 13) {
    print("Unauthorized access");
  } else {
    print("Unauthorized access");
  }

  // 2. Collections: Arrays
  List<String> fruits = ["Apple", "Banana", "Orange"];
  print(fruits[1]);

  // 3. Maps
  Map<String, String> ages = {"Jorge": "30", "Maria": "25", "Pedro": "28"};
  print(ages["Maria"]);

  // 4. Loops: For
  for (int i = 0; i < 3; i++) {
    print("Iteration: ${i + 1}");
  }

  // 5. Loops: While
  while (userAge < 21) {
    print("Age: $userAge");
    userAge++;
  }

  // 6. Functions
  int calculateSum(int a, int b) {
    return a + b;
  }

  print(calculateSum(2, 3));
}
