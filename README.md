# Express boilerplate (JavaScript)

This is the start point of an express back-end project

Date: 2021

Node: v15.8.0

ExpressJs: v4.17.1

yarn: v2.4.0

VS Code: v1.53.2

## Dependencies

- Main Framework

> express

- Generate http error messsages

> http-errors

- Log the interactions

> morgan

- Output DEGUG message

> debug
>> supports-color

- Read .env file - Environment variables

> dotenv

## Dev Dependencies

- A tool that restarting the node application when file changes

> nodemon

- Styling

> eslint
>
> prettier
>
>> eslint-plugin-prettier
>>
>> eslint-config-prettier

- Airbnb Styling

> esslint-config-airbnb-base
>
>> eslint-plugin-import
>>
>> eslint-import-resolver-node

- Pre-commit hook

> husky
>
> lint-staged

## VS code and yarn environment

```bash
// Install yarn
npm install -g yarn
cd ~/path/to/project
yarn set version berry
```

```bash
// Add yarn 2+ eslint support on VS Code
yarn dlx @yarnpkg/pnpify --sdk vscode 
```
