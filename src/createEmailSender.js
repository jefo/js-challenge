export default (arr) => (email, message) => 
    arr.push(`\nTO: ${email}\n${message}\n`);
