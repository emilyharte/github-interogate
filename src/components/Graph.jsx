import React from 'react';
import Plot from 'react-plotly.js';
import './Graph.scss'


const Graph = (props) => {

    return (
        <div class="pie">
        <Plot data={[
            {
                values: props.repoSize,
                labels: props.repoNames,
                type: 'pie',
                textinfo: "label+percent",
                textposition: "outside",
                textfont: {
                    color: 'rgb(230, 230, 250)'
                }
            }
        ]}
            layout={{ 
                width: 700, 
                height: 400, 
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:'rgba(0,0,0,0)',
                title: 'Repo Languages',
                font: {
                    color: 'rgb(230, 230, 250'
                },
                showlegend: false,
                
            }}
        />
        </div>
    );
}

export default Graph;