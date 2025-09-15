// Global variable to track animation count
let animationCount = 0;

// Function to start a specific animation
function startAnimation(animationType) {
    const box = document.getElementById('animated-box');
    
    // First remove any existing animations
    box.classList.remove('pulse', 'bounce', 'spin', 'color-change');
    
    // Add the requested animation
    box.classList.add(animationType);
    
    // Update the global counter
    animationCount++;
    console.log(`Started ${animationType} animation. Total animations: ${animationCount}`);
}

// Function to stop all animations
function stopAnimations() {
    const box = document.getElementById('animated-box');
    box.classList.remove('pulse', 'bounce', 'spin', 'color-change');
    console.log("All animations stopped");
}

// Function to change animation duration
function changeAnimationDuration(duration) {
    const box = document.getElementById('interactive-box');
    box.style.animationDuration = `${duration}s`;
    
    // Add animation if not already present
    if (!box.classList.contains('spin')) {
        box.classList.add('spin');
    }
    
    console.log(`Animation duration set to ${duration} seconds`);
}

// Function to toggle animation direction
function toggleAnimationDirection() {
    const box = document.getElementById('interactive-box');
    const currentDirection = box.style.animationDirection || 'normal';
    box.style.animationDirection = currentDirection === 'normal' ? 'reverse' : 'normal';
    console.log(`Animation direction set to ${box.style.animationDirection}`);
}

// Function to generate random color
function randomizeColor() {
    const box = document.getElementById('interactive-box');
    const colors = ['#ff8a00', '#e52e71', '#1a2a6c', '#fdbb2d', '#4CAF50', '#2196F3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    box.style.backgroundColor = randomColor;
    console.log(`Color changed to ${randomColor}`);
}

// Function demonstrating scope
function scopeDemo() {
    // This is a local variable with the same name as the global one
    let animationCount = 5;
    animationCount++; // This affects the local variable, not the global one
    
    const box = document.getElementById('scope-demo-box');
    box.classList.toggle('bounce');
    
    console.log(`Local animationCount: ${animationCount}, Global animationCount: ${window.animationCount}`);
}

// Function to update animation count
function updateAnimationCount() {
    // This creates a local variable with the same name
    let animationCount = 5;
    animationCount++; // This affects the local variable
    
    console.log(`Local count: ${animationCount}, Global count: ${window.animationCount}`);
    
    const box = document.getElementById('scope-demo-box');
    if (!box.classList.contains('pulse')) {
        box.classList.add('pulse');
    }
}

// Function to reset the global counter
function resetCounter() {
    animationCount = 0;
    console.log("Counter reset to 0");
    
    const box = document.getElementById('scope-demo-box');
    box.classList.remove('pulse', 'bounce');
}

// Function to toggle animation
function toggleAnimation() {
    const box = document.getElementById('toggle-box');
    box.classList.toggle('spin');
    box.classList.toggle('color-change');
    
    console.log("Toggled animation. Current classes:", box.classList.toString());
}

// Function to add multiple animations
function addMultipleAnimations() {
    const box = document.getElementById('toggle-box');
    box.classList.add('spin', 'color-change', 'pulse');
    
    console.log("Added multiple animations");
}

// Function to check if element is animating
function checkIfAnimating() {
    const box = document.getElementById('toggle-box');
    const isAnimating = box.classList.contains('spin') || 
                       box.classList.contains('pulse') || 
                       box.classList.contains('bounce') ||
                       box.classList.contains('color-change');
    
    alert(isAnimating ? "Element is currently animating!" : "Element is not animating right now.");
}

// Initialize some animations on page load
window.onload = function() {
    document.getElementById('interactive-box').classList.add('spin');
    document.getElementById('toggle-box').classList.add('color-change');
};