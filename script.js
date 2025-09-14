var CharacterType;
(function (CharacterType) {
    CharacterType["AVENGER"] = "avenger";
    CharacterType["THUNDERBOLTS"] = "new avenger";
    CharacterType["VILLAIN"] = "villain";
    CharacterType["WITCH"] = "witch";
    CharacterType["WIZARD"] = "wizard";
})(CharacterType || (CharacterType = {}));
var wanda = {
    full_name: "Wanda Maximoff",
    character_type: CharacterType.WITCH,
    age: 36,
    birthdate: new Date("1989-02-10"),
    print: function () {
        console.log("Hey! I am", this.full_name);
        console.log("I am a", this.character_type, "that uses magic.");
        console.log("I was born on", this.birthdate.toDateString(), "and I am ", this.age);
    },
};
var doctorStrange = {
    full_name: "Doctor Stephen Vincent Strange",
    character_type: CharacterType.WIZARD,
    birthdate: new Date("1976-16-11"),
    print: function () {
        console.log("I love you in every universe. -", this.full_name, "to Christine");
    },
};
wanda.print();
doctorStrange.print();
