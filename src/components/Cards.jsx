import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid } from '@mui/material';
import { CardMedia } from '@mui/material'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Cards() {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const [expanded6, setExpanded6] = React.useState(false);

    const handleExpandClick = (cardNumber) => {
        switch (cardNumber) {
            case 1:
                setExpanded1(!expanded1);
                break;
            case 2:
                setExpanded2(!expanded2);
                break;
            case 3:
                setExpanded3(!expanded3);
                break;
            case 4:
                setExpanded4(!expanded4);
                break;
            case 5:
                setExpanded5(!expanded5);
                break;
            case 6:
                setExpanded6(!expanded6);
                break;
            default:
                break;
        }
    };

    return (
        <Box sx={{ ml: 8, mt: 4 }}>
            <Grid container spacing={4} className='cardGrid'>
                {/* Card 1 */}
                <Grid item md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                        <CardMedia component="img"
                            height="194"
                            image='../src/assets/drawing.jpg'
                            alt="line drawing" />
                        <h3>Newborn to three months</h3>
                        <ul><li>smiles</li> <li>holds head up</li><li>cries when there’s a loud noise</li><li>enjoys looking at faces</li></ul>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded1}
                                onClick={() => handleExpandClick(1)}
                                aria-expanded={expanded1}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                            By three months most babies will be able to:
                            <ul>
                                <li>listen to your voice and other sounds </li>
                                <li>try to communicate by making talking sounds </li>
                                <li>stop moving to listen to new sounds</li>
                                <li>wake or stir to loud sounds</li>
                                <li>blink or cry when there&apos;s a sudden noise </li>
                                <li>focus on and follow people and objects in the room</li>
                                <li>close their eyes against a bright light</li>
                                <li>smile at you without being touched or spoken to</li>
                                <li>stare at people’s faces </li>
                                <li>smile and coo</li>
                                <li>watch your face, and try to respond to speech </li>
                                <li>like listening to sounds, voices, and their own cooing </li>
                                <li>start changing their coo to a babble  </li>
                                <li>hold their head up</li>
                                <li>lift their head for a short time when lying on the floor on their tummy.</li>
                            </ul>
                        </Collapse>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                        <CardMedia component="img"
                            height="194"
                            image='../src/assets/drawing.jpg'
                            alt="line drawing" />
                        <h3>Three to six months</h3>
                        <ul><li>rolls over</li> <li>reaches and grasps</li><li>chews on hands and toys</li><li>turns towards sounds and voices</li><li>responds to sound by making noises</li><li>reaches out for toys </li></ul>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded2}
                                onClick={() => handleExpandClick(2)}
                                aria-expanded={expanded2}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                            By six months most babies are able to:
                            <ul>
                                <li>roll over </li>
                                <li>reach and grasp for things </li>
                                <li>chew on hands and toys </li>
                                <li>turn towards sounds and voices </li>                                     <li>respond to sound by making noises</li>
                                <li>reach out for toys</li>
                                <li>sit up </li>
                                <li>clap hands</li>
                                <li>can transfer objects from hand-to-hand </li>
                                <li>play peek-a-boo</li>                                     <li>copy you</li>
                                <li>respond to their name</li>
                                <li>understands &quot;no&quot; </li>
                                <li>babble and may say mama, dada, bubba </li>
                                <li>have full-colour vision.</li>
                            </ul>
                        </Collapse>
                    </Card>
                </Grid>

                {/* Card 3 */}
                <Grid item md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                        <CardMedia component="img"
                            height="194"
                            image='../src/assets/drawing.jpg'
                            alt="line drawing" />
                        <h3>Six to twelve months</h3>
                        <ul><li>can pull to sit up</li> <li>responds to name</li><li>plays peek-a-boo</li><li>turns towards sounds and voices</li><li>may understand &quot;no&quot;</li><li>babble and may say mama, dada, bubba </li><li>wave bye bye</li></ul>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded3}
                                onClick={() => handleExpandClick(3)}
                                aria-expanded={expanded3}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded3} timeout="auto" unmountOnExit>
                            By twelve months most babies are able to:
                            <ul>
                                <li>are curious</li>
                                <li>crawl, bottom shuffle, or walk </li>
                                <li>pull up to stand, or stand for a moment without support </li>
                                <li>wave bye-bye</li>
                                <li>respond to name</li>
                                <li>may say words with meaning, mumma, dada, bubba </li>
                                <li>reach out for toys and pick up small objects </li>
                                <li>watch people and movement with interest</li>
                                <li>follow the movement of a dangling ball in all directions </li>                                     <li>look for hidden or dropped toys</li>
                                <li>turn towards sounds and voices</li>
                                <li>may understand ‘no’ and ‘bye-bye’ </li>                                     <li>copies sounds</li>
                                <li>can say two to three words.</li>
                            </ul>
                        </Collapse>
                    </Card>
                </Grid>

                {/*Card 4*/}
                <Grid item md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                        <CardMedia component="img"
                            height="194"
                            image='../src/assets/drawing.jpg'
                            alt="line drawing" />
                        <h3>Twelve to fifteen months</h3>
                        <ul><li>will hug you</li> <li>can use a spoon</li><li>will try and help you dress them</li><li>can follow simple instructions</li><li>can drink from a cup</li></ul>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded4}
                                onClick={() => handleExpandClick(4)}
                                aria-expanded={expanded4}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded4} timeout="auto" unmountOnExit>
                            By 12-15 months most toddlers will be able to:
                            <ul>
                                <li>will hug you </li>
                                <li>point to body parts, favourite toys or familiar people when you name them </li>
                                <li>drink from a cup, although there may be some spills</li>
                                <li>use a spoon</li>
                                <li>can follow simple instructions (e.g. ‘Please give me the ball’)</li>
                                <li>try to help when you dress them</li>
                                <li>hold a crayon and possibly scribbles after you show them how.</li>
                            </ul>
                        </Collapse>
                    </Card>
                </Grid>

                {/*Card 5*/}
                <Grid item md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                        <CardMedia component="img"
                            height="194"
                            image='../src/assets/drawing.jpg'
                            alt="line drawing" />
                        <h3>Fifteen to eighteen months</h3>
                        <ul><li>understands their own name</li> <li>may be walking on their own</li><li>can sit in a small chair</li><li>can pick up very small objects</li></ul>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded5}
                                onClick={() => handleExpandClick(5)}
                                aria-expanded={expanded5}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded5} timeout="auto" unmountOnExit>
                            By fifteen to eighteen months most toddlers are abe to:
                            <ul>
                                <li>have strong bonds with you, your partner, and/or primary caregiver</li>
                                <li>understand their own name</li>
                                <li>may be walking on their own</li>
                                <li>remove some of their clothes to help you get them undressed</li>
                                <li>sit in a small chair, or try to get into your chair</li>
                                <li>get a toy from another room when you ask</li>
                                <li>pick up very small objects – for example, pebbles or crumbs.</li>
                            </ul>
                        </Collapse>
                    </Card>
                </Grid>

                {/*Card 6*/}
                <Grid item md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                        <CardMedia component="img"
                            height="194"
                            image='../src/assets/drawing.jpg'
                            alt="line drawing" />
                        <h3>Eighteen to twenty four months</h3>
                        <ul><li>understands their own name</li> <li>may be walking on their own</li><li>can sit in a small chair</li><li>can pick up very small objects</li></ul>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded6}
                                onClick={() => handleExpandClick(6)}
                                aria-expanded={expanded6}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded6} timeout="auto" unmountOnExit>
                            By 18-24 months most toddlers are able to:
                            <ul>
                                <li>begin to have temper tantrums</li>
                                <li>may have separation anxiety when they are separated from you</li>
                                <li>start to feed themselves with a spoon or drink from a cup </li>
                                <li>says two to three word sentences</li>
                                <li>asks for ‘more’ and says ‘no’ when asked to do something </li>
                                <li>copies you</li>
                                <li>can sit on their own in a small chair </li>
                                <li>walks around carrying larger objects.</li>
                            </ul>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
};