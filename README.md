# 💪 BMI Calculator

A sleek, modern BMI (Body Mass Index) calculator built with React. Get instant health insights by simply entering your height and weight. Features a clean dark theme interface with smooth animations and real-time results.

## 🎯 What's This All About?

Ever wondered where you stand on the health spectrum? This BMI Calculator gives you instant feedback on your body mass index with clear, easy-to-understand results. Whether you're tracking fitness goals or just curious, this tool provides quick health insights based on the internationally recognized BMI scale.

## ✨ Features

**Instant Calculation** - Get your BMI result immediately after entering your measurements

**Health Category Classification** - Automatically categorizes your BMI:
  - Underweight (BMI ≤ 18.4)
  - Healthy Weight (BMI 18.5 - 24.9)
  - Overweight (BMI 25.0 - 29.9)
  - Obese (BMI ≥ 30.0)

**Clean Dark Theme** - Modern, eye-friendly dark interface with glassmorphism effects

**Input Validation** - Alerts you if height or weight fields are empty

**Smooth Animations** - Button hover and click effects for better user experience

**Auto-Clear Inputs** - Fields automatically clear after calculation for quick recalculation

**Responsive Design** - Works seamlessly on all device sizes

**Precise Results** - BMI calculated to 2 decimal places for accuracy

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd bmi-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🎮 How to Use

1. Enter your height in centimeters (e.g., 170)
2. Enter your weight in kilograms (e.g., 65)
3. Click the "Calculate" button
4. View your BMI and health category instantly!
5. Fields clear automatically—ready for another calculation

## 🛠️ Built With

**React 19.2.0** - Modern UI library for building interactive interfaces

**Vite** - Lightning-fast build tool and development server

**CSS3** - Custom styling with modern features (flexbox, transitions, box-shadow)

**React Hooks** - useState and useRef for efficient state management

## 📁 Project Structure

```
bmi-calculator/
├── src/
│   ├── App.jsx           # Root component
│   ├── BmiCalc.jsx       # Main BMI calculator component
│   ├── BmiCalc.css       # Component styles
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── public/
│   └── vite.svg          # Vite logo
├── .gitignore            # Git ignore configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # You're reading it!
```

## 🧮 The BMI Formula

The calculator uses the standard BMI formula:

```
BMI = weight (kg) / (height (m))²
```

**Example:**
- Height: 170 cm = 1.7 m
- Weight: 65 kg
- BMI = 65 / (1.7 × 1.7) = 22.49
- Result: Healthy Weight

## 🎨 Design Features

**Color Palette:**
- Background: Dark blue-gray (`rgb(19, 20, 30)`)
- Card: Slightly lighter (`rgb(36, 37, 56)`)
- Inputs: Deep black (`rgb(15, 15, 15)`)
- Accent: Teal blue (`rgb(59, 106, 122)`)
- Text: Alice blue for contrast

**Interactive Elements:**
- Hover effects with scale and translateY transforms
- Active button state with scale animation
- Soft box shadows for depth
- Smooth transitions on all interactive elements

## 📱 Responsive Behavior

The calculator maintains its centered layout and readability across all screen sizes:
- Desktop: Full-sized 400×400px card
- Tablet: Maintains proportions with centered layout
- Mobile: Adapts smoothly to smaller screens

## 🌈 Customization Ideas

Want to personalize it? Try these:

- Add unit toggle (metric/imperial)
- Include age and gender for more accurate categories
- Add visual BMI scale indicator
- Store calculation history
- Add goal tracking features
- Include health tips based on BMI range
- Add dark/light theme toggle
- Include BMI chart visualization
- Add export/share results feature

## 📊 BMI Categories (WHO Standards)

| BMI Range | Category | Health Risk |
|-----------|----------|-------------|
| < 18.5 | Underweight | May indicate malnutrition |
| 18.5 - 24.9 | Healthy Weight | Lower risk |
| 25.0 - 29.9 | Overweight | Increased risk |
| ≥ 30.0 | Obese | High risk |

**Note:** BMI is a screening tool and not a diagnostic measure. Consult healthcare professionals for personalized health advice.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎓 Learning Points

This project demonstrates:
- **React Hooks** - useState for state management, useRef for DOM access
- **Controlled Components** - Managing form inputs in React
- **Event Handling** - onClick events and user interactions
- **Conditional Rendering** - Showing results only after calculation
- **Input Validation** - Checking for empty fields
- **Mathematical Operations** - BMI calculation and rounding
- **CSS Animations** - Smooth transitions and hover effects
- **Component Architecture** - Clean separation of concerns

## ⚕️ Health Disclaimer

BMI is a general indicator and has limitations:
- Doesn't account for muscle mass vs. fat mass
- May not be accurate for athletes or elderly
- Doesn't consider body composition or distribution
- Should be used alongside other health metrics

Always consult healthcare professionals for personalized health assessments.

## 🤝 Contributing

Want to improve this calculator? Feel free to:
- Add new features
- Improve the UI/UX
- Fix bugs
- Enhance accessibility
- Add unit tests
- Improve documentation

## 📄 License

This project is open source and available for personal and educational use.

## 💡 Future Enhancements

Potential features to add:
- [ ] Imperial units support (feet/inches, pounds)
- [ ] BMI history tracking with charts
- [ ] Age and gender considerations
- [ ] Waist-to-hip ratio calculator
- [ ] Body fat percentage estimator
- [ ] Multi-language support
- [ ] Accessibility improvements (ARIA labels)
- [ ] Print/PDF export functionality

---

**Track your health journey, one calculation at a time! 💪**

*Built with React and a commitment to helping people understand their health metrics*
