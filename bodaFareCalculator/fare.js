function calculateBodaFare() {
 // Prompting the user to enter distance in kilometers
 let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
 
 //Convert input string to a number
 let distanceInKm = Number(input);
 
 if(isNaN(distanceInKm) || distanceInKm < 0) {
   console.log("Tafadhali ingiza umbali halali wa kilomita.");
   return;
 }
  // fare constants
 const baseFare = 50; //KES 50 base fare
 const chargePerKm = 15; // KES per kilometer

 // Calculation of fare components
 let distanceCharge = distanceInKm * chargePerKm;
 let totalFare = baseFare + distanceCharge;
 
 //print the fare breakdown and total for user
 console.log('Uko kwote? Io ni ${distanceInKm} km:');
 console.log('Ukikalia Pikipiki: KES ${baseFare}');
 console.log('Mpaka Uko: KES ${distanceCharge}');
 console.log('Total:KES ${totalFare}');
 console.log("Panda Pikipiki");
} 
// Call the function to execute the fare calculation
calculateBodaFare();