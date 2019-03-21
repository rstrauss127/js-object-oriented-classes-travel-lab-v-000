class Driver {
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   }

   startDate() {
     return startDate;
   }

   yearsExperienceFromBeginningOf(year) {
     return year-this.startDate.year;
   }
}
