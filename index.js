class Driver {
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   }

   startDate() {
     return startDate;
   }

   yearsExperienceFromBeginningOf(year) {
     return year-this.startDate.getFullYear();
   }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;

    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
  }

  blocksTravelled(){
    return this.beginningLocation.horizontal
}
}
