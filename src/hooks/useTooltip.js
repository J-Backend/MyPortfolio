import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export const useTooltip = () => {
    const getTooltip = () => {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
      return tooltipList;
    };
  
    const disposeTooltip = (tooltipList) => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  
    return { getTooltip, disposeTooltip };
  };
