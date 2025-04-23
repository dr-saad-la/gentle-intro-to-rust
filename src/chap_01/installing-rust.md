# Installing Rust

Rust has an excellent installation tool called `rustup` that makes it easy to install and update Rust on any operating system. Let's walk through the process.

## Using Rustup (Recommended)

Rustup is the official Rust toolchain installer. It allows you to easily install, update, and manage different versions of the Rust compiler and tools.

### For Windows, macOS, and Linux

1. Open your web browser and go to [https://rustup.rs](https://rustup.rs)
2. Follow the instructions on the page, which typically involve running a single command in your terminal.

For most Unix-like operating systems (Linux and macOS), you can run:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

On Windows, download and run `rustup-init.exe` from the website.

3. Follow the prompts in the installer. For beginners, the default options are perfect.
4. After installation completes, restart your terminal or run the following to update your current shell:

```bash
source $HOME/.cargo/env
```

## Verifying Your Installation

To verify that Rust is correctly installed, open a new terminal window and run:

```bash
rustc --version
```

You should see output similar to:

```
rustc 1.70.0 (90c541806 2023-05-31)
```

The version number may be different, but as long as the command produces output like this, Rust is installed correctly.

Similarly, check that Cargo (Rust's package manager and build tool) is installed:

```bash
cargo --version
```

## What Gets Installed

When you install Rust via rustup, you get several important components:

- **rustc**: The Rust compiler
- **cargo**: Rust's package manager and build system
- **rustup**: The toolchain installer itself, which lets you switch between different Rust versions
- **Standard Library**: Rust's rich standard library

## Keeping Rust Updated

One advantage of using rustup is that updating Rust is simple. Just run:

```bash
rustup update
```

This will update to the latest stable version of Rust.

## Installing IDE Support

Rust has excellent support in many editors and IDEs. Here are some popular options:

### Visual Studio Code
1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the "rust-analyzer" extension from the marketplace

### IntelliJ IDEA / CLion
1. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/) or [CLion](https://www.jetbrains.com/clion/)
2. Install the "Rust" plugin from Settings/Preferences → Plugins

### Other Options
- **Vim/Neovim**: Consider using rust.vim and rust-analyzer with coc.nvim
- **Emacs**: rust-mode and rust-analyzer with lsp-mode
- **Sublime Text**: Install the Rust Enhanced package

Now that you have Rust installed, let's explore Cargo, Rust's powerful package manager and build tool.
