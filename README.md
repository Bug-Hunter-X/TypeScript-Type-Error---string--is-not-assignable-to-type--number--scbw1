# TypeScript Type Error: 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: type mismatch between string and number. The `add` function expects two numbers, but the code attempts to pass a string, leading to a compilation error.

## Bug Description
The bug arises in the `add` function. It's declared to accept two number parameters, but when called, it receives a string '2' as the second argument, causing the type error.

## Solution
The solution involves ensuring that both arguments passed to the `add` function are numbers. This can be done through explicit type checking or by parsing the string argument to a number using `parseInt` or a similar method.

## How to reproduce
1. Clone this repository.
2. Compile the code using a TypeScript compiler (e.g., `tsc bug.ts`).
3. Observe the type error in the compiler output.