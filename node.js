const printer = {
    name: 'Hexlet',
    print(greeting = 'hello') {
      console.log(`${greeting}, ${this.name}`);
    }
  };
  setTimeout(() => printer.print(), 4000);