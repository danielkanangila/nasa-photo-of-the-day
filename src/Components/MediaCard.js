import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '100%',
    marginTop: 40,
    textAlign: 'left'
  },
  media: {
    height: 400,
  },
  title: {
    textAlign: 'center'
  },
  date : {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 13,
  }
});

const MediaCard = props => {
    const { date, explanation, hdurl, url, title } = props
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://apod.nasa.gov/apod/image/1203/angrysun_friedman_1080.jpg"
          title={title}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            Angry Sun Erupting
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It's one of the baddest sunspot regions in years. Active Region 1429 may not only look, to some, like an angry bird -- it has thrown off some of the most powerful flares and coronal mass ejections of the current solar cycle. The extended plumes from these explosions have even rained particles on the Earth's magnetosphere that have resulted in colorful auroras. Pictured above, AR 1429 was captured in great detail in the Sun's chromosphere three days ago by isolating a color of light emitted primarily by hydrogen. The resulting image is shown in inverted false color with dark regions being the brightest and hottest. Giant magnetically-channeled tubes of hot gas, some longer than the Earth, are known as spicules and can be seen carpeting the chromosphere. The light tendril just above AR 1429 is a cool filament hovering just over the active sunspot region. As solar maximum nears in the next few years, the increasingly wound and twisted magnetic field of the Sun may create even more furious active regions that chirp even more energetic puffs of solar plasma into our Solar System. Gallery: See images of the latest planetary conjunction,
          </Typography>
          <Typography className={classes.date} color="textSecondary" component="p">
            Date: 2012-03-14
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard