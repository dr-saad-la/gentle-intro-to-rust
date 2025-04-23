# Data Types

Every value in Rust has a specific data type, which tells the compiler how to work with that data. Rust is a statically typed language, meaning that it must know the types of all variables at compile time. The compiler can usually infer what type we want based on the value and how we use it, but sometimes we need to add explicit type annotations.

Let's explore the various data types in Rust.

## Scalar Types

Scalar types represent a single value. Rust has four primary scalar types:

### Integer Types

Integers are numbers without a fractional component. Rust provides signed and unsigned integers in various sizes:

| Length | Signed | Unsigned |
|--------|--------|----------|
| 8-bit  | i8     | u8       |
| 16-bit | i16    | u16      |
| 32-bit | i32    | u32      |
| 64-bit | i64    | u64      |
| 128-bit| i128   | u128     |
| arch   | isize  | usize    |

* Signed integers can represent both positive and negative numbers
* Unsigned integers can only represent positive numbers (including zero)
* The `isize` and `usize` types depend on the architecture of the computer (64 bits on a 64-bit system)

Integer literals can be written in several forms:

```rust
fn main() {
    let decimal = 98_222;      // Decimal
    let hex = 0xff;            // Hexadecimal
    let octal = 0o77;          // Octal
    let binary = 0b1111_0000;  // Binary
    let byte = b'A';           // Byte (u8 only)

    println!("{}, {}, {}, {}, {}", decimal, hex, octal, binary, byte);
}
```

The default integer type is `i32`, which is generally the fastest even on 64-bit systems.

### Floating-Point Types

Floating-point numbers are numbers with decimal points. Rust has two floating-point types:

* `f32`: 32-bit floating point
* `f64`: 64-bit floating point (default)

```rust
fn main() {
    let x = 2.0;      // f64 by default
    let y: f32 = 3.0; // f32 with explicit type annotation

    println!("x: {}, y: {}", x, y);
}
```

Floating-point numbers are represented according to the IEEE-754 standard.

### Boolean Type

The boolean type has two possible values: `true` and `false`. Booleans are one byte in size.

```rust
fn main() {
    let t = true;
    let f: bool = false; // with explicit type annotation

    println!("t: {}, f: {}", t, f);
}
```

Booleans are commonly used in conditional statements like `if` expressions.

### Character Type

Rust's `char` type represents a Unicode Scalar Value, which means it can represent more than just ASCII. Characters use single quotes, while strings use double quotes.

```rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';

    println!("{}, {}, {}", c, z, heart_eyed_cat);
}
```

Rust's `char` type is four bytes in size, allowing it to represent a wide range of Unicode characters.

## Compound Types

Compound types can group multiple values into one type. Rust has two primitive compound types: tuples and arrays.

### Tuple Type

A tuple is a general way of grouping together a number of values with a variety of types into one compound type. Tuples have a fixed length: once declared, they cannot grow or shrink in size.

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);

    // Destructuring a tuple
    let (x, y, z) = tup;
    println!("The values are: {}, {}, {}", x, y, z);

    // Accessing tuple elements with dot notation
    let five_hundred = tup.0;
    let six_point_four = tup.1;
    let one = tup.2;

    println!("Values by index: {}, {}, {}", five_hundred, six_point_four, one);
}
```

A tuple with no values `()` is called the unit type and represents an empty value or empty return type.

### Array Type

An array is a collection of multiple values of the same type. Unlike arrays in some languages, arrays in Rust have a fixed length.

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    // With explicit type annotation [type; size]
    let months: [&str; 12] = ["January", "February", "March", "April", "May", "June",
                              "July", "August", "September", "October", "November", "December"];

    // Creating an array with the same value repeated
    let zeros = [0; 5]; // Creates [0, 0, 0, 0, 0]

    // Accessing array elements
    let first = a[0];
    let second = a[1];

    println!("First: {}, Second: {}", first, second);
}
```

Arrays are useful when you want your data allocated on the stack rather than the heap, or when you want to ensure you always have a fixed number of elements.

#### Bounds Checking in Arrays

If you try to access an element at an index that doesn't exist, Rust will panic (crash with an error) at runtime:

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    // This will compile but panic at runtime if the index is out of bounds
    let index = 10;
    let element = a[index]; // Will panic!

    println!("The element is: {}", element);
}
```

This is a safety feature of Rust that prevents buffer overflows and other memory safety issues.

## Type Annotations

As mentioned earlier, Rust can usually infer the type of a variable, but sometimes we need to provide explicit type annotations. We do this by adding a colon followed by the type after the variable name:

```rust
let guess: u32 = "42".parse().expect("Not a number!");
```

In this example, we're telling Rust that `guess` should be a `u32` (an unsigned 32-bit integer). Without this annotation, Rust wouldn't know which type to use for `parse()`.

## Custom Types

Beyond these built-in types, Rust allows you to define your own types using `struct` and `enum` declarations. We'll cover these in more detail in later chapters.

Understanding Rust's type system is crucial for writing effective and safe Rust code. The compiler will help ensure you're using data correctly, preventing many common bugs before your program even runs.
