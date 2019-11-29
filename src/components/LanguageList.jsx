import React from 'react';
import './Graph.scss'
import Plot from 'react-plotly.js';

const langs = [];
const count = [];

const LanguageList = (props) => {
    if (props.repos) {
        
        for(var i = 0; i < props.repos.length; i++){
            if(props.repos[i].language != null) {
                if(langs.indexOf(props.repos[i].language) === -1) {
                  langs.push(props.repos[i].language);
                }
            }
        }
        for(var i = 0; i < langs.length; i++) {
            count[i] = 0;
        }
        for(var i = 0; i < props.repos.length; i++) {
            for(var j = 0; j < langs.length; j++) {
                if(props.repos[i].language === langs[j]) {
                    count[j]++;
                }
            }
        }
        return (
                
            <div class="pie">
            <Plot data={[
                {
                    values: count,
                    labels: langs,
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
        )
    } else { return null; }
};
export default LanguageList;