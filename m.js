var assert = require("assert");

var M = [];
var L = [];

var run_tests = function() {
  handler(11, 0);
  handler(11, 9);
  handler(0, 9);
  handler(0, 0);

  assert.equal(M[0], "\nTO: marketing@acme.test\n11 orders was handled during today successfully.\n");
  assert.equal(M[1], "\nTO: marketing@acme.test\nJust 11 orders was handled during today successfully.\n9 orders had problem with handle\n");
  assert.equal(M[3], "\nTO: marketing@acme.test\nJust 0 orders was handled during today successfully.\n9 orders had problem with handle\n");
};

var handler = function(s, f) {
  if (f) {
    var m = 'Just '+s+' orders was handled during today successfully.\n'+f+' orders had problem with handle';
    send_message('marketing@acme.test', m);
    send_message('support@acme.test', m);
  };

  if (s && !f) {
    var m = s+' orders was handled during today successfully.';
    send_message('marketing@acme.test', m);
  };

  if (!s && !f) {
    var m = message = "No one order wasn't handled during today.";
    send_message('support@acme.test', m);
  };

  if (f) {
    var log_m = 'incident: failed '+f+' orders, success '+s+' orders';
    log_event(log_m);
  };

  if (s && !f) {
    var log_m = 'success: failed '+f+' orders, success '+s+' orders';
    log_event(log_m);
  };

  if (!s && !f) {
    var log_m = 'idle: failed '+f+' orders, success '+s+' orders';
    log_event(log_m);
  };
};

var send_message = function(u, m) {
  M.push('\nTO: '+u+'\n'+m+'\n');
};

var log_event = function(message) {
  var g = new Date();
  g.toISOString();
  L.push(g+' : '+message);
};

run_tests();

console.log(JSON.stringify(M, null, 4));
console.log(JSON.stringify(L, null, 4));
