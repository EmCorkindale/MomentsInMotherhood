// import ReactCardSlider from 'react-card-slider-component';
// import sliderClick from 'react-card-slider-component';
import BasicSelect from '../components/Milestones/BasicSelect';
import Cards from '../components/Milestones/Cards';




export function Milestones() {
    return (
        <div className="Milestones">
            <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Milestones</h1>
            <div className='babyDropdown'>
                <BasicSelect />

            </div>
        <Cards/>
        </div >
    )
}