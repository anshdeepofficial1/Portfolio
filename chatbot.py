"""
Portfolio Chatbot - Anshdeep Singh
A simple rule-based chatbot with predefined responses about the portfolio owner.
"""

def portfolio_chatbot():
    """Main chatbot function for Anshdeep Singh's portfolio."""
    print("Portfolio_Bot: Hello! Hi I am Anshdeep Singh's Portfolio Chatbot.")
    print("Type 'bye' to exit!")
    
    while True:
        user = input("You: ").lower().strip()

        if user == "hi" or user == "hello" or user == "hey":
            print("Portfolio_Bot: Hello! Nice To Meet You. I can help you learn about Anshdeep Singh.")

        elif user == "who are you?" or user == "what is your name?":
            print("Portfolio_Bot: I am Anshdeep Singh's portfolio chatbot. I can answer questions about Anshdeep's skills, projects, and experience.")

        elif user == "who is anshdeep?" or user == "tell me about anshdeep":
            print("Portfolio_Bot: Anshdeep Singh is an aspiring Data Scientist & Content Creator from Punjab, India. He specializes in Python, SQL, Machine Learning, and Video Editing.")

        elif user == "what are his skills?" or user == "skills":
            print("Portfolio_Bot: Anshdeep's key skills include Python, SQL, Machine Learning, Video Editing, Data Analysis, and Web Development.")

        elif user == "what is his education?" or user == "education":
            print("Portfolio_Bot: Anshdeep is pursuing Bachelor of Computer Applications (Hons. with Research) in Data Science at Chandigarh University.")

        elif user == "show me his projects" or user == "projects":
            print("Portfolio_Bot: Anshdeep has worked on: To-Do List, Employee Payroll Management System, Airplane Management System, Weather Data Analysis, Task Management Website, and Snake Game.")

        elif user == "tell me more about a project" or user == "project details":
            print("Portfolio_Bot: Which project? Try: 'weather analysis' or 'payroll system' or 'task management'")

        elif user == "weather analysis" or user == "weather data analysis":
            print("Portfolio_Bot: The Weather Data Analysis project analyzes weather patterns using Python. Check it out: https://github.com/anshdeepofficial1/Weather-data-analysis")

        elif user == "payroll system" or user == "employee payroll":
            print("Portfolio_Bot: The Employee Payroll Management System is built with Python for managing employee records. Visit: https://github.com/anshdeepofficial1/Employee-Payroll-Management-System")

        elif user == "task management" or user == "task website":
            print("Portfolio_Bot: The Task Management Website helps organize and track tasks efficiently. See: https://github.com/anshdeepofficial1/Task-Management-Website")

        elif user == "what certifications does he have?" or user == "certifications":
            print("Portfolio_Bot: Anshdeep has completed certifications from IBM (Data Structures), University of Michigan (Python for AI), Infosys (Web Development), and LinkedIn Learning.")

        elif user == "how can i contact him?" or user == "contact":
            print("Portfolio_Bot: Email: anshdeep200618@gmail.com | GitHub: anshdeepofficial1 | LinkedIn: anshdeepofficial1 | Phone: +91 97815-70098")

        elif user == "where is he from?" or user == "location":
            print("Portfolio_Bot: Anshdeep is from Khanna, Punjab, India.")

        elif user == "what is his github?" or user == "github":
            print("Portfolio_Bot: GitHub: https://github.com/anshdeepofficial1")

        elif user == "what is his linkedin?" or user == "linkedin":
            print("Portfolio_Bot: LinkedIn: https://www.linkedin.com/in/anshdeepofficial1/")

        elif user == "what is his email?" or user == "email":
            print("Portfolio_Bot: Email: anshdeep200618@gmail.com")

        elif user == "does he do video editing?" or user == "video editing":
            print("Portfolio_Bot: Yes! Anshdeep is also a Content Creator with expertise in video editing. Check his YouTube: @RojanaBhaktii")

        elif user == "what is his experience?" or user == "experience":
            print("Portfolio_Bot: Anshdeep is an aspiring Data Scientist with hands-on experience in Python development, data analysis, machine learning projects, and creative content creation.")

        elif user == "thanks" or user == "thank you":
            print("Portfolio_Bot: No Worries, Always here to help!")

        elif user == "bye":
            print("Portfolio_Bot: Bye! Have A Nice Day. Visit again to learn more about Anshdeep Singh!")
            break

        else:
            print("Portfolio_Bot: Sorry! I Don't Understand. Try asking about: skills, projects, education, certifications, contact, or experience.")

if __name__ == "__main__":
    portfolio_chatbot()
