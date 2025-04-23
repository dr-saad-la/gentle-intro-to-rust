# Functions

Functions are the building blocks of readable, maintainable code. They allow us to break up our code into smaller pieces with specific purposes, making our programs easier to understand and modify. In this section, we'll explore how functions work in Rust.

## Defining Functions

We've already seen the most important function in Rust programs: the `main` function, which is the entry point of many programs. Defining a new function is straightforward:

```rust
fn another_function() {
    println!("Another function.");
}

fn main() {
    println!("Hello from main!");
    another_function();
}
```

Function definitions in Rust start with `fn` and have a set of parentheses after the function name. The curly brackets tell the compiler where the function body begins and ends.

We can call any function we've defined by entering its name followed by a set of parentheses. In the example above, we call `another_function()` from inside the `main` function.

## Function Parameters

Functions can take parameters, which are special variables that are part of a function's signature:

```rust
fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {}{}", value, unit_label);
}

fn main() {
    print_labeled_measurement(5, 'h');
}
```

In this function signature, `print_labeled_measurement` has two parameters: `value` of type `i32` and `unit_label` of type `char`. When we call the function, we pass in the values (arguments) `5` and `'h'`.

Note that in Rust function signatures, you **must** declare the type of each parameter. This is a deliberate design decision to improve code clarity.

## Statements and Expressions

Understanding the difference between statements and expressions in Rust is important:

- **Statements** are instructions that perform an action but do not return a value.
- **Expressions** evaluate to a resulting value.

Creating a variable and assigning a value to it with the `let` keyword is a statement:

```rust
fn main() {
    let y = 6; // This is a statement
}
```

Function definitions are also statements. Statements do not return values, which is why the following code would not work:

```rust
fn main() {
    let x = (let y = 6); // Error: let statements don't return values
}
```

Expressions evaluate to a value and can be part of statements. For example:

```rust
fn main() {
    let y = {
        let x = 3;
        x + 1  // Note: no semicolon here!
    };

    println!("The value of y is: {}", y); // Prints 4
}
```

In this example, the block `{ let x = 3; x + 1 }` is an expression that evaluates to `4`. Note that the expression `x + 1` doesn't end with a semicolon. If we added a semicolon, it would become a statement and wouldn't return a value.

## Function Return Values

Functions can return values to the code that calls them. We don't name return values, but we do declare their type after an arrow (`->`):

```rust
fn five() -> i32 {
    5
}

fn main() {
    let x = five();
    println!("The value of x is: {}", x);
}
```

There are no function return keywords in the `five` function. Instead, we return the value by writing an expression without a semicolon at the end of the function. You can use the `return` keyword to return early from a function, but most functions return the last expression implicitly.

Here's a more complex example that uses a condition to determine the return value:

```rust
fn plus_one(x: i32) -> i32 {
    x + 1
}

fn main() {
    let x = plus_one(5);
    println!("The value of x is: {}", x);
}
```

Adding a semicolon to the end of an expression turns it into a statement, which doesn't return a value. If we changed our function to:

```rust
fn plus_one(x: i32) -> i32 {
    x + 1;  // Error: doesn't return a value
}
```

We would get a compile-time error because we're not returning a value, but we promised to return an `i32`.

## Multiple Return Values Using Tuples

While a function can only have one return type, we can use a tuple to return multiple values:

```rust
fn calculate_statistics(numbers: &[i32]) -> (i32, i32, i32) {
    let sum: i32 = numbers.iter().sum();
    let max: i32 = *numbers.iter().max().unwrap_or(&0);
    let min: i32 = *numbers.iter().min().unwrap_or(&0);

    (sum, max, min)
}

fn main() {
    let numbers = [1, 5, 10, 2, 8];
    let (sum, max, min) = calculate_statistics(&numbers);

    println!("Sum: {}, Max: {}, Min: {}", sum, max, min);
}
```

Here, our function returns a tuple containing the sum, maximum, and minimum values of an array.

## Function Pointers

Functions can be passed as arguments to other functions:

```rust
fn apply_twice(f: fn(i32) -> i32, arg: i32) -> i32 {
    f(f(arg))
}

fn add_one(x: i32) -> i32 {
    x + 1
}

fn main() {
    let result = apply_twice(add_one, 5);
    println!("Result: {}", result);  // Prints 7
}
```

In this example, `apply_twice` takes a function pointer `f` and an argument, then applies the function twice to the argument.

## Closures

Rust also supports closures, which are anonymous functions you can save in a variable or pass as arguments to other functions:

```rust
fn main() {
    let add_one = |x| x + 1;
    let result = add_one(5);
    println!("Result: {}", result);  // Prints 6
}
```

Closures can capture their environment, allowing them to access variables from the scope in which they're defined:

```rust
fn main() {
    let x = 4;
    let equal_to_x = |z| z == x;

    let y = 4;
    println!("{}", equal_to_x(y));  // Prints true
}
```

We'll cover closures in more detail in a later chapter.

## Function Best Practices

Here are some best practices for writing functions in Rust:

1. **Keep functions small and focused**: Each function should do one thing well.
2. **Use descriptive names**: Function names should clearly describe what they do.
3. **Follow Rust's naming convention**: Use snake_case for function names.
4. **Document your functions**: Use documentation comments `///` to explain what your function does.
5. **Provide useful error messages**: If your function can fail, make sure error messages are helpful.

Functions are a fundamental part of Rust programming. As you continue your Rust journey, you'll learn more advanced ways to work with functions, including methods associated with types, closures, and higher-order functions.
