import React from 'react';
import Plot from 'react-plotly.js';
import './Graph.scss';

const count = [];
const repoNames = []; 
const SortedList = (props) => {
    if(props.repos) {
        for(let i = 0; i < props.repos.length; i++) {
            repoNames.push(props.repos[i].name);
            count.push(props.repos[i].stargazers_count);
        }

        return (
            <div class="line">
            <Plot 
                data={[
                    {
                    type: 'scatter',
                    x: repoNames,
                    y: count,
                    symbol: 'circle',
                    size: 20,
                    marker: {
                        color: 'rgb(230, 230, 250)',
                        line: {
                            color: 'rgba(156, 165, 196, 1.0)',
                            width: 1,
                          }
                        }
                    }
                ]}
                layout = {{
                    width: 1200, 
                    height: 600, 
                    paper_bgcolor:'rgba(0,0,0,0)',
                    plot_bgcolor:'rgba(0,0,0,0)',
                    title: 'Number of Stars per Repo',
                    font: {
                        color: 'rgb(230, 230, 250'
                    },
                    xaxis : {
                        gridcolor:'rgb(104, 112, 186)'
                    },
                    yaxis : {
                        dtick: 50,
                        gridcolor: 'rgb(104, 112, 186)'
                    },
                    showlegend: false,
                }}
            />
            </div>
        )
    } else {return null;}
}
export default SortedList;