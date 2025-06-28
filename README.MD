📌 Overview

A interactive calendar application that lets users:

    Add color-coded notes to specific dates

    View/edit notes with a 3-word limit

    Organize their schedule visually

✨ Features

    Color Coding: Click any date to select a background color

    Note Management:

        Add short notes (max 3 words) under dates

        Notes appear below the date number

        Replace old notes when adding new ones

    Responsive UI: Works on desktop and mobile devices

🛠️ Technical Implementation
HTML Structure
html

<div class="calendar">
  <!-- Calendar grid with clickable cells -->
  <div class="clickable-cell">1</div>
  <!-- ... -->
</div>

<!-- Color picker (hidden by default) -->
<div id="colorPicker" class="hidden">
  <div class="colorOption" data-color="#FF7E5F"></div>
  <!-- More color options -->
</div>

<!-- Notes input -->
<input type="text" id="notes" placeholder="Enter note (max 3 words)">
<button id="sub">Add Note</button>

JavaScript Highlights
javascript

// Main functionality includes:
- Cell click handling
- Color selection
- Note validation and display
- Persistent original dates

CSS Features
css

.clickable-cell {
  /* Cell styling */
  transition: all 0.2s ease;
}

.clickable-cell:hover {
  /* Hover effects */
}

.clickable-cell small {
  /* Note styling */
  font-size: 0.8em;
  color: #555;
}

🚀 Setup Instructions

    Clone the repository

    Open index.html in a browser

    No dependencies required - works with vanilla JS

🎨 Customization

    Add more colors by extending the colorOptions array

    Adjust the 3-word limit by changing the validation in submitBtn click handler

    Modify CSS variables for different themes

🤔 Known Issues

    Notes persist only during current session (no backend storage)

    Mobile touch events might need optimization

📜 License

MIT License - Free for personal and commercial us