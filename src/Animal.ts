@classDecorator
class Animal {
  isVertebrate: boolean;
  feet: number = 0;
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

  move(@paramDecorator feet: number): void {
    this.feet += feet;
  }
}

function paramDecorator(target: any, key: string, index: number) {
  console.info('key', key);
  console.info('index', index);
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

function classDecorator(constr: Function) {
  console.info('Constructor decorated', constr);
}
