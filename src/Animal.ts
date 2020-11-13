class Animal {
  isVertebrate: boolean;
  constructor(public name: string) {
    this.isVertebrate = true;
  }

  get vertebrate(): boolean {
    return this.isVertebrate;
  }

  color: string = 'green';

  @logError('The animal died!')
  vocalize(): void {
    console.log(`The ${this.name} made a sound.`);
    throw new Error('The vocalize method failed!');
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      if (!(method instanceof Function))
        throw new Error('Error: the method must be a function.');
      try {
        method();
      } catch (err) {
        console.error(`Damn, there was an error! ${errorMessage}`);
      }
    };
  };
}

const puck = new Animal('Puck');
puck.vocalize();
