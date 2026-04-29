let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let stats in statistics){
    if (stats[0] == 'r' || (typeof statistics[stats] == 'number' && statistics[stats] % 2 != 0)){
        console.log(statistics[stats]);
    }
    
}