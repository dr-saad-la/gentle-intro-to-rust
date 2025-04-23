# Variables and Mutability

Variables are a fundamental concept in programming, allowing us to store and manipulate data. Rust's approach to variables has some unique characteristics that set it apart from many other languages.

## Variables Are Immutable by Default

In Rust, variables are immutable (unchangeable) by default. This might seem strange if you're coming from languages where you can freely change variable values, but this default immutability is one of Rust's safety features.

Let's see an example:

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {}", x);

    // Uncommenting the next line would cause a compilation error
    // x = 6;
    // println!("The value of x is: {}", x);
}
```

If you try to change the value of `x`, the Rust compiler will produce an error like:

```
error[E0384]: cannot assign twice to immutable variable `x`
```

## Making Variables Mutable

When you need a variable whose value can change, you can make it mutable by adding the `mut` keyword:

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);

    x = 6;  // This works now!
    println!("The value of x is: {}", x);
}
```

This program will compile and run successfully, printing:

```
The value of x is: 5
The value of x is: 6
```

## Constants

Rust also has constants, which are similar to immutable variables but with a few differences:

- Constants are declared with the `const` keyword instead of `let`
- The type of a constant must be annotated
- Constants can be declared in any scope, including the global scope
- Constants can only be set to a constant expression, not the result of a function call or any other value that could only be computed at runtime

```rust
const MAX_POINTS: u32 = 100_000;

fn main() {
    println!("The maximum points is: {}", MAX_POINTS);
}
```

Notice a few things:
- We use ALL_CAPS for constant names by convention
- We can use underscores in numeric literals for readability
- We must specify the type (here `u32`)

## Shadowing

Rust allows a variable to be "shadowed" by declaring a new variable with the same name:

```rust
fn main() {
    let x = 5;

    let x = x + 1;  // Shadows the previous x

    {
        let x = x * 2;  // Shadows x within this scope
        println!("The value of x in the inner scope is: {}", x);  // Prints 12
    }

    println!("The value of x is: {}", x);  // Prints 6
}
```

Shadowing is different from marking a variable as `mut` because:

1. We create a new variable when we use `let` again, which allows us to change the type of the value but reuse the same name
2. Shadowing respects scopes, so the shadowed value only exists within its scope

## Type Transformations with Shadowing

Shadowing lets us change the type of a variable while reusing the same name:

```rust
fn main() {
    let spaces = "   ";  // spaces is a string
    let spaces = spaces.len();  // spaces is now a number

    println!("Space count: {}", spaces);  // Prints 3
}
```

This wouldn't be possible with `mut` because changing a variable's type isn't allowed with mutation:

```rust
fn main() {
    let mut spaces = "   ";
    // spaces = spaces.len();  // This would cause a compilation error
}
```

## Why Immutability Matters

You might wonder why Rust defaults to immutability. There are several benefits:

1. **Security**: Immutable data can't be changed accidentally
2. **Concurrency**: It's easier to reason about code when data doesn't change
3. **Optimization**: The compiler can make optimizations when it knows a value won't change

While writing code that only uses immutable variables might seem restrictive, it often leads to cleaner, more maintainable code. Rust gives you the flexibility to choose mutability when needed but encourages immutability as a default stance.

In the next section, we'll explore Rust's data types.
