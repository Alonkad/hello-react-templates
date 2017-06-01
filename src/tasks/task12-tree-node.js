define(['react', 'lodash', './task12-tree-node.rt'], function (React, _, template) {
    'use strict';

    var treeNode = React.createClass({
        displayName: 'TreeNode',

        getTreeNodeClass: function () {
            return treeNode
        },

        render: template
    });

    return treeNode;
});
