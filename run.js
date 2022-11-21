//FUNCTION TOOLS
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const urlParams = new URLSearchParams(window.location.search);

//TMI.js
let channels = ['colloquialowl'];
if (urlParams.get('channel')) channels = [urlParams.get('channel')];
const client = new tmi.Client({
  channels: channels
});

//TMI.js TRIGGER
client.on("connected", () => console.log('Reading from Twitch! ✅'));
client.connect();
client.on('message', (channel, tags, message, self) => {
  document.body.innerHTML = tags.username + ': ' + message;
  console.log(tags);
});
