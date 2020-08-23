import React, {useState}from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript farmework'
    }, {
        title: 'Why use React?',
        content: 'React is favorite JS library among enginerss'
    }, {
        title: 'How dou you use React?',
        content: 'asdf'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    }, {
        label: 'The Color Green',
        value: 'green'
    }, {
        label: 'The Color Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected,
        setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            <div>
                <Accordion items={items}/>
            </div>
            <div>
                <Search/>
            </div>
            <div>
                <button onClick={() => {
                    setShowDropdown(!showDropdown)
                }}>Toggle Dropdown</button>
                { showDropdown ? (<Dropdown label="Select Color" selected={selected} onSelectedChange={setSelected} options={options}/>) : null}
            </div>
            <div>
                <Translate />
            </div>
        </div>
    );
};

export default App;