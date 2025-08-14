# Student State Detection - Streamlit Demo

This project demonstrates a student state detection system that identifies three different student states:

1. **Restlessness**: Detected when a student moves their mouse cursor rapidly for more than 2 seconds
2. **Confusion**: Detected when a student frequently changes answers in multiple-choice questions
3. **Boredom**: Detected when there's no activity for a certain period

## Requirements

- Python 3.7+
- Streamlit 1.16.0+

## Installation

1. Clone this repository
2. Install dependencies:

```bash
pip install -r requirements.txt
```

## Running the App

Run the Streamlit app with:

```bash
streamlit run app.py
```

This will start the application and open it in your default web browser.

## How to Test

- **Restlessness**: Move your mouse rapidly back and forth for more than 2 seconds
- **Confusion**: Quickly change between different MCQ options multiple times within 3 seconds
- **Boredom**: Don't interact with the page for 10 seconds

## Technical Details

The app uses:
- Streamlit for the Python web framework
- JavaScript for real-time mouse movement tracking
- HTML/CSS for the quiz interface
- Bidirectional communication between JavaScript and Python 