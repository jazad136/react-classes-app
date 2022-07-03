import React from "react";

class TableBlock extends React.Component { 
    render() { 
        // const {name, desc1} = this.props.blockData;
        const blocks = this.props.blockData.map((el) => { 
            return (
                <tr>
                    <td>{el.name}</td>
                    <td>{el.desc1}</td>
                </tr>
            )
        });
        return (
            <React.Fragment>
                {/* <td>{name}</td>
                <td>{desc1}</td> */}
                {blocks}
            </React.Fragment>
        );
    }
}

export default TableBlock;