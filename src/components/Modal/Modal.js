/* eslint-disable max-len */
import React from 'react';
import { Typography, Divider, Chip, TextField, Button } from '@material-ui/core';
import SimpleModal from '@material-ui/core/Modal';
import emailjs from 'emailjs-com';

import useStyles from './styles';

const Modal = ({ isOpen, setIsOpen, showFeedback }) => {
  const classes = useStyles();
  let body;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'alan_ai', e.target, 'user_dhVImkgxaL27bxQ8pLPQ5')
      .then((result) => { console.log(result.text); }, (error) => { console.log(error.text); });
  };

  if (isOpen && showFeedback) {
    body = (
      <div className={classes.paper}>
        <Typography variant="h3">Something went wrong? Send us some feedback</Typography>
        <br />
        <form className={classes.form} onSubmit={sendEmail}>
          <TextField name="name" label="Your name" variant="outlined" />
          <br />
          <TextField name="email" type="email" label="Your email" variant="outlined" />
          <br />
          <TextField name="feedback" multiline rows={5} helperText="Describe the problems that you've encontered." label="Feedback" variant="outlined" />
          <br />
          <Button type="submit" variant="outlined" color="primary">Send</Button>
        </form>
      </div>
    );
  } else {
    body = (
      <div className={classes.paper}>
        <Typography variant="h3">Instructions</Typography>
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Country</Typography>
          <div className={classes.chipContainer}>{['Montenegro', 'Serbia', 'North Macedonia', 'USA', 'Russia', 'Ukraine', 'Spain', 'Italy'].map((term) => <Chip label={term} color="primary" className={classes.chip} />)}<Chip label="...and more" className={classes.chip} /></div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>Say: &quot;Show me the latest news from <strong><em>(choose country name)</em></strong>&quot;</Typography>
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Categories</Typography>
          <div className={classes.chipContainer}>{['Music', 'Movies', 'Sports', 'Health', 'Science', 'Sports', 'Technology'].map((category) => <Chip label={category} color="primary" className={classes.chip} />)}</div>
          <Typography variant="body1" className={classes.trySaying}>Say: &quot;Give me the latest <strong><em>Movies</em></strong> news&quot;</Typography>
        </div>
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by News Agency</Typography>
          <div className={classes.chipContainer}>{['BBC News', 'CNN', 'Time', 'FOX News', 'USA Today', 'Reuters'].map((source) => <Chip label={source} color="primary" className={classes.chip} />)}<Chip label="...and more" className={classes.chip} /></div>
          <Typography variant="body1" className={classes.trySaying}>Say: &quot;Give me the news from <strong><em>BBC News</em></strong>&quot;</Typography>
        </div>
        <div className={classes.infoContainer}>
          <Typography variant="body1" className={classes.trySaying}>Say: &quot;Go Back <strong><em>-You will navigate back</em></strong>&quot;</Typography>
        </div>
        <div className={classes.infoContainer}>
          <Typography variant="body1" className={classes.trySaying}>Say: &quot;Yes or NO <strong><em>-If you want or not reading articles titles</em></strong>&quot;</Typography>
        </div>
      </div>
    );
  }

  return (
    <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
      {body}
    </SimpleModal>
  );
};

export default Modal;