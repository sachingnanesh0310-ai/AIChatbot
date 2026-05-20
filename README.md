# AI-Powered Chatbot using Flask & TensorFlow

An AI-powered chatbot built using Python, Flask, TensorFlow, and NLTK.  
This chatbot uses a retrieval-based deep learning model trained with predefined intents and responses for instant communication on websites.

---

# Features

✅ AI-powered chatbot  
✅ Instant responses  
✅ Website integration  
✅ Deep learning intent recognition  
✅ Commercial FAQ support  
✅ Easy customization  
✅ Responsive frontend UI  
✅ Real-time interaction  

---

# Technologies Used

- Python
- Flask
- TensorFlow / Keras
- NLTK
- HTML
- CSS
- JavaScript

---

# Project Structure

```plaintext
chatbot-project/
│
├── app.py
├── train.py
├── intents.json
├── chatbot_model.h5
├── words.pkl
├── classes.pkl
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

---

# Installation

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/chatbot-project.git
cd chatbot-project
```

---

## Step 2: Install Dependencies

```bash
pip install flask tensorflow nltk numpy
```

---

## Step 3: Train the Chatbot

Run the training script:

```bash
python train.py
```

This generates:
- chatbot_model.h5
- words.pkl
- classes.pkl

---

## Step 4: Run the Application

```bash
python app.py
```

Open browser:

```plaintext
http://127.0.0.1:5000
```

---

# Chatbot Workflow

1. User sends a message
2. JavaScript sends request to Flask backend
3. Model predicts intent
4. Bot selects best response
5. Response appears instantly

---

# Example Intents

| User Input | Bot Response |
|------------|--------------|
| Hi | Hello! How can I help you? |
| What services do you provide? | We provide AI solutions and web development |
| What is the pricing? | Pricing depends on requirements |
| Bye | Have a great day! |

---

# Sample Output

```plaintext
Bot: Hello! How can I help you today?

User: Hi

Bot: Welcome to our website!

User: What services do you provide?

Bot: We provide AI solutions, web development,
and chatbot services.
```

---

# Model Architecture

The chatbot uses:
- Dense Neural Network
- Bag of Words
- NLP preprocessing
- Intent classification

---

# Future Enhancements

- OpenAI GPT integration
- Voice assistant
- Multilingual chatbot
- Database support
- User authentication
- WhatsApp integration
- Live customer support

---

# Commercial Use Cases

- Customer support chatbot
- Banking assistant
- Hospital enquiry system
- College admission assistant
- AI legal assistant
- E-commerce support bot
