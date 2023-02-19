## Single page app diagram

```mermaid
sequenceDiagram
browser ->>server: post https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server -->> browser: Status Code: 201 Contains JSON data
deactivate server


```