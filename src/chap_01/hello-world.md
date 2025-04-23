# Your First Rust Program

Let's write our first Rust program: the classic "Hello, World!" example. This will give us a chance to see a complete Rust program and understand its basic structure.

## Creating the Project

We'll use Cargo to create a new project:

```bash
cargo new hello_world
cd hello_world
```

## Understanding the Generated Code

Open the `src/main.rs` file in your editor. You'll see Cargo has already generated a simple "Hello, World!" program for you:

```rust
fn main() {
    println!("Hello, world!");
}
```

Let's examine this code line by line:

1. `fn main() {`: This declares a function named `main`. The `main` function is special in Rust—it's the entry point of every Rust program.

2. `println!("Hello, world!");`: This line prints text to the console. The `println!` is a macro (that's what the `!` indicates), not a regular function. Macros are a powerful feature in Rust that we'll explore later.

3. `}`: This closing brace marks the end of the `main` function.

## Running the Program

To run this program, use Cargo:

```bash
cargo run
```

You should see output similar to:

```
   Compiling hello_world v0.1.0 (/path/to/hello_world)
    Finished dev [unoptimized + debuginfo] target(s) in 0.61s
     Running `target/debug/hello_world`
Hello, world!
```

Congratulations! You've just run your first Rust program.

## Modifying the Program

Let's make a small change to understand a bit more about Rust. Update your `main.rs` file to:

```rust
fn main() {
    let name = "Rustacean";
    println!("Hello, {}!", name);
}
```

Here's what we've changed:

1. `let name = "Rustacean";`: We're declaring a variable named `name` and assigning it the value `"Rustacean"`. Variables in Rust are immutable (cannot be changed) by default.

2. `println!("Hello, {}!", name);`: We're using a placeholder `{}` in the string and passing the `name` variable to fill it.

Run the program again with `cargo run` and you should see:

```
Hello, Rustacean!
```

## Adding Comments

Comments in Rust start with `//`. Let's add some comments to our program:

```rust
// This is the main function, the entry point of our program
fn main() {
    // Declare a variable to hold the name
    let name = "Rustacean";
    
    // Print a greeting using the name variable
    println!("Hello, {}!", name);
}
```

Comments are ignored by the compiler but are extremely useful for humans reading your code.

## Understanding Program Structure

Let's take a step back and understand the structure of our Rust project:

- `Cargo.toml`: Contains metadata about our project and its dependencies
- `src/main.rs`: Contains our source code, starting with the `main` function
- `target/`: Directory created by Cargo to store compiled files

This basic structure is the foundation for all Rust projects. As projects grow more complex, you'll add more files, modules, and tests, but the fundamental organization remains the same.

## Key Takeaways

From this simple example, we've learned:

1. Rust programs start execution in the `main` function
2. `println!` is a macro for printing to the console
3. Variables are declared with `let` and are immutable by default
4. String formatting uses `{}` as placeholder
5. Comments start with `//`
6. Cargo makes it easy to build and run programs

This is just the beginning of our Rust journey. Next, we'll learn about Rust's type system and basic syntax.
