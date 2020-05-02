function getCompleteObjectPropertyName(node, nameString = '') {
    if (node.property && node.property.type == 'Identifier') {
        nameString = '.' + node.property.name + nameString;
        return getCompleteObjectPropertyName(node.object, nameString);
    } else {
        return node.name + nameString;
    }
}

module.exports = { getCompleteObjectPropertyName };
