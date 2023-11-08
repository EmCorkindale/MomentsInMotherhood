import ReactCardSlider from 'react-card-slider-component';
import sliderClick from 'react-card-slider-component';
import BasicSelect from '../components/BasicSelect';

const slides = [
    { image: "https://picsum.photos/200/300", title: "Newborn to three months", description: <ul><li>smiles</li> <li>holds head up</li><li>cries when there’s a loud noise</li><li>enjoys looking at faces</li></ul>, clickEvent: sliderClick },
    { image: "https://picsum.photos/600/500", title: "Three to six months", description: <ul><li>rolls over</li> <li>reaches and grasps</li><li>chews on hands and toys</li><li>turns towards sounds and voices</li><li>responds to sound by making noises</li><li>reaches out for toys </li></ul>, clickEvent: sliderClick },
    { image: "https://picsum.photos/700/600", title: "Six to twelve months", description: <ul><li>can pull to sit up</li> <li>responds to name</li><li>plays peek-a-boo</li><li>turns towards sounds and voices</li><li>may understand &quot;no&quot;</li><li>babble and may say mama, dada, bubba </li><li>wave bye bye</li></ul>, clickEvent: sliderClick },
    { image: "https://picsum.photos/500/400", title: "Twelve to fifteen months", description: <ul><li>will hug you</li> <li>can use a spoon</li><li>will try and help you dress them</li><li>can follow simple instructions</li><li>can drink from a cup</li></ul>, clickEvent: sliderClick },
    { image: "https://picsum.photos/200/300", title: "Fifteen to eighteen months", description: <ul><li>understands their own name</li> <li>may be walking on their own</li><li>can sit in a small chair</li><li>can pick up very small objects</li></ul>, clickEvent: sliderClick },
    { image: "https://picsum.photos/800/700", title: "Eighteen to Twenty Four months", description: <ul><li>understands their own name</li> <li>may be walking on their own</li><li>can sit in a small chair</li><li>can pick up very small objects</li></ul>, clickEvent: sliderClick },
    { image: "https://picsum.photos/300/400", title: "Three to Five years", description: <ul><li>asks lots of &quot;who&quot; and &quot;why&quot; questions</li> <li>uses three to five word sentences more</li><li>keen to stop wearing nappies and use the toilet/potty</li><li>can feed themself</li><li>can ride a tricycle</li></ul>, clickEvent: sliderClick },

]





export function Milestones() {
    return (
        <div className="Milestones">
            <h1>How old is your baby?</h1>
            <div className='babyDropdown'>
                <BasicSelect/>

            </div>

            <ReactCardSlider slides={slides} />
        </div >
    )
}