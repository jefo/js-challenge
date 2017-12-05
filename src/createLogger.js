const defaultTimestamp = () => new Date().toISOString();

export default (arr, opts = { timestamp: defaultTimestamp }) =>
    (message) => arr.push(`${opts.timestamp()}: ${message}`);
