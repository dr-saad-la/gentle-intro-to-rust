# Understanding Cargo

Cargo is Rust's build system and package manager. It handles many tasks for you, including:

- Building your code
- Downloading and building dependencies
- Running tests
- Generating documentation

Let's explore the basic Cargo commands and understand how to use this powerful tool.

## Creating a New Project

To create a new Rust project, use the `cargo new` command:

```bash
cargo new hello_rust
```

This creates a new directory called `hello_rust` with the following structure:

```
hello_rust/
├── Cargo.toml
└── src/
    └── main.rs
```

Let's look at each component:

- **Cargo.toml**: This is the manifest file for Rust packages. It contains metadata about your package, its dependencies, and more.
- **src/main.rs**: This is the source file where your Rust code lives. For executable projects, this contains the `main` function, where execution begins.

## Exploring Cargo.toml

Open the `Cargo.toml` file with your text editor. You'll see something like:

```toml
[package]
name = "hello_rust"
version = "0.1.0"
edition = "2021"

[dependencies]
```

This file defines:
- The name of your project
- The current version
- The Rust edition you're using (2021 is the latest at the time of writing)
- A section for listing dependencies (currently empty)

## Building and Running

Cargo makes it easy to build and run your project:

```bash
# Navigate to your project directory
cd hello_rust

# Build your project
cargo build

# Run your project
cargo run
```

When you run `cargo build`, Cargo compiles your program and creates an executable in the `target/debug` directory.

The `cargo run` command combines building and running in one step—it builds your project (if necessary) and then runs the resulting executable.

## Release Builds

By default, Cargo builds your code with debugging information and without optimizations. When you're ready to create an optimized version for distribution, use:

```bash
cargo build --release
```

This creates an optimized executable in `target/release/`. Release builds run much faster but take longer to compile.

## Adding Dependencies

One of Cargo's most powerful features is how easily it lets you use external libraries (called "crates" in Rust).

To add a dependency, edit your `Cargo.toml` file and add it under the `[dependencies]` section:

```toml
[dependencies]
rand = "0.8.5"
```

This adds the `rand` crate (for random number generation) with version 0.8.5 or compatible.

The next time you build your project, Cargo will automatically download and compile this dependency and any of its dependencies.

## Other Useful Commands

- `cargo check`: Quickly checks your code for errors without producing an executable
- `cargo doc --open`: Builds documentation for your project and its dependencies and opens it in a browser
- `cargo test`: Runs tests for your project
- `cargo update`: Updates dependencies to the latest versions allowed by your `Cargo.toml`

## Cargo's Impact on Workflow

Cargo has transformed how Rust developers work by making it trivially easy to:

- Start new projects with the correct structure
- Manage dependencies
- Build and test code
- Share your libraries with others

As you continue learning Rust, you'll come to rely on Cargo for more advanced features, but these basics will take you a long way.

Now that we understand Cargo, let's create our first Rust program.
