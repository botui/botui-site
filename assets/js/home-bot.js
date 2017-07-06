
var homeBot = BotUI('home-demo');

homeBot.message.add({
  content: 'Hello there!'
}).then(function () {
  return homeBot.message.add({
    delay: 1500,
    content: 'Wanna see a demo of what BotUI can do?'
  });
}).then(function () {
  return homeBot.action.button({
    delay: 1000,
    action: [{
      text: 'Sure!',
      value: 'sure'
    }, {
      text: 'Just skip to end 😒',
      value: 'skip'
    }]
  });
}).then(function (res) {
  if(res.value == 'sure') {
    tutorial();
  }
  if(res.value == 'skip') {
    end();
  }
});

var tutorial = function () {
  homeBot.message.add({
    delay: 1000,
    content: "Awesome! Here's a text input .."
  }).then(function () {
    return homeBot.message.add({
      delay: 1200,
      content: 'Whats your name?'
    });
  }).then(function () {
    return homeBot.action.text({
      delay: 800,
      action: {
        value: 'John Doe',
        placeholder: 'Your name'
      }
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 500,
      content: res.value + ' is a nice name!'
    });
  }).then(function () {
    return homeBot.message.add({
      delay: 1400,
      content: "Here's a number input."
    });
  }).then(function () {
    return homeBot.message.add({
      delay: 1000,
      content: 'How about your age?'
    });
  }).then(function () {
    return homeBot.action.text({
      delay: 800,
      action: {
        value: '18',
        sub_type: 'number',
        placeholder: 'Your age'
      }
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 1000,
      content: 'Cool.'
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 1000,
      content: 'Here is an obligatory (embeded) gif for ya'
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 1000,
      type: 'embed',
      content: 'https://giphy.com/embed/LYDNZAzOqrez6'
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 2500,
      content: 'There is a lot more you can do with BotUI'
    });
  }).then(function (res) {
    return homeBot.message.add({
      delay: 1000,
      content: 'Now go on, explore the docs and build yourself a bot.'
    });
  }).then(end);
};

var end = function () {
  homeBot.message.add({
    delay: 1000,
    content: '!(book) [Read the docs](https:///docs.botui.org) or see !(github) [GitHub](https://github.com/moinism/botui)'
  });
};
