```mermaid
sequenceDiagram
    participant browser
    participant server
    browser ->> +server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server -->> -browser: HTML document
    browser ->> +server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server -->> -browser: the css file
    browser ->> +server: https://studies.cs.helsinki.fi/exampleapp/spa.js
    server -->> -browser: the javascript file(spa.js)
    Note right of browser: The browser starts executing the Javascript code that fetches the JSON from the server
    browser ->> +server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server -->> -browser: the JSON file
    Note right of browser: The browser executes the callback function that renders the notes
```