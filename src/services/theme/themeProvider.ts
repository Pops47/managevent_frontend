export const themeProvider = {
  input: {
    defaultProps: {
      color: 'orange'
    },
    styles: {
      base: {
        input: {
          borderColor:
            'placeholder-shown:border-orangeDP  placeholder-shown:border-t-orangeDP border-orangeDP',

          color: 'text-white'
        },
        label: {
          color: 'peer-placeholder-shown:text-white',
          borderColor:
            'after:border-orangeDP before:border-orangeDP peer-placeholder-shown:before:border-orangeDP '
        }
      }
    }
  },
  radio: {
    styles: {
      base: {
        input: {
          bg: 'bg-white'
        },
        label: {
          color: 'text-white'
        }
      }
    }
  },
  dialog: {
    styles: {
      base: {
        container: {
          bg: 'bg-darkBlueDP',
          border: 'border-solid',
          borderWidth: 'border-2',
          borderRadius: 'rounded-xl',
          borderColor: 'border-orangeDP',
          display: 'flex',
          flexDirection: 'flex-col',
          paddingBottom: 'pb-10'
        }
      }
    }
  },
  dialogHeader: {
    styles: {
      base: {
        color: 'text-white'
      }
    }
  },
  dialogBody: {
    styles: {
      base: {
        initial: { color: 'text-white' },
        divider: { color: 'text-white' }
      }
    }
  },
  dialogFooter: {
    styles: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-7'
      }
    }
  },
  card: {
    defaultProps: {
      color: 'darkBlueDP'
    },
    valid: {
      colors: ['darkBlueDP']
    },
    styles: {
      variants: {
        filled: {
          darkBlueDP: {
            backgroud: 'darkBlueDP',
            color: 'text-white'
          }
        }
      }
    }
  }
};
