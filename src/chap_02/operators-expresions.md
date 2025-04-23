# Operators and Expressions

Rust provides a variety of operators that allow you to perform operations on values. In this section, we'll explore the most common operators in Rust and how they're used in expressions.

## Arithmetic Operators

Rust supports standard arithmetic operators for numeric types:

```rust
fn main() {
    // Addition
    let sum = 5 + 10;

    // Subtraction
    let difference = 95.5 - 4.3;

    // Multiplication
    let product = 4 * 30;

    // Division
    let quotient = 56.7 / 32.2;
    let truncated = -5 / 3; // Results in -1

    // Remainder
    let remainder = 43 % 5;

    println!("Sum: {}", sum);
    println!("Difference: {}", difference);
    println!("Product: {}", product);
    println!("Quotient: {}", quotient);
    println!("Truncated: {}", truncated);
    println!("Remainder: {}", remainder);
}
```

A few important notes about arithmetic in Rust:

- Integer division truncates toward zero
- The remainder operator `%` works with integer types only
- If you perform an operation that would cause integer overflow in debug mode, your program will panic (crash)
- In release mode, overflow wraps around (e.g., u8 value 255 + 1 becomes 0)

## Comparison Operators

Comparison operators compare two values and return a boolean:

```rust
fn main() {
    let is_equal = 5 == 5;
    let is_not_equal = 5 != 10;
    let is_greater = 10 > 5;
    let is_less = 5 < 10;
    let is_greater_or_equal = 10 >= 10;
    let is_less_or_equal = 5 <= 5;

    println!("Equal: {}", is_equal);
    println!("Not Equal: {}", is_not_equal);
    println!("Greater: {}", is_greater);
    println!("Less: {}", is_less);
    println!("Greater or Equal: {}", is_greater_or_equal);
    println!("Less or Equal: {}", is_less_or_equal);
}
```

Comparison operators are most commonly used in conditionals (`if` statements, `while` loops, etc.).

## Logical Operators

Logical operators work with boolean values:

```rust
fn main() {
    let is_true = true;
    let is_false = false;

    // Logical AND
    let logical_and = is_true && is_false;

    // Logical OR
    let logical_or = is_true || is_false;

    // Logical NOT
    let logical_not = !is_true;

    println!("AND: {}", logical_and);
    println!("OR: {}", logical_or);
    println!("NOT: {}", logical_not);
}
```

Logical operators are short-circuiting:
- `&&` will only evaluate the right side if the left side is `true`
- `||` will only evaluate the right side if the left side is `false`

## Bitwise Operators

Rust provides operators for bitwise manipulation:

```rust
fn main() {
    let a: u8 = 0b1010; // Binary representation of 10
    let b: u8 = 0b1100; // Binary representation of 12

    // Bitwise AND
    let bitwise_and = a & b;  // 0b1000 (8 in decimal)

    // Bitwise OR
    let bitwise_or = a | b;   // 0b1110 (14 in decimal)

    // Bitwise XOR
    let bitwise_xor = a ^ b;  // 0b0110 (6 in decimal)

    // Bitwise NOT (inverts all bits)
    let bitwise_not = !a;     // 0b11110101 (245 in decimal for a u8)

    // Left shift
    let left_shift = a << 1;  // 0b10100 (20 in decimal)

    // Right shift
    let right_shift = a >> 1; // 0b0101 (5 in decimal)

    println!("AND: {:08b} ({})", bitwise_and, bitwise_and);
    println!("OR: {:08b} ({})", bitwise_or, bitwise_or);
    println!("XOR: {:08b} ({})", bitwise_xor, bitwise_xor);
    println!("NOT: {:08b} ({})", bitwise_not, bitwise_not);
    println!("Left Shift: {:08b} ({})", left_shift, left_shift);
    println!("Right Shift: {:08b} ({})", right_shift, right_shift);
}
```

Bitwise operators are useful for low-level programming, working with hardware, and implementing certain algorithms efficiently.

## Assignment Operators

The simplest assignment operator is `=`, which assigns a value to a variable:

```rust
let x = 5;
```

Rust also has compound assignment operators that combine operation and assignment:

```rust
fn main() {
    let mut x = 5;

    // Addition and assignment
    x += 1;  // Equivalent to x = x + 1
    println!("After +=: {}", x);

    // Subtraction and assignment
    x -= 2;  // Equivalent to x = x - 2
    println!("After -=: {}", x);

    // Multiplication and assignment
    x *= 3;  // Equivalent to x = x * 3
    println!("After *=: {}", x);

    // Division and assignment
    x /= 2;  // Equivalent to x = x / 2
    println!("After /=: {}", x);

    // Remainder and assignment
    x %= 3;  // Equivalent to x = x % 3
    println!("After %=: {}", x);

    // Bitwise operations also have compound assignment versions
    x &= 2;  // Equivalent to x = x & 2
    println!("After &=: {}", x);
}
```

