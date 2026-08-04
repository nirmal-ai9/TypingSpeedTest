# ⌨️ TypeFlow — Typing Speed Test

![TypeFlow Banner](screenshots/banner.png)

TypeFlow is a modern and interactive **Typing Speed Test Web Application** built using **HTML, CSS, and JavaScript**. It helps users improve their typing speed, accuracy, and productivity by providing real-time feedback, performance statistics, and an engaging user experience.

The application combines a premium glassmorphism UI with smooth animations, real-time typing analysis, and personalized performance tracking.

---

# ✨ Features

## ⌨️ Typing Experience

- Real-time character-by-character typing validation
- Correct and incorrect character highlighting
- Live typing accuracy calculation
- Mistake detection and tracking
- Real-time WPM (Words Per Minute) calculation
- Real-time CPM (Characters Per Minute) calculation
- Smooth typing feedback


## ⏱️ Test Customization

- Multiple difficulty levels:
  - Easy
  - Medium
  - Hard

- Adjustable typing duration:
  - 30 Seconds
  - 60 Seconds
  - 120 Seconds


## 🎨 Modern UI/UX

- Glassmorphism design
- Animated gradient background
- Floating glowing background effects
- Cursor-following glow effect
- 3D card tilt interaction
- Smooth transitions and animations
- Responsive design for all devices


## 🏆 Performance Tracking

- Animated result dashboard
- Final performance summary
- WPM score tracking
- Accuracy tracking
- Mistake analysis
- Best score saved using Local Storage
- Confetti celebration after completing the test


## 🌙 Personalization

- Dark mode / Light mode support
- Keyboard sound feedback
- Interactive buttons
- Micro animations
- Premium user interface experience

---

# 🚀 Live Demo

```
https://yourusername.github.io/Typing-Speed-Test/
```

---

# 📸 Screenshots

## 🏠 Home Interface

![Home Screen](screenshots/home.png)


## ⌨️ Typing Test

![Typing Screen](screenshots/typing.png)


## 🎉 Result Dashboard

![Result Screen](screenshots/result.png)

---

# 🛠️ Technologies Used

## Frontend Technologies

| Technology | Purpose |
|------------|---------|
| HTML5 | Website structure |
| CSS3 | Styling, animations, responsive design |
| JavaScript ES6 | Application logic and interactions |


## External Resources

| Resource | Purpose |
|----------|---------|
| Google Fonts | Modern typography |
| Canvas Confetti | Celebration animation |

---

# 📂 Project Structure

```
Typing-Speed-Test/

│
├── assets/
│   └── sounds/
│       └── key.mp3
│
├── screenshots/
│   ├── banner.png
│   ├── home.png
│   ├── typing.png
│   └── result.png
│
├── index.html
├── style.css
├── script.js
├── paragraphs.js
│
├── README.md
└── LICENSE
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/Typing-Speed-Test.git
```

---

## Navigate to Project Directory

```bash
cd Typing-Speed-Test
```

---

## Run Application

Open:

```
index.html
```

in your browser.

No additional installation or dependencies are required.

---

# 🎮 How To Use

1. Open the TypeFlow application
2. Select your preferred difficulty level
3. Choose test duration
4. Click the **Start Test** button
5. Type the displayed paragraph
6. Monitor your live performance:
   - WPM
   - CPM
   - Accuracy
   - Mistakes
7. View your final typing result

---

# 🧠 Application Workflow

```
User Opens Website

        ↓

Select Difficulty & Duration

        ↓

Start Typing Test

        ↓

Timer Starts

        ↓

Character Validation

        ↓

Performance Calculation

        ↓

Timer Completion

        ↓

Result Dashboard

        ↓

Save Best Score
```

---

# 📊 Calculation Logic

## Words Per Minute (WPM)

```
WPM = Typed Characters / 5 / Time(minutes)
```

---

## Characters Per Minute (CPM)

```
CPM = Total Typed Characters / Time(minutes)
```

---

## Accuracy

```
Accuracy =
Correct Characters /
Total Typed Characters × 100
```

---

# 🎯 Key Functional Modules

## 1. Paragraph Management

- Stores multiple typing passages
- Filters paragraphs based on difficulty
- Randomly selects typing content


## 2. Typing Engine

- Tracks every keystroke
- Compares user input with original text
- Highlights correct and incorrect characters


## 3. Timer System

- Supports multiple durations
- Automatically ends the test
- Displays remaining time


## 4. Performance Analyzer

Calculates:

- Words per minute
- Characters per minute
- Accuracy percentage
- Total mistakes


## 5. Result System

- Displays final score
- Stores personal best score
- Provides performance feedback

---

# 🔮 Future Improvements

Future enhancements planned:

- [ ] User authentication system
- [ ] Online leaderboard
- [ ] Global typing competition
- [ ] User profile dashboard
- [ ] More typing passages
- [ ] Custom paragraph upload
- [ ] Typing history tracking
- [ ] AI-based typing improvement suggestions
- [ ] Multiplayer typing race
- [ ] Backend integration

---

# 🤝 Contribution

Contributions are welcome.

Follow these steps:

### 1. Fork Repository

### 2. Create New Branch

```bash
git checkout -b feature/new-feature
```

### 3. Commit Changes

```bash
git commit -m "Add new feature"
```

### 4. Push Changes

```bash
git push origin feature/new-feature
```

### 5. Create Pull Request

---

# 👨‍💻 Author

## Samir Pokhrel

B.Sc. CSIT Student  
Frontend Developer | Django Developer | Data Enthusiast

GitHub:

```
https://github.com/yourusername
```

LinkedIn:

```
https://linkedin.com/in/yourprofile
```

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.

Your feedback and suggestions are always welcome.