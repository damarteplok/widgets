import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
]

const App = () => {
    return (
        <div>
            <div>
                <Accordion items={items}/>
            </div>
            <div>
                <Search/>
            </div>
        </div>
    );
};

export default App;