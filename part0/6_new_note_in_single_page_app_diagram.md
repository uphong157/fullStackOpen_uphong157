```mermaid
sequenceDiagram
    participant browser
    participant server
    Note right of browser: The browser executes the callback function that<br/>adds the new note and rerenders the note list
    browser ->> +server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server -->> -browser: 201 Created
```