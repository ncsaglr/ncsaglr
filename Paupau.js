const buttons = document.querySelectorAll('.reveal-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const letterId = button.getAttribute('data-letter');
    const letterDiv = document.getElementById(`letter-${letterId}`);
    
    letterDiv.style.display = 'block';
    
    button.disabled = true;
  });
});