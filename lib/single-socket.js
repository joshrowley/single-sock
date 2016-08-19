const dnode = require('dnode')

var client = dnode({
  onopen: function() {
    console.log('open connection')
  },
  onerror: function(e) {
    console.log('error', e)
  },
  onclose: function() {
    console.log('socket closed')
  },
  onmessage: function(msg) {
    console.log('on message', msg)
  }
}).connect(8000)

client.on('remote', function(remote) {
  remote.connect('ws://vm02.students.learn.co:1337/fs_server?token=62d7a3443382b6e033bc3a4af5511323084973a709b43beeac09995319ee36a9', function(ws) {
    console.log('client received: ', ws)
  })
})

module.exports = client