Remember that the variable must be mutable (`mut`) to use compound assignment operators.

## Range Operators

Rust provides range operators for creating iterators over a range of values:

```rust
fn main() {
    // Exclusive range (does not include the upper bound)
    for i in 1..5 {
        print!("{} ", i);  // Prints "1 2 3 4 "
    }
    println!();

    // Inclusive range (includes the upper bound)
    for i in 1..=5 {
        print!("{} ", i);  // Prints "1 2 3 4 5 "
    }
    println!();

    // Ranges can be used with chars too
    for c in 'a'..='e' {
        print!("{} ", c);  // Prints "a b c d e "
    }
    println!();

    // Creating a range without iterating it
    let _range = 1..5;  // Can be used elsewhere, like in slice operations
}
```

Range operators are commonly used in `for` loops and slice operations.

## The Dereference and Borrow Operators

Rust has operators for working with references and pointers:

```rust
fn main() {
    let x = 5;

    // The borrow operator (&) creates a reference
    let y = &x;

    // The dereference operator (*) accesses the value a reference points to
    println!("x: {}, y: {}, *y: {}", x, y, *y);

    // Mutable borrowing
    let mut z = 10;
    let z_ref = &mut z;
    *z_ref += 5;

    println!("z after modification: {}", z);
}
```

We'll cover references and borrowing in much more detail in the next chapter.

## Type Casting Operator

The `as` keyword is used for type casting in Rust:

```rust
fn main() {
    let a = 15;       // i32 by default
    let b = a as u8;  // Cast to u8
    let c = a as f32; // Cast to f32

    println!("a: {} ({})", a, type_of(&a));
    println!("b: {} ({})", b, type_of(&b));
    println!("c: {} ({})", c, type_of(&c));

    // Casting char to u8 gives its ASCII/Unicode code point
    let d = 'A' as u8;
    println!("ASCII value of 'A': {}", d);

    // And vice versa
    let e = 66 as char;
    println!("Character with code point 66: {}", e);
}

// Helper function to get the type of a variable for demonstration
fn type_of<T>(_: &T) -> String {
    std::any::type_name::<T>().to_string()
}
```

Type casting in Rust is explicit. The compiler will not automatically cast types for you in most cases, helping prevent subtle bugs.

## Operator Precedence

Operators in Rust have different precedence levels, which determine the order of evaluation when multiple operators appear in an expression:

```rust
fn main() {
    // Multiplication has higher precedence than addition
    let result = 5 + 3 * 2;  // 3 * 2 is evaluated first, so result is 11
    println!("5 + 3 * 2 = {}", result);

    // Parentheses can be used to override precedence
    let result = (5 + 3) * 2;  // 5 + 3 is evaluated first, so result is 16
    println!("(5 + 3) * 2 = {}", result);
}
```

Here's a simplified precedence table (from highest to lowest):

1. Method calls (`.`)
2. Field access (`expr.field`)
3. Function calls, array indexing (`foo()`, `arr[0]`)
4. Unary operators (`!`, `-`, `*` dereference, `&` borrow)
5. Type cast (`as`)
6. Multiplication, division, remainder (`*`, `/`, `%`)
7. Addition, subtraction (`+`, `-`)
8. Shift (`<<`, `>>`)
9. Bitwise AND (`&`)
10. Bitwise XOR (`^`)
11. Bitwise OR (`|`)
12. Comparisons (`==`, `!=`, `<`, `>`, `<=`, `>=`)
13. Logical AND (`&&`)
14. Logical OR (`||`)
15. Range (`..`, `..=`)
16. Assignment (`=`, `+=`, etc.)

When in doubt, use parentheses to make your intentions clear.

## Expressions and Statements

As we mentioned in the Functions section, Rust is an expression-based language. Most constructs in Rust are expressions that evaluate to a value.

Even control flow constructs like `if` and `match` are expressions:

```rust
fn main() {
    let condition = true;

    // if as an expression
    let number = if condition { 5 } else { 6 };
    println!("The value of number is: {}", number);

    // match as an expression
    let x = 1;
    let message = match x {
        0 => "zero",
        1 => "one",
        2 => "two",
        _ => "many",
    };
    println!("The message is: {}", message);

    // Block expressions
    let y = {
        let inner = 2;
        inner * inner + 1  // Note: no semicolon means this is the return value
    };
    println!("The value of y is: {}", y);
}
```

Understanding that nearly everything in Rust is an expression helps write more concise and expressive code.

## Conclusion

Operators and expressions are fundamental building blocks of Rust programming. They allow you to manipulate values in a variety of ways and combine simple expressions into complex ones. Rust's expression-oriented nature and explicit type handling make the language both powerful and predictable, helping prevent common programming errors.

As you continue with Rust, you'll discover more advanced ways to combine operators and expressions to solve complex problems efficiently.
