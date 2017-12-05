import createEmailSender from './createEmailSender';
import createLogger from './createlogger';
import createOrdersResultsHandler from './createOrdersResultsHandler';

const emails = [];
const logs = [];
const logEvent = createLogger(logs);
const sendEmail = createEmailSender(emails);

export default createOrdersResultsHandler({ logEvent, sendEmail });
