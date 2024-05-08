import { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  label: {
    root: {
      base: 'text-sm font-normal',
    },
  },
  textInput: {
    field: {
      input: {
        sizes: {
          sm: 'p-2 sm:text-xs',
        },
      },
    },
  },
  button: {
    size: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-1.5 text-base',
      lg: 'px-5 py-2.5 text-base',
      xl: 'px-6 py-3 text-base',
    },
  },
};

export default customTheme;

export const asideModalTheme: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: 'fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',

      sizes: {
        sm: 'max-w-sm',
        md: 'max-w-md min-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
      },
    },
    content: {
      base: 'fixed top-0 right-0 h-screen',
      inner:
        'relative flex h-screen min-w-xl min-w-400px flex-col bg-white shadow dark:bg-gray-700',
    },
    body: {
      base: 'flex-1 overflow-auto p-6',
      popup: 'pt-0',
    },
    header: {
      base: 'flex items-start justify-center border-b p-5 dark:border-gray-600',
      popup: 'border-b-0 p-2',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'header-close inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5',
      },
    },
    footer: {
      base: 'flex items-center justify-end space-x-3 border-gray-200 p-6 dark:border-gray-600',
      popup: 'border-t',
    },
  },
};
