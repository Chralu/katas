# Typescript Kata starter project

## Project structure

- **src/main.ts** : Production code
- **tests/index.spec.ts** : Unit tests

## Dev environment setup

### Install tools
Requirements : 
 - Node 18

Install using [asdf](https://asdf-vm.com/) : 
```sh
$ asdf plugin add nodejs
$ asdf install
```

### Install dependencies
```sh
$ npm install
```

### VSCode extension

L'extension [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) permet d'intégrer l'exécution des tests dans VSCode.

## Running tests
### Once
```sh
$ npm run test
```

### Watching code changes
```sh
$ npm run test:watch
```