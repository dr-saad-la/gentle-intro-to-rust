# Comments and Documentation

Well-written comments and documentation are essential for making your code understandable to others (and to your future self). Rust has a rich system for both regular comments and documentation comments that can generate beautiful HTML documentation. In this section, we'll explore how to effectively comment and document your Rust code.

## Regular Comments

Rust supports two types of regular comments:

### Line Comments

Line comments start with `//` and continue until the end of the line:

```rust
fn main() {
    // This is a line comment
    let x = 5; // This comment follows a statement

    // Comments can span multiple lines
    // like this

    let y = 10; // Comments can explain what variables are for
}
```

Line comments are great for short explanations or notes about specific parts of your code.

### Block Comments

Block comments start with `/*` and end with `*/`, and can span multiple lines:

```rust
fn main() {
    /* This is a
       block comment */

    let complicated_calculation = /* even comments in the middle of a line */ 5;

    /*
     * Some developers like to format block comments
     * with a * at the beginning of each line
     * for readability.
     */
}
```

Block comments are less common in Rust than line comments but can be useful for temporarily commenting out blocks of code during development.

## Documentation Comments

Rust has a special kind of comment for documentation that can be processed by the `rustdoc` tool to generate HTML documentation. There are two types of documentation comments:

### Documentation Line Comments

Documentation line comments start with `///` and apply to the item that follows them:

```rust
/// Adds one to the provided number.
///
/// # Examples
///
/// ```
/// let five = 5;
/// let six = add_one(five);
/// assert_eq!(6, six);
/// ```
fn add_one(x: i32) -> i32 {
    x + 1
}
```

### Documentation Block Comments

Documentation block comments start with `/**` (except the opening `/*`) and end with `*/`:

```rust
/**
 * Multiplies the input by two.
 *
 * # Examples
 *
 * ```
 * let four = 4;
 * let eight = double(four);
 * assert_eq!(8, eight);
 * ```
 */
fn double(x: i32) -> i32 {
    x * 2
}
```

Documentation block comments are less common in Rust code than documentation line comments.

### Inner Documentation Comments

Inner documentation comments start with `//!` or `/*!` and apply to the item that contains them, rather than the item that follows them. They're often used at the beginning of modules or crates to document the module/crate as a whole:

```rust
//! # My Awesome Crate
//!
//! This crate provides functionality for doing awesome things.
//!
//! Use it when you need to be awesome.

/// An awesome function in an awesome crate.
pub fn be_awesome() {
    println!("Awesome!");
}
```

## Markdown in Documentation Comments

Documentation comments support Markdown formatting, allowing you to create rich documentation:

```rust
/// # Calculator Function
///
/// Performs basic arithmetic operations.
///
/// ## Arguments
///
/// * `a` - The first operand
/// * `b` - The second operand
/// * `op` - The operation to perform: '+', '-', '*', or '/'
///
/// ## Returns
///
/// The result of the operation, or `None` if division by zero or invalid operation
///
/// ## Examples
///
/// ```
/// let result = calculate(10, 5, '+');
/// assert_eq!(result, Some(15));
/// ```
///
/// ## Panics
///
/// This function doesn't panic.
///
/// ## Errors
///
/// Returns `None` for invalid operations or division by zero.
fn calculate(a: i32, b: i32, op: char) -> Option<i32> {
    match op {
        '+' => Some(a + b),
        '-' => Some(a - b),
        '*' => Some(a * b),
        '/' => if b != 0 { Some(a / b) } else { None },
        _ => None,
    }
}
```

### Common Markdown Sections

Some common sections in Rust documentation include:

- `# Examples`: Code examples showing how to use the item
- `# Panics`: Explains scenarios where the function might panic
- `# Errors`: Describes the possible error types a function may return
- `# Safety`: For unsafe functions, explains the invariants that the caller must uphold
- `# Arguments` or `# Parameters`: Details about the function parameters
- `# Returns`: Information about the return value

## Code Examples in Documentation

One of the most useful features of Rust's documentation system is the ability to include code examples that can be verified by running `cargo test`:

```rust
/// Returns the square of the input.
///
/// # Examples
///
/// ```
/// let x = 4;
/// let result = square(x);
/// assert_eq!(result, 16);
/// ```
///
/// ```
/// // Zero squared is still zero
/// assert_eq!(square(0), 0);
/// ```
fn square(x: i32) -> i32 {
    x * x
}
```

When you run `cargo test`, Rust will compile and run the code examples in your documentation to ensure they work correctly.

## Generating Documentation

To generate HTML documentation for your crate, you can use:

```bash
cargo doc
```

This will build the documentation for your crate and all its dependencies. To only build documentation for your crate:

```bash
cargo doc --no-deps
```

To open the documentation in your browser after building:

```bash
cargo doc --open
```

## Documentation Best Practices

Here are some tips for writing effective documentation in Rust:

1. **Document all public items**: Every public function, struct, trait, etc., should have documentation
2. **Include examples**: Code examples are the most helpful form of documentation
3. **Explain the why, not just the what**: Good documentation explains the purpose and use cases
4. **Keep it consistent**: Use a consistent style throughout your documentation
5. **Link to related items**: Use `[link_text]` syntax to link to other items in your crate
6. **Use proper Markdown headers**: Structure your documentation with headers for better readability
7. **Document error cases and panics**: Clearly explain when functions might fail
8. **Keep examples simple**: Examples should be easy to understand and demonstrate typical usage

## Using Comments for Temporary TODOs

It's common to use comments to mark areas of code that need further attention:

```rust
fn process_data(data: &[u32]) -> u32 {
    // TODO: Optimize this algorithm for large data sets
    data.iter().sum()
}

fn handle_error(error_code: i32) {
    // FIXME: Implement proper error handling
    println!("An error occurred: {}", error_code);
}
```

Some development environments recognize markers like `TODO:` and `FIXME:` and provide special highlighting or listing features for them.

## The #[doc] Attribute

You can also use the `#[doc]` attribute to add documentation to items:

```rust
#[doc = "Adds two numbers together."]
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

This is equivalent to using `///` comments, but is sometimes used in macros or generated code.

## Conclusion

Good documentation is crucial for making your code accessible to others. Rust's documentation system is powerful and well-integrated with the language, allowing you to create comprehensive and verifiable documentation that aids users of your code.

By using a combination of regular comments for internal notes and documentation comments for public interfaces, you can create code that is both maintainable and user-friendly.

When you start writing Rust libraries or contributing to Rust projects, take the time to write quality documentation. Your users (and your future self) will thank you!
