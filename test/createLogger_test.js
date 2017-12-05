import assert from 'assert';
import createLogger from '../src/createLogger';

describe('logEvent', () => {
    let logEvent;
    let logs;
    beforeEach(() => {
        logs = [];
        logEvent = createLogger(logs, { timestamp: () => 'teststamp' });
    });
    it('should add message to logs array', () => {
        logEvent('Hello Logger');
        assert.equal(logs[0], 'teststamp: Hello Logger');
        logEvent('Bye Logger');
        assert.equal(logs[1], 'teststamp: Bye Logger');
    });
});
