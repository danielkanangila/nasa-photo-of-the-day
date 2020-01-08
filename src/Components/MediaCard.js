import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    marginTop: 40,
    textAlign: 'left',
    background: theme.palette.common.white
  },
  media: {
    height: 400,
  },
  title: {
    textAlign: 'center'
  },
  cardFooter : {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 13,
  },
  copyright: {
    display: 'block',
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 13,
  }
}));

const MediaCard = props => {
    const { date, explanation, url, title, copyright } = props
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url }
          title={title}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { explanation }
          </Typography>
          <Typography className={classes.cardFooter} color="textSecondary" component="p">
            Date: {date}
            <Typography className={classes.copyright} component="span">
              Copyright: {copyright}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard