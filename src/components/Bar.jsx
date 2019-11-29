import React from 'react';
import Plot from 'react-plotly.js';
import './Graph.scss';

const Bar = (props) => {
        return (
            <div class="repos">
            <Plot 
            data={[
                {   
                    x: props.name,
                    y: props.size,
                    type: 'bar',
                    marker: {
                        color: 'rgb(140, 140, 223)'
                    }
                }
            ]}
            layout={{
                width: 600,
                height: 400,
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:'rgba(0,0,0,0)',
                title: 'Size of Repos',
                font: {
                    color: 'rgb(230, 230, 250'
                }
            }}
            />
            </div>
        );
}


export default Bar;