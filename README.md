# EmotionLearn - Neuroadaptive Learning Platform

EmotionLearn is an innovative educational platform that detects and responds to student emotions and learning states in real-time, providing a personalized learning experience.

## The Story Behind EmotionLearn

Three students - Aisha, Miguel, and Sarah - all share a passion for physics, but their learning styles couldn't be more different. Aisha absorbs information best through auditory learning, preferring lectures and voice explanations. Miguel is a visual learner who thrives when concepts are presented through diagrams and animations. Sarah excels when reading detailed theoretical explanations at her own pace.

Traditional education would force them all into the same learning approach. EmotionLearn changes this paradigm by adapting to each student's emotional state and learning preferences, allowing them to learn physics in ways that work best for them individually.

## Features

### 1. Voice Call Integration

- Audio explanations for auditory learners
- Voice-based navigation through learning materials
- Verbal feedback based on detected emotions

### 2. Student State and Emotion Detection

The application uses webcam-based emotion detection to track three key student states:

- **Restlessness**: Detected when rapid cursor movements occur for more than 5 seconds
  - *When detected*: The system displays a "Restlessness Detected" message and offers suggestions to refocus
  
- **Confusion**: Triggered when a student frequently switches between multiple choice options (3+ changes within 5 seconds)
  - *When detected*: The system highlights the confusing content and provides additional explanations
  
- **Boredom**: Identified after 10 seconds of inactivity
  - *When detected*: The system introduces more engaging content or suggests a short break

### 3. Interactive Quiz System

- Modern Physics quiz with timed responses
- Real-time emotion tracking during quiz completion
- Automatic adaptation based on detected emotional states
- Timer with visual warnings when time is running low

### 4. Data Visualization Dashboard

After completing a quiz, students can access:

- Emotion distribution charts
- State duration analytics
- Quiz performance metrics
- Personalized learning recommendations

## How to Use the Application

### Getting Started

1. Clone this repository
2. Navigate to the project directory
3. Start the application:

   **To run the Landing page with full functionality:**
   ```bash
   cd landing
   python server.py
   ```
   Then open the index.html file of "emotion" folder locally in the same browser page with "open with live server". 
   This will open the EmotionLearn landing page at http://localhost:8002
   Now all the servers are currently running. 

### Accessing Features
Open the application in your browser (automatically opens at http://localhost:8000)

#### Voice Call Feature

1. Click on the audio icon in the navigation bar
2. Select "Start Voice Explanation" for audio-based learning
3. Use voice commands like "explain question 2" or "give me more details"

#### Student State and Emotion Detection

1. Open the application in your browser (automatically opens at http://localhost:8000)
2. Allow webcam access when prompted
3. The system will automatically begin tracking your emotional states
4. Your current states (restlessness, confusion, boredom) will be displayed at the top of the screen

#### Taking the Quiz

1. The quiz automatically starts when you open the application
2. Answer the multiple-choice questions about Modern Physics
3. Watch the timer in the top-right corner
4. Submit your answers using the "Submit Quiz" button or wait for the timer to expire

#### Viewing Results and Visualizations

1. After completing the quiz, you'll be automatically redirected to the results page
2. Review your score and emotional state statistics
3. Click "Visualize Results" to access the comprehensive data visualization dashboard
4. Explore the various charts showing your emotional states and learning patterns

## Technical Requirements

- Modern web browser with JavaScript enabled
- Webcam access
- Microphone access (for voice features)
- Local storage enabled

## Privacy Note

All emotion detection and analysis happens locally in your browser. No video or emotion data is sent to any server.