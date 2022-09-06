import React from "react";

class Eliminations extends React.Component {
    constructor(props){
        super(props)
        // Set state to be an empty array to recieve feed from api
        this.state = {
            feed: []
        };
    }

    // Set interval for every 2.5 seconds to send get request from api to mimic killfeed timing.
    // Error handling for unsuccessful requests
    componentDidMount() {
        setInterval(() => {
            fetch("/api/eliminations") //api request to killfeed done in backend eliminations_controller.rb
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "successful") {
                    let updatedState = Object.assign([], this.state.feed);
                    updatedState.push(data);
                    if(updatedState.length > 5) {
                        updatedState.shift();
                    }
                    this.setState({
                        feed: updatedState
                    });
                }
            })
        }, 2500);
    }

    // itterate over state array to display each elimination
    render() {
        console.log(this.state.feed)
        return(
            <div>
                <ul>
                    {this.state.feed.map((elim) => {
                        return  <div>
                                    {elim.payload[0].source_character} eliminated {elim.payload[0].target_character} with {elim.payload[0].method}
                                </div>
                    })}
                </ul>
            </div>
        )
    }
}

export default Eliminations;