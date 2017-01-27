import React, {Component} from 'react'
import * as Blueprint from '@blueprintjs/core'

const { Classes, ITreeNode, Tooltip, Tree } = Blueprint

class TreeExample extends Component {

  constructor () {
    super ()

    const tooltipLabel = <Tooltip content="An eye!"><span className="pt-icon-standard pt-icon-eye-open"/></Tooltip>;
    const longLabel = "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.";

    this.state = {
      nodes: [
        {
            hasCaret: true,
            iconName: "folder-close",
            label: "Folder 0",
        },
        {
            iconName: "folder-close",
            isExpanded: true,
            label: <Tooltip content="I'm a folder <3">Folder 1</Tooltip>,

            childNodes: [
                { iconName: "document", label: "Item 0", secondaryLabel: tooltipLabel },
                { iconName: "pt-icon-tag", label: longLabel },
                {
                    hasCaret: true,
                    iconName: "pt-icon-folder-close",
                    label: <Tooltip content="foo">Folder 2</Tooltip>,
                    childNodes: [
                        { label: "No-Icon Item" },
                        { iconName: "pt-icon-tag", label: "Item 1" },
                        {
                            hasCaret: true, iconName: "pt-icon-folder-close", label: "Folder 3",
                            childNodes:  [
                                { iconName: "document", label: "Item 0" },
                                { iconName: "pt-icon-tag", label: "Item 1" },
                            ],
                        },
                    ],
                },
            ]
        }
      ]
    }

  }

  shouldComponentUpdate() {
       return true;
   }

  render () {
    return (
      <div>
        <Tree contents={this.state.nodes}>
        </Tree>
      </div>
    )
  }
}

export default TreeExample
