import React, {Component} from 'react'
import * as Blueprint from '@blueprintjs/core'
import './Tree.css'

const { ITreeNode, Tooltip, Tree } = Blueprint

class TreeExample extends Component {

  constructor () {
    super ()

    const tooltipLabel = <Tooltip content="An eye!"><span className="pt-icon-standard pt-icon-eye-open"/></Tooltip>;
    const longLabel = "Long label";

    this.state = {
      nodes: [
        {
            key: 0,
            iconName: "pt-icon-projects",
            isExpanded: true,
            label: <Tooltip content="I'm a folder <3">Invoices</Tooltip>,

            childNodes: [
                { iconName: "pt-icon-mugshot", label: "Debtors", secondaryLabel: tooltipLabel },
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
        },

        {
            key: 1,
            hasCaret: false,
            iconName: "dollar",
            label: "Instant Financing",
        },

        {
            key: 2,
            hasCaret: false,
            iconName: "cog",
            label: "Settings",
        }
      ]
    }

  }

  shouldComponentUpdate() {
       return true;
   }

  handleNodeToggle = (nodeData: ITreeNode) => {
    nodeData.isExpanded = !nodeData.isExpanded;
    this.setState(this.state);
  }

  handleNodeCollapse = (nodeData: ITreeNode) => {
    nodeData.isExpanded = false;
    this.setState(this.state);
   }

  handleNodeExpand = (nodeData: ITreeNode) => {
    nodeData.isExpanded = true;
    this.setState(this.state);
  }

  forEachNode(nodes: ITreeNode[], callback: (node: ITreeNode) => void) {
    if (nodes == null) {
        return;
     }

    for (const node of nodes) {
        callback(node);
        this.forEachNode(node.childNodes, callback);
    }
  }

  render () {
    return (
      <div>
        <Tree contents={this.state.nodes}
          onNodeClick={this.handleNodeToggle}
          onNodeCollapse={this.handleNodeCollapse}
          onNodeExpand={this.handleNodeExpand}
          className='tree pt-elevation-0'>
        </Tree>
      </div>
    )
  }
}

export default TreeExample
