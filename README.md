# Schema Form App

This is a simple React + TypeScript + Vite application that allows you to build and render a form based on a given schema. The schema defines the structure and types of form fields, including inputs, radio buttons, checkboxes, dates, and buttons.

## Installation

To get started, follow these steps:

- Install the project dependencies using Yarn:
```js
yarn
```
After installing the dependencies, you can run the app using the following command:

```js
yarn dev
```

# Schema Example
You can customize the form's structure by providing a schema in JSON format. Below is an example of a schema you can use:

```js
{
  "items": [
    { "label": "Input", "type": "string" },
    { "label": "Count", "type": "numeric" },
    { "label": "Radio1", "type": "enum" },
    { "label": "Checkbox", "type": "boolean" },
    { "label": "Date", "type": "date" },
    { "label": "Radio", "type": "enum" },
    { "label": "Text Area", "type": "multi-line" },
    { "label": "Radio2", "type": "enum" },
    { "label": "Radio3", "type": "enum" },
    { "label": "Cancel", "type": "button" },
    { "label": "Save", "type": "button" }
  ]
}
```