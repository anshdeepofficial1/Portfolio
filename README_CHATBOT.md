# Portfolio Chatbot

This repository contains a simple rule-based chatbot for Anshdeep Singh's portfolio website.

## Files

- **chatbot.py** - Python chatbot with terminal interface
- **index.html** - Portfolio website with integrated web chatbot

## Python Chatbot Usage

The Python chatbot (`chatbot.py`) is a terminal-based chatbot that provides information about Anshdeep Singh.

### Running the Python Chatbot

```bash
python3 chatbot.py
```

### Features

- Interactive terminal-based conversation
- Rule-based responses using if-elif conditions
- Information about:
  - Skills (Python, SQL, Machine Learning, Video Editing)
  - Projects (To-Do List, Payroll System, Weather Analysis, etc.)
  - Education (BCA in Data Science at Chandigarh University)
  - Certifications (IBM, University of Michigan, Infosys, LinkedIn Learning)
  - Contact details (Email, GitHub, LinkedIn, Phone)
  - Experience and background

### Example Conversation

```
Portfolio_Bot: Hello! Hi I am Anshdeep Singh's Portfolio Chatbot.
Type 'bye' to exit!
You: hi
Portfolio_Bot: Hello! Nice To Meet You. I can help you learn about Anshdeep Singh.
You: skills
Portfolio_Bot: Anshdeep's key skills include Python, SQL, Machine Learning, Video Editing, Data Analysis, and Web Development.
You: bye
Portfolio_Bot: Bye! Have A Nice Day. Visit again to learn more about Anshdeep Singh!
```

## Web Chatbot

The website includes an integrated chatbot widget that:
- Appears as a floating button in the bottom-right corner
- Matches the website's design theme
- Provides the same information as the Python chatbot
- Includes quick suggestion chips for common queries
- Uses the same if-elif logic pattern as the Python version

### Supported Queries

- `hi`, `hello`, `hey` - Greetings
- `skills` - View technical skills
- `projects` - See project portfolio
- `education` - Educational background
- `certifications` - Professional certifications
- `contact` - Contact information
- `experience` - Work experience
- `location` - Geographic location
- `github`, `linkedin`, `email` - Specific contact channels
- `video editing` - Content creation work
- `bye` - Exit the chat

## User Information

**Name:** Anshdeep Singh  
**Role:** Data Scientist & Content Creator  
**Location:** Khanna, Punjab, India  
**Email:** anshdeep200618@gmail.com  
**GitHub:** [anshdeepofficial1](https://github.com/anshdeepofficial1)  
**LinkedIn:** [anshdeepofficial1](https://www.linkedin.com/in/anshdeepofficial1/)  
**Phone:** +91 97815-70098

## Design Philosophy

The chatbot follows a simple, rule-based approach with:
- Clear if-elif-else conditional logic
- Lowercase input matching for case-insensitive responses
- Predefined responses for known queries
- Helpful error messages for unknown queries
- Easy-to-extend structure for adding new responses
