class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  gamble(treasure) {
    super.forage();
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }

};
