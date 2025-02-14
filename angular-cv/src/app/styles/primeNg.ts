import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

const theme = providePrimeNG({
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || 'none',
    },
  },
});

export default theme;
