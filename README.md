Afghan Proverbs 

A RESTful API for storing and managing traditional Afghan proverbs and sayings in Dari, Pashto, and their English translations, with meanings and categories.

This project is made by using Node.js, Express, and stores data in a local JSON file. 

---

### how to run the project locally

### 1. Clone the Repository
```bash
git clone https://github.com/sadaf2825/afghan-proverbs.git   
cd afghan-proverbs

### 2 install dependencies

npm install

### start the server

npm run dev


| Method | Endpoint               | Description                       

| GET    | /proverbs              | Get all proverbs                  
| GET    | /proverbs/\:id         | Get a single proverb by ID        
| POST   | /proverbs              | Add a new proverb                 
| PUT    | /proverbs/\:id         | Update an existing proverb        
| DELETE | /proverbs/\:id         | Delete a proverb                  
| GET    | /proverbs/random       | Get a random proverb              
| GET    | /proverbs?category=... | Filter proverbs by category       
| GET    | /proverbs?search=...   | Search by keyword in any language 

### each proverb looks like this:
{
  "id": 1,
  "textDari": "هر که بامش بیش، برفش بیشتر",
  "textPashto": "څوک چې لوړ چت لري، واوره به هم پرې ډېره وي",
  "translationEn": "The higher the roof, the more snow it gathers.",
  "meaning": "With more wealth or status come greater problems or responsibilities.",
  "category": "wisdom"
}
### examples for request
curl -X POST http://localhost:3000/proverbs \
-H "Content-Type: application/json" \
-d '{
  "textDari": "با یک گل بهار نمی‌شود",
  "textPashto": "یوه ګل پسرلی نه راولي",
  "translationEn": "One flower does not bring spring.",
  "meaning": "One small effort is not enough for a big result.",
  "category": "advice"
}'

###  Search Proverbs by Keyword

```bash
curl "http://localhost:3000/proverbs?search=spring"

### search proverbs randomly

curl http://localhost:3000/proverbs/random



