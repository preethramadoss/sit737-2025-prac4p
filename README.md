**Calculator Microservice Project**

**Overview**
This microservice provides basic arithmetic operations (**addition, subtraction, multiplication, division**) using REST API endpoints. It is built using **Node.js** and **Express**, with **Winston** for logging requests and errors.

**Project Structure**

**Installation & Setup**

**Prerequisites**
Ensure you have:
- [Node.js](https://nodejs.org/en/download/) installed (v14 or later).
- [Git](https://git-scm.com/) installed.
- A code editor like **VS Code**.

**Step 1: Clone the Repository**

git clone https://github.com/yourusername/sit737-2025-prac4p.git
cd sit737-2025-prac4p

**Step 2: Install Dependencies**

npm install

**Step 3: Run the Server**

node calculatormini.js ## Your API is now running at http://localhost:3040.

**API Endpoints & Usage**
Each endpoint accepts two query parameters (n1 and n2).

**Addition Endpoint:**
GET http://localhost:3040/add?n1=10&n2=5

Response: { "statuscode": 200, "data": 15 }

**Subtraction Endpoint:**
GET http://localhost:3040/sub?n1=20&n2=5

Response: { "statuscode": 200, "data": 15 }

**Multiplication Endpoint:**
GET http://localhost:3040/mul?n1=3&n2=4

Response: { "statuscode": 200, "data": 12 }

**Division Endpoint:**
GET http://localhost:3040/div?n1=10&n2=2

Response: { "statuscode": 200, "data": 5 }
**Handling Division by Zero**
GET http://localhost:3040/div?n1=10&n2=0

Response: { "statuscode": 500, "msg": "Cannot divide by zero" }

**Error Handling
Error Case	Example Request	Response**
Missing n1 or n2	/add?n1=10	{ "statuscode": 500, "msg": "Invalid input values" }
Non-numeric input	/add?n1=abc&n2=5	{ "statuscode": 500, "msg": "Invalid input values" }
Division by zero	/div?n1=10&n2=0	{ "statuscode": 500, "msg": "Cannot divide by zero" }

**Logging**
This project uses Winston to log:

Requests to logs/combined.log

Errors to logs/error.log

**Example Log Entries
Successful Request:**
{"level":"info","message":"New add operation requested: 10 and 5","service":"calculator-project"}
**Error (Invalid Input):**
{"level":"error","message":"Invalid value for n1","service":"calculator-project"}

**How to Update & Push Changes to GitHub
Step 1: Commit & Push Your Code**
git add .
git commit -m "Added calculator microservice"
git push origin main

**Step 3: Verify on GitHub**
Visit: https://github.com/yourusername/sit737-2025-prac4p

**Author
Project by: Preeth Ramadoss Kamatchi

University: Deakin University

Unit Code: SIT737 - Cloud Native Application Development

Task: 4.1P - Building a Simple Calculator Microservice** 



