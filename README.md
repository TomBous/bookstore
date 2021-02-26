# Project BookStore API

## Start

`git pull origin main`

`npm start`

## Endpoints

### Public routes

#### GET

- `/users`
- `/genres`
- `/categories`

#### POST

- `/login`
```json
{
	"email": "dupon@gmail.com",
	"password": "dupon12345"
}
```

### Private routes

#### GET

- `/books`

** Recherche dynamique de livres **
- `/books/search?genre=4&author=Julia%20Quinn&category=2&title=titre%20du%20livre`
Les paramètres peuvent être combinés ou pas, en utilisant des `&`. Les paramètres sont les suivants : 
	- `author` : STRING (%20 => white space)
	- `titre` : STRING
	- `category` : STRING
	- `genre` : STRING

#### POST


## Data

### Users

```json
{
	"firstname": "Pierre",
	"lastname": "Dupon",
	"email": "dupon@gmail.com",
	"password": "dupon12345"
}
```