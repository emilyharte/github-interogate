import React from 'react';
import Graph from './Graph';
import './Graph.scss'

let langs = '';
let i = '';


const LanguageList = (props) => {
    if (props.langslist) {
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {console.log(i=i+value)}
                        {console.log(langs=langs+key+'.')}
                   
                    </li>
                    
                )}
                <div>
                    <Graph repoSize={i.split('')} repoNames={langs.split('.')}/>
                   { i= ''};
                   {langs = ''};
                </div>

            </ul>

        )
    } else { return null; }
};
export default LanguageList;