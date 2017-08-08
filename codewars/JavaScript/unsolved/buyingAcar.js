function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    var time = 0;
    while((savingperMonth * time + startPriceOld) < startPriceNew){
        time++;
        startPriceOld *= (1 - percentLossByMonth / 100);
        startPriceNew *= (1 - percentLossByMonth / 100);
        if(time !== 0 && time % 2 === 0){percentLossByMonth += 0.5}
    }
    return [time, ((savingperMonth * time) + startPriceOld - startPriceNew)]
}

console.log(nbMonths(2000, 8000, 1000, 1.5))
// codewars solution:
// function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
//   var months = 0, moneySaved = 0;
//   while (startPriceNew > startPriceOld + moneySaved){
//     moneySaved += savingperMonth;
//     startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
//     startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
//     months++;
//     if (months % 2 == 1){
//       percentLossByMonth += .5;
//     }
//   }
//   return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
// }
