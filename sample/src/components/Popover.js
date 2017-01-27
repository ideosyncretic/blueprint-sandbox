import React, {Component} from 'react'
import * as Blueprint from '@blueprintjs/core'

const { Button, Popover, PopoverInteractionKind, Position } = Blueprint;

 class PopoverExample extends Component {
     render() {
        let popoverContent = (
            <div>
                <h5>Tooltip</h5>
                <p>Insert helpful comment here!</p>
            </div>
        );

        // popover content gets no padding by default, so we can add the
        // .pt-popover-content-sizing class to get nice padding between
        // the edge of the popover and our popover content. We also get
        // a default width for our content if the popover is inline.
        return (
            <Popover content={popoverContent}
                     interactionKind={PopoverInteractionKind.HOVER}
                     popoverClassName="pt-popover-content-sizing"
                     position={Position.RIGHT}
                     useSmartPositioning={false}>
                <Button className="pt-button pt-intent-primary">Button with Tooltip</Button>
            </Popover>
        );
    }
}

export default PopoverExample
