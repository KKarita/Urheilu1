//Perusluokka "Person", jossa esitellään henkilötiedot
class Person {
  constructor(firstnames, lastname, nickname, yearOfBirth) {
    this.firstnames = firstnames;
    this.lastname = lastname;
    this.nickname = nickname;
    this.yearOfBirth = yearOfBirth;
  }

  //Palauttaa henkilön nimen oikeassa muodossa, niin että kutsumanimi on eroteltu "" -merkein.
  getName() {
    return `${this.firstnames} "${this.nickname}" ${this.lastname}`;
  }

  //Lasketaan henkilön ikä sen mukaan, mikä vuosi nyt on menossa.
  getAge() {
    const ongoingYear = new Date().getFullYear();
    return ongoingYear - this.yearOfBirth;
  }
}

//Aliluokka "Athlete", joka perii "Person" -luokan.
//Aliluokkaan lisätään urheilijakohtaista tietoa.
class Athlete extends Person {
  constructor(
    firstnames,
    lastname,
    nickname,
    yearOfBirth,
    picture, //linkki googlen kuvahakuun
    weight,
    sport,
    record
  ) {
    //Kutsutaan perusluokan "Person" konstruktoria.
    super(firstnames, lastname, nickname, yearOfBirth);
    this.picture = picture;
    this._weight = weight;
    this.sport = sport;
    this.record = record;
  }

  //Palautetaan urheilijan paino
  get weight() {
    return this._weight;
  }

  //Asetetaan paino ja tehdään virheentarkistus.
  set weight(kg) {
    if (kg > 0) {
      this._weight = kg;
    } else {
      console.log("Virheellinen paino.");
    }
  }

  //Palautetaan tiedot rivitettynä
  get info() {
    return `Urheilija: ${this.getName()}\nIkä: ${this.getAge()}\nLaji: ${
      this.sport
    }\nSaavutukset: ${this.record}`;
  }
}

//Luodaan uusi urheilija-olio ja annetaan sille tarvittavat tiedot.
const urheilija1 = new Athlete(
  "Kalevi Matti",
  "Kamula",
  "Kalevi",
  1958,
  "https://c7.alamy.com/comp/M7M538/young-athlete-man-running-on-track-in-park-run-athletics-race-M7M538.jpg",
  81,
  "Juoksu",
  "4 arvomitallia"
);

//Tulostetaan urheilijan tiedot konsoliin
console.log(urheilija1.info);
console.log(`Paino ennen: ${urheilija1.weight} kg`);
console.log(`Paino jälkeen: ${urheilija1.weight} kg`);
