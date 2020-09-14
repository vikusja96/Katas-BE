# Northcoders Morning Katas

Each kata should be completed with TDD. Every morning you should start a new kata, regardless of the progress you have made on the previous one! That way you get more exposure to different types of problems.

For the tests in this repo please use [Jest](https://jestjs.io/en/).
Take a look at the [Jest docs](https://jestjs.io/docs/en/using-matchers) for more matchers etc.

You may notice that the structure of this repo looks a little different. Jest will automatically look for any files in a `spec` or `__tests__` directory, or have `*.spec.js` / `*.test.js` in their file names and run them. This time we have configured it to take advantage of this behaviour.

## Precommit Hooks & ESLint

- This repo comes with [Husky](https://github.com/typicode/husky) installed as a dev dependency. Husky will run a `"precommit"` script before letting anyone `git commit`.
- It also comes with [ESLint](https://eslint.org/) which checks that your code follows certain rules.
- You can see that the `"precommit"` script in the `./package.json` says `"jest && eslint ."`. This means that before each commit, the tests will be run by Jest and then ESLint will check your code conforms to all of its rules. If there are any errors, you will not be able to commit.

## Running Order

The running order for this block's katas is:

1. everyContainsSome
2. passwordScore
3. secondsToTimeString
4. counterIntelligence
5. validateAndFormatPhone
6. uniqueAndOrdered
7. findMissingLetter
8. insertNewValue
9. textInDiv
10. sumConsecutiveDuplicates
11. palindrome
12. foldArray
13. alphabetReplace
14. supermarketQueue
15. findClosingParenthesis

## Setup Instructions

1. Fork this repository to your own GitHub account because you will be pushing your own solutions to it.

2. Clone your fork of this repository to your local machine and `cd` into it:

```
$ git clone <your fork's URL>
$ cd BEND-katas
```

3. Make sure you've navigated into the folder and install all dependecies using `npm install`. You also have access to an npm script to run tests (`npm test`). Try to spend an hour each morning working on a kata. It will give you the edge when you come to do tech tests for your job applications

4. Work on the kata and commit changes as needed. When you are happy with your solution, push all your changes to your forked repo. You should push to your fork frequently but as a bare minimum please make sure it's up to date with last week's kata solutions before Monday morning each week:

```
$ git push origin master
```
