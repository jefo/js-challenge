
/**
 * Create orders results handler
 * @param {Function} logEvent
 * @param {Function} sendEmail
 */
export default ({ logEvent, sendEmail }) => (successed = 0, failed = 0) => {
    if (failed) {
        const emailMsg = `Just ${successed} orders was handled during today successfully.\n${failed} orders had problem with handle`;
        sendEmail('marketing@acme.test', emailMsg);
        sendEmail('support@acme.test', emailMsg);
        logEvent(`incident: failed ${failed} orders, success ${successed} orders`);
    }
    if (successed && !failed) {
        sendEmail('marketing@acme.test', `${successed} orders was handled during today successfully.`);
        logEvent(`success: failed ${failed} orders, success ${successed} orders`);
    }
    if (!successed && !failed) {
        sendEmail('support@acme.test', `No one order wasn't handled during today.`);
        logEvent(`idle: failed ${failed} orders, success ${successed} orders`);
    }
}
