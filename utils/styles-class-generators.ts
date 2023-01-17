

/**
 * i have to do this as workaround for tailwind, that purge the class with concatenation 
*/
export function generateBackgroundClass(color: ThemeColor, shade: ThemeColorShade): string {
  //return `bg-${color}-${shade}`
  let background =  ``
  if(color === 'primary') {
    switch(shade) {
      case '50':
        background = 'bg-primary-50';
        break
      case '100':
        background = 'bg-primary-100';
        break
      case '200':
        background = 'bg-primary-200';
        break;
      case '300':
        background = 'bg-primary-300';
        break;
      case '400':
        background = 'bg-primary-400';
        break;
      case '500':
        background = 'bg-primary-500';
        break;
      case '600':
        background = 'bg-primary-600';
        break;
      case '700':
        background = 'bg-primary-700';
        break;
      case '800':
        background = 'bg-primary-800';
        break;
      case '900':
        background = 'bg-primary-900';
        break;
    }
  } else if (color === 'alt') {
    switch(shade) {
      case '50':
        background = 'bg-alt-50';
        break;
      case '100':
        background = 'bg-alt-100';
        break;
      case '200':
        background = 'bg-alt-200';
        break;
      case '300':
        background = 'bg-alt-300';
        break;
      case '400':
        background = 'bg-alt-400';
        break;
      case '500':
        background = 'bg-alt-500';
        break;
      case '600':
        background = 'bg-alt-600';
        break;
      case '700':
        background = 'bg-alt-700';
        break;
      case '800':
        background = 'bg-alt-800';
        break;
      case '900':
        background = 'bg-alt-900';
        break;
    }
  }
  return background
}