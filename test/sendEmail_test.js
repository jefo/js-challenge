import assert from 'assert';
import createEmailSender from '../src/createEmailSender';

describe('sendEmail', () => {
    let sendEmail;
    let emails;
    beforeEach(() => {
        emails = [];
        sendEmail = createEmailSender(emails);
    });
    it('should add message to emails array', () => {
        sendEmail('support@test.com', 'Hello Support');
        assert.equal(emails[0], `\nTO: support@test.com\nHello Support\n`);
        sendEmail('support@test.com', 'Bye Support');
        assert.equal(emails[1], `\nTO: support@test.com\nBye Support\n`);
    });
});
