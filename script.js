const cells = document.querySelectorAll(".clickable-cell");
const colorPicker = document.getElementById("colorPicker");
const notesInput = document.getElementById('notes'); // Assuming this is an <input>
const submitBtn = document.getElementById('sub');
let activeCell = null;

// Handle color selection
document.querySelectorAll(".colorOption").forEach((option) => {
  option.addEventListener("click", () => {
    if (activeCell) {
      activeCell.style.backgroundColor = option.getAttribute("data-color");
    }
    colorPicker.classList.add("hidden");
  });
});

// Handle cell clicks
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    e.stopPropagation();
    
    // Toggle color picker if clicking the same cell
    if (activeCell === cell && !colorPicker.classList.contains('hidden')) {
      colorPicker.classList.add('hidden');
      activeCell = null;
      return;
    }

    // Update active cell and position color picker
    activeCell = cell;
    const rect = cell.getBoundingClientRect();
    colorPicker.style.top = `${rect.bottom + window.scrollY + 5}px`;
    colorPicker.style.left = `${rect.left + window.scrollX}px`;
    colorPicker.classList.remove("hidden");
  });
});

// Handle note submission
submitBtn.addEventListener('click', () => {
  if (!activeCell) return;

  const words = notesInput.value.trim().split(/\s+/);
  
  // Enforce 3-word limit
  if (words.length > 3) {
    alert("Max 3 words allowed!");
    return;
  }

  // Get the original date number (from dataset or parse from cell)
  let originalNumber = activeCell.dataset.originalNumber;
  if (!originalNumber) {
    // Fallback: Extract just the number part (ignoring any existing notes)
    originalNumber = activeCell.textContent.replace(/\s+/g, ' ').trim().split(' ')[0];
    activeCell.dataset.originalNumber = originalNumber; // Store for future
  }

  // Completely reset cell content
  if (words.length > 0) {
    activeCell.innerHTML = `${originalNumber}<br><small>${words.join(' ')}</small>`;
  } else {
    // If no words, just show the number
    activeCell.textContent = originalNumber;
  }
  
  activeCell.style.whiteSpace = "pre-line";
  colorPicker.classList.add("hidden");
  notesInput.value = ""; // Clear input field
});

// Close color picker when clicking outside
document.addEventListener("click", (e) => {
  if (!colorPicker.contains(e.target) && !Array.from(cells).includes(e.target)) {
    colorPicker.classList.add("hidden");
  }
});