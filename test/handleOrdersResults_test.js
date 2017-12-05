import assert from 'assert';
import createOrdersResultsHandler from '../src/createOrdersResultsHandler';
import createLogger from '../src/createLogger';
import createEmailSender from '../src/createEmailSender';

describe('handleOrdersResults', () => {
    let handler;
    let logEvent;
    let sendEmail;
    let emails;
    let logs;
    let handleOrders;
    beforeEach(() => {
        emails = [];
        logs = [];
        logEvent = createLogger(logs);
        sendEmail = createEmailSender(emails);
        handleOrders = createOrdersResultsHandler({
            logEvent,
            sendEmail
        });
    });
    it('should handle failed orders', () => {
        handleOrders(0, 1);
        assert.equal(emails.length, 2);
        assert.equal(logs.length, 1);
    });
    it('should handle success orders', () => {
        handleOrders(1, 0);
        assert.equal(emails.length, 1);
        assert.equal(logs.length, 1);
    });
    it('should handle no handled orders', () => {
        handleOrders(0, 0);
        assert.equal(emails.length, 1);
        assert.equal(logs.length, 1);
    });
    it('should log all results', () => {
        handleOrders(0, 0);
        assert.equal(emails.length, 1);
        assert.equal(logs.length, 1);
        handleOrders(0, 1);
        assert.equal(emails.length, 3);
        assert.equal(logs.length, 2);
    });
});
