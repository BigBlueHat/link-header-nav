var events = require("sdk/system/events");
var { Ci } = require("chrome");

function listener(event) {
  var channel = event.subject.QueryInterface(Ci.nsIHttpChannel);
  if (channel.requestSucceeded) {
    console.log(channel.getResponseHeader("Link"));
  }
}

events.once("http-on-examine-response", listener);
