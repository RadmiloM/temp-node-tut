const os = require(`os`);

// info abuot current user
const user = os.userInfo();
console.log(user);
// method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMEm: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
