// src/main.ts

// Function to toggle the door state
function toggleDoor() {
  const door = document.querySelector('.door') as HTMLElement;
  const button = document.querySelector('.adventure') as HTMLElement;

  if (door.classList.contains('open')) {
    door.classList.remove('open');
    if (button) {
      button.style.display = 'none'; // Hide the button when the door closes
    }
  } else {
    door.classList.add('open');
    if (button) {
      button.style.display = 'inline-block'; // Show the button when the door opens
    }
  }
}

// Function to display the letter and hide other elements
function startAdventure() {
  const door = document.querySelector('.door') as HTMLElement;
  const button = document.querySelector('.adventure') as HTMLElement;
  const letter = document.querySelector('.letter') as HTMLElement;

  if (door) {
    door.classList.add('hidden'); // Hide the door when the adventure starts
  }
  if (button) {
    button.classList.add('hidden'); // Hide the adventure button
  }
  if (letter) {
    letter.classList.remove('hidden'); // Show the letter
  }
}

// Event listener for click events on the handle
document.addEventListener('DOMContentLoaded', () => {
  const handle = document.querySelector('.handle') as HTMLElement;
  const adventureButton = document.querySelector('.adventure') as HTMLElement;

  if (handle) {
    handle.addEventListener('click', toggleDoor);
  }

  if (adventureButton) {
    adventureButton.addEventListener('click', startAdventure);
  }
});
