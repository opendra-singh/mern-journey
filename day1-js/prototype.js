function ram(child) {
    this.child = child;
}

ram.prototype.battle = function(){
    console.log(this.child + ' is fighting with ansestors');
}

let familyTree = new ram('Luv');

familyTree.battle();