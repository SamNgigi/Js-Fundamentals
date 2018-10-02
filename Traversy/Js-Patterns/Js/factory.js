sup: (() => {
  console.log("Fat arrow IIFE without initializing. Dope stuff");
  console.log("An IIFE stands for Immediately-Invoked-Function-Expressions")
})();


// * FACTORY PATTERN

function MemberFactory() {
  this.createMember = (name, type) => {
    let member;


    if (type === 'free') {
      member = new FreeMembership(name);
    } else if (type === 'basic') {
      member = new StandardMemberShip(name);
    } else if (type === 'premium') {
      member = new PremiumMemberShip(name);
    }

    member.type = type;

    member.define = () => {
      console.log(
        `Username: ${member.name}\nMembership:${member.type}\nFee:${member.fee}:`
      )
    }
    return member;
  }
}

function FreeMembership(name) {
  this.name = name;
  this.fee = "$0";
}

function StandardMemberShip(name) {
  this.name = name;
  this.fee = "$10";
}

function PremiumMemberShip(name) {
  this.name = name;
  this.fee = "$20";
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Mshindi", "free"));

console.log(members);

members.forEach(member => {
  // We call the define method we defined earlier
  member.define();
});