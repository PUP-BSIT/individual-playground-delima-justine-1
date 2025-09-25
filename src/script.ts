enum CharacterType {
  AVENGER = "avenger",
  THUNDERBOLTS = "new avenger",
  VILLAIN = "villain",
  WITCH = "witch",
  WIZARD = "wizard"
}

type Character = {
  full_name: string;
  character_type: CharacterType;
  age?: number;
  birthdate: Date;
  print(): void;
}

const wanda: Character = {
  full_name: "Wanda Maximo,
  character_type: CharacterType.WITCH,
  age: 36,
  birthdate: new Date("1989-02-10"),
  print() {
    console.log("Hey! I am", this.full_name);
    console.log("I am a", this.character_type, "that uses magic.");
    console.log(
      "I was born on", this.birthdate.toDateString(), "and I am ", this.age
    );
  },
}

const doctorStrange: Character = {
  full_name: "Doctor Stephen Vincent Strange",
  character_type: CharacterType.WIZARD,
  birthdate: new Date("1976-11-16"),
  print() {
    console.log("I love you in every universe. -", 
                  this.full_name, 
                  "to Christine");
  },
}

wanda.print();
doctorStrange.print();