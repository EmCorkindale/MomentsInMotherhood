import Map from '../components/Map';
import SelectSuburb from '../components/SelectSuburb';
import { useState } from 'react';
import GroupsData from '../Data/Groups.json';

export function Groups() {
    const [suburb, setSuburb] = useState('Addington');
    const filteredGroups = GroupsData.Groups.filter(group => group.properties.Suburb === suburb);

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Parent Groups in Your Area</h1>
            <div className='groups'>
                <Map />
                <div className='filteredGroups'>
                    <div className='selectSuburbDiv'>
                        <SelectSuburb value={suburb} onChange={e => setSuburb(e.target.value)} />
                    </div>
                    <div className='filteredGroupsBox'>
                        {filteredGroups.length > 0 ? (
                            filteredGroups.map(group => (
                                <div key={group.properties.Name}>
                                    <h2>{group.properties.Name}</h2>
                                    <p>{group.properties.Description}</p>
                                    <p>Location: {group.properties.Location}</p>
                                    <p>Time: {group.properties.Time}</p>
                                </div>
                            ))
                        ) : (
                            <p>No parent groups found in this suburb. Check the map fpr oher locations or selct a different suburb.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
