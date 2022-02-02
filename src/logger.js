/* global process:readonly */
// process variable is made availabe by Parcel

// super simple console.log wrapper,
// should be replaced with more featured npm package as required

const loggingEnabled =
    process && process.env && process.env.NODE_ENV !== 'production';
const noop = () => {};

const logMethodsArray = ['debug', 'log', 'warn', 'error'];

const logger = logMethodsArray.reduce((agg, id) => {
    // eslint-disable-next-line no-console
    agg[id] = loggingEnabled ? console[id] : noop;
    return agg;
}, {});

export default logger;
