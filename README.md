# IPL Social - Email Validator

**Last Name:** Ahandoc
**First Name:** Mohamed
**Vinci Email:** Mohamed.Ahandoc@student.vinci.be
**GitHub URL:** https://github.com/mohamed-ahandoc-vinci/IPL-social.git

## Code Explanation
This project implements a manual email validation library in TypeScript (`isEmailValid`), developed using a strict **TDD (Test Driven Development)** approach.

Per the requirements, no external libraries or Regular Expressions (Regex) were used. The algorithm validates the email by sequentially checking the following rules:
1.  **Forbidden Characters:** The email must not contain any spaces.
2.  **Structure:** The email must contain exactly one `@` symbol.
3.  **Content:** There must be valid text before and after the `@` separator.
4.  **Domain:** The domain part must contain a dot (`.`) and cannot end with a dot.

## Continuous Integration (CI)
The project includes a GitHub Actions pipeline defined in .github/workflows/ci.yml. This pipeline automatically installs dependencies and runs the tests whenever a Pull Request is created against the main branch, ensuring that no broken code is merged.

## Test Command
To execute the test suite (Jest), run the following command in the terminal:

```bash
npm test
