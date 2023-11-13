import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function BasicSelect() {
  const [age, setAge] = React.useState('');
  const [openDialogue, setOpenDialogue] = React.useState(false);

  const handleOpenDialogue = () => {
    setOpenDialogue(true);
  }
  const handleCloseDialogue = () => {
    setOpenDialogue(false);
  }
  const handleChange = (event) => {
    setAge(event.target.value);
    handleOpenDialogue();
  };

  const getContents = () => {
    switch (age) {
      case "0 - 3":
        return (
          <div className='0-3Expanded'>
            <DialogContent dividers>
              <Typography gutterBottom>
                By three months most babies will be able to:
              </Typography>
              <Typography gutterBottom>
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
              </Typography>
              <Typography gutterBottom>
                If you’re worried about your baby’s growth or development, talk to your Plunket nurse, other Well Child provider or doctor.
              </Typography>
            </DialogContent>
          </div>
        );
      case "3 - 6":
        return (
          <div className='3-6Expanded'>
            <DialogContent dividers>
              <Typography gutterBottom>
                Most babies this age are eating and sleeping more regularly and interacting with you and other whānau.
                <br />By six months most babies can:
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>roll over </li>
                  <li>reach and grasp for things </li>
                  <li>chew on hands and toys </li>
                  <li>turn towards sounds and voices </li>
                  <li>respond to sound by making noises</li>
                  <li>reach out for toys</li>
                  <li>sit up </li>
                  <li>clap hands</li>
                  <li>can transfer objects from hand-to-hand </li>
                  <li>play peek-a-boo</li>
                  <li>copy you</li>
                  <li>respond to their name</li>
                  <li>understands &quot;no&quot; </li>
                  <li>babble and may say mama, dada, bubba </li>
                  <li>have full-colour vision.</li>
                </ul>
              </Typography>
              <Typography gutterBottom>
                If you notice your child isn’t developing social, communication, or physical skills at the same rate as most other children their age, your child may have a developmental delay. Delays can be short or long-term.
              </Typography>
            </DialogContent>
          </div>
        );
      case "6 - 12":
        return (
          <div className='6-12Expanded'>
            <DialogContent dividers>
              <Typography gutterBottom>
                By twelve months most babies are able to:
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>are curious</li>
                  <li>crawl, bottom shuffle, or walk </li>
                  <li>pull up to stand, or stand for a moment without support </li>
                  <li>wave bye-bye</li>
                  <li>respond to name</li>
                  <li>may say words with meaning, mumma, dada, bubba </li>
                  <li>reach out for toys and pick up small objects </li>
                  <li>watch people and movement with interest</li>
                  <li>follow the movement of a dangling ball in all directions </li>
                  <li>look for hidden or dropped toys</li>
                  <li>turn towards sounds and voices</li>
                  <li>may understand ‘no’ and ‘bye-bye’ </li>
                  <li>copies sounds</li>
                  <li>can say two to three words.</li>
                </ul>
              </Typography>
            </DialogContent>
          </div>
        );
      case "12 - 15":
        return (
          <div className='12-15Expanded'>
            <DialogContent dividers>
              <Typography gutterBottom>
                By 12-15 months old most toddlers:
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>will hug you </li>
                  <li>point to body parts, favourite toys or familiar people when you name them </li>
                  <li>drink from a cup, although there may be some spills</li>
                  <li>use a spoon</li>
                  <li>can follow simple instructions (e.g. ‘Please give me the ball’)</li>
                  <li>try to help when you dress them</li>
                  <li>hold a crayon and possibly scribbles after you show them how.</li>
                </ul>
              </Typography>
              <Typography gutterBottom>
                Children develop at different rates and there&apos;s a wide range of normal.
                Comparing your child to other tamariki can be stressful and may cause you to worry unnecessarily
              </Typography>
            </DialogContent>
          </div>
        );
      case "15 - 18":
        return (
          <div className='15-18Expanded'>
            <DialogContent dividers>
              <Typography gutterBottom>
                By 15-18 months old most toddlers:
              </Typography>
              <Typography gutterBottom>
                <ul>
                  <li>have strong bonds with you, your partner, and/or primary caregiver</li>
                  <li>understand their own name</li>
                  <li>may be walking on their own</li>
                  <li>remove some of their clothes to help you get them undressed</li>
                  <li>sit in a small chair, or try to get into your chair</li>
                  <li>get a toy from another room when you ask</li>
                  <li>pick up very small objects – for example, pebbles or crumbs.</li>
                </ul>
              </Typography>
              <Typography gutterBottom>
                If your child isn’t developing social, communication, or physical skills at the same rate as most other children their age, talk to your Plunket nurse, other Well Child health provider or doctor about your concerns.
              </Typography>
            </DialogContent>
          </div>
        );
      case "18 - 24":
        return (
          <div className='18-24Expanded'>
            <DialogContent dividers>
              <Typography gutterBottom>
                By 18-24 months old most toddlers:
              </Typography>
              <Typography gutterBottom>
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
              </Typography>
              <Typography gutterBottom>
                It&apos;s important to detect any developmental issues early, because it helps ensure your child gets the support they need.
              </Typography>
            </DialogContent>
          </div>
        );
      case "3 - 5 years":
        return (
          <div className='3-5YearsExpanded'>
            <DialogContent dividers>
              <Typography gutterBottom>
                By three to four years old most kids:
                <ul>
                  <li>are more imaginative during play </li>
                  <li>ask lots of ‘who’, ‘what’ and ‘why’ questions</li>
                  <li>can remember nursery rhymes </li>
                  <li>use three to five word sentences or more</li>
                  <li>most people understand what your child says </li>
                  <li>are toilet trained and can pull their pants up and down</li>
                  <li>can feed themselves</li>
                  <li>can put on shoes without laces and undo buttons </li>
                  <li>can ride a tricycle using pedals</li>
                  <li>can build a tower of out cubes.</li>
                </ul>
              </Typography>
              <Typography gutterBottom>
                By four to five years most kids:
                <ul>
                  <li>can understand most of what you say</li>
                  <li>can follow simple two to three step instructions like “can you find your shoes and put them on please?” </li>
                  <li>are more independent</li>
                  <li>can unscrew a lid from a jar </li>
                  <li>know their own gender and age </li>
                  <li>walk up and down stairs</li>
                  <li>know the names of some shapes and colours</li>
                  <li>can hold a pencil and copy some letters (by four years)</li>
                  <li>dress and undress on their own</li>
                  <li>use five to six word sentences or more</li>
                  <li>most people understand what your child says</li>
                  <li>enjoys listening to and telling stories.</li>
                </ul>
              </Typography>
              <Typography gutterBottom>
                Children develop at different rates and there&apos;s a wide range of normal.
              </Typography>
            </DialogContent>
          </div>
        );
      default:
        return null
    }
  }

  return (
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center">
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select your baby&apos;s age...</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="0 - 3">0 - 3 months</MenuItem>
            <MenuItem value="3 - 6">3 - 6 months</MenuItem>
            <MenuItem value="6 - 12">6 - 12 months</MenuItem>
            <MenuItem value="12 - 15">12 - 15 months</MenuItem>
            <MenuItem value="15 - 18">15 - 18 months</MenuItem>
            <MenuItem value="18 - 24">18 - 24 months</MenuItem>
            <MenuItem value="3 - 5 years">3 - 5 years</MenuItem>
          </Select>
        </FormControl>
        <Dialog open={openDialogue} onClose={handleCloseDialogue}>
          <DialogTitle>{age}</DialogTitle>
          <DialogContent>{getContents()}</DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogue}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
}
export default BasicSelect