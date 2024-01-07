class User {};
class EUser extends User {};
class EEUser extends EUser {};
let eeuser = new EEUser();
console.log(`${eeuser instanceof User} ${eeuser instanceof EUser} ${eeuser instanceof EEUser}`);