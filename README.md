# matomock
A dockerized mock service for matomo / piwik

## example usage
An example with docker-compose:

```
version: "3"
services:
  web:
    build: .
    image: raffaeleguidi/matomock
    ports:
      - 8080:80
    #environment:
    #  - PORT=80
  
```
