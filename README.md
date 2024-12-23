# Sierpinski Curve Generator

This project is a graphical user interface (GUI) application for generating and visualizing Sierpinski curves. Users can modify various settings to customize the appearance and complexity of the curves.

## Project Structure

```
sierpinski-curve-generator
├── src
│   ├── index.html        # Main HTML document
│   ├── styles.css       # Styles for the application
│   ├── app.js           # Entry point for JavaScript code
│   └── components
│       ├── settings.js   # Manages user input settings
│       └── triangle.js    # Renders the Sierpinski triangle
├── package.json          # npm configuration file
├── .gitignore            # Files to ignore in version control
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd sierpinski-curve-generator
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   Open `src/index.html` in a web browser to view the application.

## Usage

- Use the GUI to adjust the settings for the Sierpinski Curve, such as the recursion level and sides.
- The curve will be rendered dynamically based on the selected settings.

## About the Sierpinski Curve

The Sierpinski Curve is a fractal that is created by recursively subdividing an equilateral shape into smaller equivalent shapes. This project allows users to explore the beauty of this mathematical construct through interactive visualization.
