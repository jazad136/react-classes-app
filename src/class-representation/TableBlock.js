import React from "react";

class TableBlock extends React.Component { 
    render() { 
        const {name, desc1} = this.props;
    
        return (
            <React.Fragment>
                <td>{name}</td>
                <td>{desc1}</td>
            </React.Fragment>
        );
    }
}

export default TableBlock;