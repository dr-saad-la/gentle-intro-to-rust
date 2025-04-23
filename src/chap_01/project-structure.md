# Rust Project Structure

Understanding how Rust projects are structured is essential for organizing your code as it grows. In this section, we'll explore the standard structure of Rust projects and how it promotes maintainable code.

## Basic Structure

As we've seen, a new Rust project created with `cargo new` has this simple structure:

```
project_name/
├── Cargo.toml       # Project configuration and dependencies
├── src/             # Source directory
│   └── main.rs      # Entry point for binaries
└── target/          # Compiled output (created when you build)
```

## Binary vs. Library Projects

Rust projects can be either a binary (an executable) or a library (code meant to be used by other projects).

- **Binary project**: Created with `cargo new project_name`
  - Has a `src/main.rs` file with a `main()` function
  - Produces an executable

- **Library project**: Created with `cargo new --lib project_name`
  - Has a `src/lib.rs` file instead of `main.rs`
  - Produces a library that other code can use

## More Complex Project Structure

As your project grows, you'll likely add more files:

```
project_name/
├── Cargo.toml
├── Cargo.lock       # Lock file for dependencies (automatically generated)
├── src/
│   ├── main.rs      # Binary entry point
│   ├── lib.rs       # Library root (if you have one)
│   └── utils.rs     # An example module file
├── examples/        # Example code showing how to use your library
│   └── demo.rs
├── tests/           # Integration tests
│   └── integration_test.rs
├── benches/         # Benchmarks
│   └── benchmark.rs
└── target/
```

## The Module System

Rust uses a module system to organize code within a project. The simplest way to create a module is to create a new file:

For example, to create a `utils` module:

1. Create a file called `src/utils.rs`
2. In your `main.rs` or `lib.rs`, add:

```rust
// Tell Rust to include the utils module
mod utils;

fn main() {
    // Use something from the utils module
    utils::some_function();
}
```

As projects grow even larger, you might create directories for modules:

```
src/
├── main.rs
└── models/         # A directory for a module
    ├── mod.rs      # The module root
    ├── user.rs     # A submodule
    └── product.rs  # Another submodule
```

Then in `main.rs`:

```rust
mod models;

fn main() {
    let user = models::user::User::new("Alice");
    // ...
}
```

## Cargo.toml in Detail

The `Cargo.toml` file configures your project. Let's look at some common sections:

```toml
[package]
name = "my_project"
version = "0.1.0"
edition = "2021"
authors = ["Your Name <your.email@example.com>"]
description = "A short description of the project"
license = "MIT"

[dependencies]
serde = { version = "1.0", features = ["derive"] }
rand = "0.8"

[dev-dependencies]
pretty_assertions = "1.0"

[build-dependencies]
cc = "1.0"

[[bin]]
name = "custom_binary_name"
path = "src/bin/custom.rs"
```

Key sections include:
- `[package]`: Metadata about your project
- `[dependencies]`: External libraries your code needs
- `[dev-dependencies]`: Dependencies only needed for tests and examples
- `[build-dependencies]`: Dependencies used in build scripts
- `[[bin]]`: Configuration for additional binaries in your project

## Best Practices

Here are some best practices for structuring Rust projects:

1. **Keep modules focused**: Each module should have a single responsibility
2. **Use descriptive names**: Name your files and modules based on what they do
3. **Follow Rust conventions**: Use snake_case for files and functions, CamelCase for types
4. **Organize by feature**: Group related functionality together
5. **Document your code**: Use Rust's documentation comments (`///` or `//!`)

## Documentation Comments

Rust has special comment syntax for documentation:

```rust
/// This is a documentation comment for the function below
/// It supports markdown formatting
///
/// # Examples
///
/// ```
/// let result = my_function(42);
/// assert_eq!(result, 84);
/// ```
fn my_function(input: i32) -> i32 {
    input * 2
}

//! This is a module-level documentation comment
//! It documents the module or crate that contains it
```

You can generate HTML documentation with `cargo doc --open`.

## Workspace Projects

For very large projects, Rust supports workspaces that group multiple related packages:

```
workspace_root/
├── Cargo.toml       # Workspace configuration
├── package_one/     # A package in the workspace
│   ├── Cargo.toml
│   └── src/
└── package_two/     # Another package
    ├── Cargo.toml
    └── src/
```

The workspace `Cargo.toml` might look like:

```toml
[workspace]
members = [
    "package_one",
    "package_two",
]
```

This approach helps manage large codebases by splitting them into manageable pieces while still allowing the pieces to work together seamlessly.

Understanding Rust's project structure gives you the foundation to organize your code effectively as it grows from simple scripts to complex applications.
