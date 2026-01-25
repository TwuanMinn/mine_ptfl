import { useEffect, useCallback } from 'react';

const useKeyboardNavigation = (sections, scrollToSection) => {
  const handleKeyDown = useCallback((event) => {
    // Alt/Ctrl + number keys for quick navigation
    if (event.altKey || event.ctrlKey) {
      const key = event.key;
      
      switch(key) {
        case '1':
          event.preventDefault();
          scrollToSection(sections[0]);
          break;
        case '2':
          event.preventDefault();
          scrollToSection(sections[1]);
          break;
        case '3':
          event.preventDefault();
          scrollToSection(sections[2]);
          break;
        case '4':
          event.preventDefault();
          scrollToSection(sections[3]);
          break;
        case '5':
          event.preventDefault();
          scrollToSection(sections[4]);
          break;
        case 'Home':
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'End':
          event.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          break;
      }
    }
    
    // Escape key to close mobile menu (if it exists)
    if (event.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && mobileMenu.style.display !== 'none') {
        // Toggle mobile menu state would need to be passed or handled differently
        mobileMenu.style.display = 'none';
      }
    }
  }, [scrollToSection, sections]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    keyboardShortcuts: {
      'Ctrl/Cmd + 1': 'Navigate to About',
      'Ctrl/Cmd + 2': 'Navigate to Skills', 
      'Ctrl/Cmd + 3': 'Navigate to Projects',
      'Ctrl/Cmd + 4': 'Navigate to Experience',
      'Ctrl/Cmd + 5': 'Navigate to Contact',
      'Ctrl/Cmd + Home': 'Scroll to top',
      'Ctrl/Cmd + End': 'Scroll to bottom',
      'Escape': 'Close menus'
    }
  };
};

export default useKeyboardNavigation;