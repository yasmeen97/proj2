
import './App.css';
import PDFViewer from './PDFViewer.js';
import Button from "components/CustomButtons/Button.js";
import WebviewerBackend from './webviewer.js';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import React from "react";
import './timer.css';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import Timerr from "./timer.js";

import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Pdf from "components/Pdf/pdff.js";
import ListO from "./listofq.js";
const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition"




export default function Sect() {
    const classes = useStyles();
    const [classicModal, setClassicModal] = React.useState(false);
 
    return (
      <div className="App">
        <PDFViewer backend={WebviewerBackend} src='/myPDF.pdf' />
        <ListO/>
        <GridContainer>
              <GridItem xs={12} sm={12} md={3} lg={3}>
                <Button
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  <LibraryBooks className={classes.icon} />
              
                Asking Question ? 
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Questions</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>
                    If you have any question about this cource, you can send it to me.. 
                    </p>
                  
                  </DialogContent>  <Timerr/> <ListO/>
                  <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple>
                      ASK
                    </Button>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
            </GridContainer>
     
      </div>
 
 );
}




/*</div>   <Button
                  color="primary"
                  block>
           
         
                </Button>*/