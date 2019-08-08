module.exports = (path, { opts }) => {
    if (
        (opts.start && opts.start > path.node.loc.start.line) ||
        (opts.end && opts.end < path.node.loc.end.line)
    ) {
        return false;
    }
    return true;
};
