npm install prompt-sync
```

## Usage

Run the script with Node:

```
node main.js
```

The script will prompt you to type a password and then validate it against a set of rules. It prints `Good Password!` when all checks pass, otherwise it prints `Error! Bad Password!` and lists which rules failed.

## Password rules

The checker enforces the following rules:

- At least one uppercase letter (A-Z)
- At least one number (0-9)
- At least one symbol (common punctuation characters)
- Minimum length of 8 characters

You can edit `main.js` if you want to change the symbol set or adjust any rule.

## Examples

Good password example:

```
Enter a password: MyP@ssw0rd
Good Password!
```

Bad password example:

```
Enter a password: password
Error! Bad Password!
Please add an uppercase letter
Please add a number
Please add a symbol
Password must be more than 8 characters
```

## Notes

- This is a small educational script. For production systems consider more robust policies (password blacklists, entropy checks, rate limiting, using libraries such as zxcvbn, etc.).
- The symbol check uses a broad set of punctuation; modify the regular expression in `main.js` if you need to allow or disallow specific characters.

## License

MIT