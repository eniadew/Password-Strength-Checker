npm install prompt-sync
```

## Usage

Run the script with Node:

```bash
node main.js
```

The script will prompt:

```
Enter a password:
```

After you enter a password it will either print:

```
Good Password!
```

or

```
Error! Bad Password!
<one or more suggestions>
```

## Password rules

The checker validates the password against these rules:

- At least one uppercase letter (A–Z)
- At least one digit (0–9)
- At least one symbol (common punctuation)
- Minimum length of 8 characters

If a rule is not met, the script prints a clear message telling you which rule(s) failed.

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

## Customization

- To change which symbols are allowed or required, edit the regular expression in `main.js`.
- To change the minimum length, adjust the length check in `main.js`.
- If you want to add more rules (e.g., lowercase requirement, blacklist common passwords, entropy checks), add the logic to `main.js` or refactor into a rules array.

## Notes

- This script is intended as a simple educational tool. For production-grade password validation consider:
  - Using a well-tested library (e.g., `zxcvbn`) for strength estimation.
  - Checking against common-password lists.
  - Enforcing server-side validation and rate limiting.
- Symbols checked by the script include common punctuation characters. Modify the regex if you need a tighter or broader symbol set.

## Contributing

Small projects like this can be improved by:
- Adding unit tests.
- Refactoring checks into a configurable rules array.
- Improving messages and localization.

## License

MIT
