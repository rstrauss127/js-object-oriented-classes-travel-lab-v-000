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
      const vblocks = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
      const hblocks = Math.abs(this.eastWest.indexOf(this.endingLocation.horizontal) - this.eastWest.indexOf(this.beginningLocation.horizontal))
      return vblocks + hblocks
  }
}
