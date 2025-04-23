# Control Flow

Control flow refers to the order in which a program executes statements. Rust provides several control flow constructs that allow you to make decisions, repeat code, and handle different conditions. In this section, we'll explore if expressions, loops, and pattern matching with match.

## If Expressions

The `if` expression allows you to branch your code based on conditions. If the condition is true, a block of code is executed; if it's false, that block is skipped and an optional `else` block might be executed instead.

```rust
fn main() {
    let number = 7;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}
```

The condition in an `if` expression must be a boolean. Unlike some languages, Rust will not automatically convert non-boolean types to a boolean:

```rust
fn main() {
    let number = 3;

    // This would cause an error
    // if number {
    //    println!("number was non-zero");
    // }

    // The correct way
    if number != 0 {
        println!("number was non-zero");
    }
}
```

You can use multiple conditions with `else if`:

```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

### Using If in a Let Statement

Since `if` is an expression, we can use it on the right side of a `let` statement:

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {}", number);
}
```

Remember that both arms of an `if` used in a `let` statement must return the same type:

```rust
fn main() {
    let condition = true;

    // This would cause a compile error
    // let number = if condition { 5 } else { "six" };
}
```

## Loops

Rust provides three kinds of loops: `loop`, `while`, and `for`.

### The Loop Expression

The `loop` keyword creates an infinite loop:

```rust
fn main() {
    loop {
        println!("again!");

        // This loop would run forever without a break
        break;
    }
}
```

We can use the `break` keyword to exit a loop and the `continue` keyword to skip the rest of the current iteration and start the next one.

#### Returning Values from Loops

One useful feature of loops is that they can return values. To do this, add the value you want to return after the `break` expression:

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);  // Prints 20
}
```

#### Loop Labels

If you have nested loops, `break` and `continue` apply to the innermost loop. You can use loop labels to specify which loop a `break` or `continue` statement applies to:

```rust
fn main() {
    'outer: loop {
        println!("Entered the outer loop");

        loop {
            println!("Entered the inner loop");

            // This breaks the outer loop
            break 'outer;
        }

        // This point is never reached
        println!("This will never be printed");
    }

    println!("Exited the outer loop");
}
```

### While Loops

A `while` loop performs a block of code as long as a condition remains true:

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

This loop will print:
```
3!
2!
1!
LIFTOFF!!!
```

While loops are clear when a condition is needed for the loop, but they can be slower than other loops because the compiler adds runtime code to check the condition on every iteration.

### For Loops

The `for` loop is used to iterate over elements of a collection:

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {}", element);
    }
}
```

This is the safest and most concise loop for iterating through a collection. You don't need to worry about going beyond array boundaries or missing elements.

If you need to run code a specific number of times, you can use a range with a for loop:

```rust
fn main() {
    // Range 1..4 means 1, 2, 3 (excludes 4)
    for number in 1..4 {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}
```

To include the upper bound, use the inclusive range syntax:

```rust
for number in 1..=3 {
    println!("{}!", number);
}
```

For loops can also iterate in reverse using the `rev` method:

```rust
fn main() {
    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}
```

This will print:
```
3!
2!
1!
LIFTOFF!!!
```

## The Match Control Flow Operator

Rust has an extremely powerful control flow operator called `match` that allows you to compare a value against a series of patterns and then execute code based on which pattern matches. Think of it as an advanced version of a switch statement from other languages.

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}

fn main() {
    let coin = Coin::Dime;
    println!("A {:?} is worth {} cents", coin, value_in_cents(coin));
}
```

`match` is exhaustive, meaning you must include all possible patterns. If you miss one, the compiler will let you know.

### Pattern Binding

You can bind values to names in match patterns:

```rust
#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
    // ... other states
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        }
    }
}

fn main() {
    let coin = Coin::Quarter(UsState::Alaska);
    println!("Value: {}", value_in_cents(coin));
}
```

### Matching with Option<T>

`match` is particularly useful with the `Option<T>` enum:

```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

fn main() {
    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);

    println!("five: {:?}, six: {:?}, none: {:?}", five, six, none);
}
```

### Catch-all Patterns and the _ Placeholder

If we want to take a special action for a few patterns but a default action for all others:

```rust
let dice_roll = 9;
match dice_roll {
    3 => add_fancy_hat(),
    7 => remove_fancy_hat(),
    _ => reroll(),  // The _ is a catch-all pattern
}
```

We can also use the `_` placeholder when we don't care about the value:

```rust
match dice_roll {
    3 => add_fancy_hat(),
    7 => remove_fancy_hat(),
    _ => (), // Do nothing for all other values
}
```

## If Let Syntax

The `if let` syntax is a shorter way to handle values that match one pattern while ignoring the rest:

```rust
let some_value = Some(3);

// Using match
match some_value {
    Some(3) => println!("three!"),
    _ => (),
}

// Equivalent using if let
if let Some(3) = some_value {
    println!("three!");
}
```

`if let` takes a pattern and an expression separated by an equals sign. It works the same way as a `match` where the expression is compared to the pattern.

You can include an `else` with an `if let`:

```rust
let mut count = 0;
if let Coin::Quarter(state) = coin {
    println!("State quarter from {:?}!", state);
} else {
    count += 1;
}
```

## Control Flow Summary

Rust's control flow constructs are powerful and expressive:

- **if expressions** let you branch based on conditions
- **loops** let you repeat code with `loop`, `while`, and `for`
- **match expressions** let you compare a value against patterns
- **if let** provides a concise way to handle one pattern matching case

These constructs are essential for writing Rust programs that can handle different conditions and process data in a variety of ways. As you become more comfortable with Rust, you'll find yourself combining these constructs in increasingly sophisticated ways.
