# Sierpinski Triangle GUI

This project is a graphical user interface (GUI) application for generating and visualizing the Sierpinski triangle. Users can modify various settings to customize the appearance and complexity of the triangle.

## Project Structure

```
sierpinski-triangle-gui
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
   cd sierpinski-triangle-gui
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   Open `src/index.html` in a web browser to view the application.

## Usage

- Use the GUI to adjust the settings for the Sierpinski triangle, such as the recursion level and triangle size.
- The triangle will be rendered dynamically based on the selected settings.

## About the Sierpinski Triangle

The Sierpinski triangle is a fractal that is created by recursively subdividing an equilateral triangle into smaller equilateral triangles. This project allows users to explore the beauty of this mathematical construct through interactive visualization.