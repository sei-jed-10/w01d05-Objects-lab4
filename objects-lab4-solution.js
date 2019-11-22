

const user = {
    name : "Saeed",
    bornOn :  "1980-05-12",
    calorieTarget : 2000,
    meals : [
      {
        title : "breakfast",
        date : "2016-06-25",
        description : "two slices of sprouted grain bread with half a medium avocado",
        calories : 350 
      },
       {
        title : "lunch",
        date : "2016-06-25",
        description : "Mexican salad bowl with beans, salsa, corn and avocado",
        calories : 700 
      },
      {
        title : "dinner",
        date : "2016-06-24",
        description : "three ounces of pan-seared salmon, half a cup of brown rice and sauteed spinach ",
        calories : 700.5 
      }],
   caloriesEatenOn : function(date){
      
       let caloriesPerDate =0;
        for (const i in this.meals)
        {
          if (this.meals[i].date == date)
          caloriesPerDate += this.meals[i].calories;
        }
        return caloriesPerDate;
   },
   avgDailyCalories : function()
   {
     // calculate total calories consumed 
     // create object with each date as a key and total calories this date as a value 
   
     let caloriesPerDate = {};
   
     let totalcaloreis = 0 ;
     for (let i =0 ; i< this.meals.length ; i++)
       { // if this date is not counted yet add it with its number of calories
           if (caloriesPerDate[this.meals.date] == undefined)
           caloriesPerDate[this.meals[i].date] =  this.caloriesEatenOn (this.meals[i].date)
        } 
   
      // from the caloriesPerDate calculate the average , each key is a new date
      let numerOfDates = 0 ;
      let total = 0 ;
      for (const key in caloriesPerDate)
      {
        numerOfDates ++ ;
        total += caloriesPerDate[key];
      }
      return Math.floor(total / numerOfDates) ; 
   },
    onTrack : function()
    {
       let averageDailyCalories = this.avgDailyCalories();
       if (averageDailyCalories <= this.calorieTarget)
       return true;
       return false;
      }
   }
   console.log (user.caloriesEatenOn("2016-06-25"));
   console.log (user.avgDailyCalories());
   console.log (user.onTrack());
   
   