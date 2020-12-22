//1.Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам.
// Метод изменяет исходный массив

// Array.prototype.swap = function (first, second) {
//     let mas = this.valueOf();
//     [mas[first], mas[second]] = [mas[second], mas[first]];
//     return mas;
// };


// let data = ['a', 'c', 'b'];
// console.log(data);
// data = data.swap(1, 2);
// console.log(data); // ['a', 'b', 'c]


//2.
// В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. Игроки должны иметь свойство health -
// которое определяет базовые боевые возможности игрока (выносливость), и power - сила удара.
// Оба свойства определяются при создании экземпляра класса. Также игрок должен иметь метод hit для нанесения удара
// другому игроку. При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока, который
// наносит удар. Также все игроки имеют возможность лечиться - метод heal.
// Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
// Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями.
// И напишите пример боя, используя соответствующие методы и свойства.

function Warrior(hp, power, name) {
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.power = power;
    this.alive = true;
}

Warrior.prototype.hit = function (another) {
    let powerHit = parseInt(this.power + (Math.random() * 20 - 10));

    if (Math.random() < 0.1)
        return console.log(`Miss! ${this.name} is missing!`);
    if (another.hp < powerHit)
        another.hp = 0;
    else another.hp = another.hp - powerHit;
};

Warrior.prototype.heal = function () {
    if (this.hp === this.maxHp)
        return this.hp;
    if (this.hp !== 0)
        this.hp += parseInt(Math.random() * 50);
};


let Pudge = new Warrior(1000, 100, 'Pudge');
let Pharaon = new Warrior(800, 150, 'Pharaon');
let paladin = new Warrior(1500, 80, 'paladin');

for (let i = 0; ; i++) {
    let rand = Math.random().toFixed(2);
    let heroForAttack;

    if (rand < 0.33 && Pudge.alive === true) {

        heroForAttack = Math.random() < 0.5 ? (Pharaon.alive === true ? Pharaon : paladin) : (paladin.alive === true ? paladin : Pharaon);

        Pudge.hit(heroForAttack);
        Pudge.heal();
        console.log(`${i + 1}.  ${Pudge.name} attacked! ${heroForAttack.name} have ${heroForAttack.hp}. 
     ${Pudge.name} healed. ${Pudge.name} ${Pudge.hp} hp `);
        if (heroForAttack.hp === 0) {
            console.log('Ваш персонаж  '+heroForAttack.name + ' сдох  ');
            heroForAttack.alive = false;
        }

    } else if (rand < 0.66 && paladin.alive === true) {


        heroForAttack = Math.random() < 0.5 ? (Pudge.alive === true ? Pudge : Pharaon) : (Pharaon.alive === true ? Pharaon : Pudge);

        paladin.hit(heroForAttack);

        paladin.heal();
        console.log(`${i + 1}.  ${paladin.name} attacked! ${heroForAttack.name} have ${heroForAttack.hp}. 
     ${paladin.name} healed. ${paladin.name} ${paladin.hp} hp `);
        if (heroForAttack.hp === 0) {
            console.log('Ваш персонаж  '+heroForAttack.name + ' сдох  ');
            heroForAttack.alive = false;
        }

    } else if (rand >= 0.66 && Pharaon.alive === true) {

        heroForAttack = Math.random() < 0.5 ? (paladin.alive === true ? paladin : Pudge) : (Pudge.alive === true ? Pudge : paladin);

        Pharaon.hit(heroForAttack);
        Pharaon.heal();
        console.log(`${i + 1}.  ${Pharaon.name} attacked! ${heroForAttack.name} have ${heroForAttack.hp}. 
     ${Pharaon.name} healed. ${Pharaon.name} ${Pharaon.hp} hp `);
        if (heroForAttack.hp === 0) {
            console.log('Ваш персонаж  '+heroForAttack.name + ' сдох  ');
            heroForAttack.alive = false;
        }
    }

    if (Pudge.hp <= 0 && Pharaon.hp <= 0) {
        console.log(`${paladin.name} Ты победил!`);
        break;
    } else if (paladin.hp <= 0 && Pharaon.hp <= 0) {
        console.log(`${Pudge.name} Ты победил!`);
        break;
    } else if (paladin.hp <= 0 && Pudge.hp <= 0) {
        console.log(`${Pharaon.name} Ты победил!`);
        break;
    }
}




