
awesomeProperty = 42;

function testingThis() {
    console.log(this.awesomeProperty);
}

testingThis();

let testing = {
    awesomeProperty: 1337
};

testing.yo = testingThis;

delete testing.awesomeProperty;

testing.yo();

let bindTest = {
    awesomeProperty: "yo-yooo"
};

const boundFunction = testingThis.bind(bindTest);

boundFunction();


function Rapper(name) {
    this.name = name;

    let motto = "Rappers are the best";

    this.sayMotto = function() {
        console.log(motto);
    };

    this.setMotto = function(newMotto) {
        motto = newMotto;
    };
}

Rapper.prototype = {
    speakFast: function() {
        console.log("I'm " + this.name + " yigiriyo!");
    },
    shootGuns: function() {
        console.log("BANG");
    }
};

const eminem = new Rapper("eminem");

eminem.speakFast();

console.log(eminem.__proto__);

console.log(eminem);

eminem.speakFast = function() {
    console.log("yopperiyo");
};

eminem.speakFast();

console.log(eminem);


function EastSideRapper(name) {
    this.name = name;
}

EastSideRapper.prototype = new Rapper("yopp");
EastSideRapper.prototype.dealDrugs = function() {
    console.log("Gimme dat cash");
};

EastSideRapper.prototype.speakFast = function() {
    console.log("East Side is dat BESTEST, yo, I'm " + this.name);
};

const drDre = new EastSideRapper("Dr. Dre");

drDre.speakFast();
drDre.shootGuns();

console.log(drDre.__proto__);
console.log(drDre.__proto__.__proto__);

EastSideRapper.yop = function() {
};

class WestSideRapper extends Rapper {
    constructor(name) {
        super();
        this.name = name;
    }

    pimp() {
        console.log("Ima pimp yo.");
    }
}

const iceCube = new WestSideRapper("Ice Cube");
iceCube.speakFast();
iceCube.pimp();

console.log(typeof WestSideRapper);


function createRapper(name) {
    function shootGuns() {
        console.log("BANG");
    }
    return {
        speakFast: function() {
            console.log("I'm " + name + " yo");
        },
        shootGuns: shootGuns
    };
}

function createEastSideRapper(name) {
    let rapper = createRapper(name);

    const prevSpeakFast = rapper.speakFast;
    rapper.speakFast = () => {
        prevSpeakFast();
        console.log("speaking fast");
    };

    rapper.dealDrugs = () => {
        console.log("YOOOO");
    };

    return rapper;
}

const tupac = createEastSideRapper("2pac");
tupac.speakFast();




//Object.create

const rapper = {
    speakFast: function() {
        console.log("I'm " + this.name + " yigiriyo!");
    },
    shootGuns: function() {
        console.log("BANG");
    }
};

const dopeman = Object.create(rapper, {name: {
    value: "dopeman"
}});
dopeman.speakFast();

let realRappingSkill = 0;
Object.defineProperty(dopeman, "rappingSkill", {
    set: function(newValue) {
        realRappingSkill = newValue / 2;
    },
    get: function() {
        return realRappingSkill;
    }
});

console.log(dopeman.rappingSkill);
dopeman.rappingSkill = 1000000000;
console.log(dopeman.rappingSkill);

//arrow functions and the this keyword

let bindToObj = {
    x: 42
};

let testObj = {
    x: 1337,

    testFunction: (callback) => {
        callback();
    }
}

testObj.testFunction(() => {
    console.log(this.x);
});


function Person() {
    this.age = 0;
    var closure = "123"
    setInterval(function growUp() {
      this.age++;
      console.log(closure)
    }, 1000);
  }
  
  var p = new Person();
  
  function PersonX() {
    'use strict'
    this.age = 0;
    var closure = "123"
    setInterval(()=>{
      this.age++;
      console.log(closure)
    }, 1000);
  }
  
  var px = new PersonX();


