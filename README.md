# Node APIs DOCUMENTATIONS
Simple Apis for maintaining todo lists.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
The dashboard provides total management of 

## Technology Stack

PostMan<br> (For checking APIs)
Node js<br>

Modules:<br>
bicrypt<br>
Express<br>
Sequelize<br>
body-parser<br>
morgan<br>

### Prerequisites

Node js 6.9, postgresql 9 or above, npm

### Installing

create an environment via virtualenv(or preferably using virtualenvwrapper which easier to manage !)

git clone https://github.com/In-vincible/Authorized_Node_APIs.git

cd Authorized_Node_APIs

``npm install``<br>
``npm install -g sequelize-cli`` # Installing sequelize-cli which is really useful.<br>
`` Setup server/config/config.json as per your db settings ``<br>
``createdb database-name(to be filled in config.json)``<br>
``sequelize db:migrate`` # Running migrations for creating tables in database.<br>
``npm run start:dev``<br>


# Api Documentation

## Sample Api for creating Admin(to be removed at the production time):
<br><br>
Url: http://127.0.0.1:8000/createAdmin
<br>
Method: POST
<br>
Json object Expected:<br>			{<br>
									"username" : username,<br>
									"pass" : password<br>
								}<br><br>

Json Response for successful Login: <br>
								User Object of Admin
Json Response for Repeated Username:<br>
								{<br>
									"message": "User Already Exists with Username!!"
								}<br>


## Sample Api for creating User(Non-admin):
<br><br>
Url: http://127.0.0.1:8000/createUser
<br>
Method: POST
<br>
Json object Expected:<br>			{<br>
                  "admin": admin Username,<br>
                  "adminPass": admin Password,<br>
									"username" : username,<br>
									"pass" : password<br>
								}<br><br>

Json Response for successful Login: <br>
								User Object 
Json Response for Repeated Username:<br>
								{<br>
									"message": "User Already Exists with Username!!"
								}<br>

## Sample Api for creating API Key:
<br><br>
Url: http://127.0.0.1:8000/createKey
<br>
Method: POST
<br>
Json object Expected:<br>			{<br>
                  "username" : username,<br>
									"pass" : password<br>,
                  "role": Any IntegerValue(Right now this is not used in APIs although can be used in larger applications),<br>
								}<br><br>

Json Response for successful Creation: <br>
								Key Object 

## Sample Api for creating API Key:
<br><br>
Url: http://127.0.0.1:8000/createKey
<br>
Method: POST
<br>
Json object Expected:<br>			{<br>
                  "username" : username,<br>
									"pass" : password<br>,
                  "role": Any IntegerValue(Right now this is not used in APIs although can be used in larger applications),<br>
								}<br><br>

Json Response for successful Creation: <br>
								Key Object 


## Sample Api for creating a todo list:
<br><br>
Url: http://127.0.0.1:8000/todo
<br>
Method: POST
<br>
Json object Expected:<br>			{<br>
                  "key" : APIKey Created,<br>
									"title" : Title Of Todo List,<br>
                  }<br><br>

Json Response for successful Creation: <br>
								Todo Object Created
                
 
## Sample Api for creating a todoItem in a todoList:
<br><br>
Url: http://127.0.0.1:8000/api/todos/:todoId/items
<br>
Method: POST
<br>
Json object Expected:<br>			{<br>
                  "key" : APIKey Created,<br>
                  "content" : Content for the todoItem,<br>
                  }<br><br>

Json Response for successful Creation: <br>
								TodoItem Object Created
                
 
## Sample Api for showing the list of all todos(Anonymous API):
<br><br>
Url: http://127.0.0.1:8000/api/todos
<br>
Method: GET<br>
Json Response for successful Creation: <br>
								List of all Todo Objects with TodoItems.



## Sample Api for showing the list of all todos(Anonymous API):
<br><br>
Url: http://127.0.0.1:8000/api/todos/:todoId
<br>
Method: GET<br>
Json Response for successful Creation: <br>
							Todo Object with specific id.
 

                
		
