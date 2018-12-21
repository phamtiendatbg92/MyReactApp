import React from 'react';
import "../css/ConfigStore.css";
import { subscribeToTimer } from '../../../Socket/api';
class ConfigStore extends React.Component{

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         timestamp: 'no timestamp yet'
    //       };
    //     subscribeToTimer((err, timestamp) => this.setState({ 
    //       timestamp 
    //     }));
    //   }

    render() {
        return(
            <div>
                <h1 className='config-store-mainframe'>This is configuaration store page !!!</h1>
                {/* <p>
      This is the timer value: {this.state.timestamp}
      </p> */}
            </div>
            

        );
    }
}

export default ConfigStore;