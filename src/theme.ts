import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff4081',
          borderRadius: '50%',
          color: 'black',
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '30px',
          height: '30px',
          minWidth: '0',
          minHeight: '0',
          '&:hover': {
            backgroundColor: '#f50057',
          },
        },
      },
    },
  },
})

export default theme
