import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f27a75"
    
    },
    secondary: {
      light: "#74cff3",
      main: "#74cff3",
      contrastText: "#ffcc00"
    }
  },
  typography: {
    fontSize: 10,
    htmlFontSize: 9,
    fontFamily: "Arial"
  },
  overrides: {
    
    MuiButton: {
      root: {
        color: 'white', 
        backgroundColor: "#4cb7f8",
        "&:hover": {
          backgroundColor: "#4cb7f8 !important",
          color: "white !important"
        },
        padding: "0 30px",
        width: "100px",
        borderRadius: 4,
        border: 0,
        margin: "0px 0px 0px 10px",
        textTransform: "capitalize"

      }
    },
    
    MuiSelect: {
      root: {
        textAlign: "center",
      },
      select: {},
      selectMenu: {
        width: "100%",
        whiteSpace: "pre-line"
      }
    },

    MuiInput: {
      input: {},
      root: {
        marginBottom: "30px",
        // padding: "0 10px"
      }
    },
    MuiTable: {
      root: {
        // display: "block",
        overflowX: "auto"
      }
    },
    MuiTableCell: {
      root: {
        padding: "none",
        textAlign: "center"
      },
     
      body: {
        fontSize: 21,
        whiteSpace: "nowrap",
        backgroundColor: "rgba(167, 116, 209, 0.43)"
      }
    }
  }


});

export default theme;
