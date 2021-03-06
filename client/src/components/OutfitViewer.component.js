import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';






const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

export default function SwipeableTextMobileStepper(props) {
  const { outfits } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = outfits.length;

  

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    let nextOutfit = outfits[activeStep + 1]
    console.log(nextOutfit)
    props.onChange(activeStep + 1)
    
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    let nextOutfit = outfits[activeStep - 1]
    console.log(nextOutfit)
    props.onChange(activeStep - 1)

   
  };

  

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{outfits[activeStep].label}</Typography>
      </Paper>
      <div>
        <img
        className={classes.img}
        src={outfits[activeStep].top_photo}
        // alt={tutorialSteps[activeStep].label}
        alt="top"
      />
      <img
        className={classes.img}
        src={outfits[activeStep].bottom_photo}
        alt="bottom"
      />

      </div>
      
      <MobileStepper
        
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
