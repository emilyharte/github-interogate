import React from 'react';
import Bar from './Bar.jsx';


const size = [];
const name = [];

const Repos= (props) => {
    if (props.repos) {
       
        for(let i = 0; i < props.repos.length; i++) {
            size.push(props.repos[i].size);
            name.push(props.repos[i].name);
        }
        return (
            <div>
                <Bar size={size} name={name} />
            </div>
        )
    } else { return null;}
}

export default Repos;