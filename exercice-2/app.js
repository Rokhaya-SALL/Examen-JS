class ThemeSwitcher {
    constructor(bodyElement, lightButton, darkButton) {
      this.body = bodyElement;
      this.lightThemeBtn = lightButton;
      this.darkThemeBtn = darkButton;
  
      
      this.body.classList.remove('dark');
  
      this.lightThemeBtn.addEventListener('click', () => {
        this.body.classList.remove('dark');
        
      });
  
      this.darkThemeBtn.addEventListener('click', () => {
        this.body.classList.add('dark');
      });
    }
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.body;
    const lightButton = document.getElementById('lightThemeBtn');
    const darkButton = document.getElementById('darkThemeBtn');
    
    new ThemeSwitcher(bodyElement, lightButton, darkButton);
  });
  