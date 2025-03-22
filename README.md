# URL-Shortener-Microservice
The URL Shortener Microservice is a simple API that allows users to submit a long URL and receive a shortened version in return. When the short URL is accessed, the user is redirected to the original URL. This project demonstrates how to handle URL encoding/decoding, data validation, and redirection using Node.js and Express.js.

### Features
- Accepts a long URL via a POST request to /api/shorturl.
- Returns a JSON response with the original URL and a generated short URL.
- Redirects users to the original URL when they visit /api/shorturl/<short_url>.
- Validates URLs to ensure they follow the correct format (http://www.example.com).
- Returns { error: "invalid url" } for incorrect or unsafe URLs.

### Technologies Used
- Node.js – Backend runtime environment.
- Express.js – Lightweight web framework for handling routes and requests.
- DNS Module – Used to validate domain names before storing URLs.
- MongoDB (Optional) – Can be used for persistent URL storage instead of an in-memory database.

### Installation & Setup
- Clone the repository:
- Install dependencies:
- Run the project:
- Or for development with nodemon:

### API Usage
1. Shorten a URL
- Endpoint: POST /api/shorturl
- Request Body (JSON):
- Response:

2. Redirect to Original URL
- Endpoint: GET /api/shorturl/:short_url
- Example: GET /api/shorturl/1
- Response: Redirects to the original URL.

3. Invalid URL Handling
- Example: POST /api/shorturl with { "url": "invalid_url" }
- Response:

### License
This project is open-source and available under the MIT License.




