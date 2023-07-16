// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  
  const superbowlWin = (record) => {
    // if (record.result === "W"){
    //     return record.year;
   // record[i].result == "W" ? record[i].year : undefined;
    // for (var j of record) {
    //     if( j.result == "W"){
    //         return j.result == "W" ;
    //     }else{
    //         return undefined;
    //     }
           
    
    // } 
    let findWin;
    for (var item of record){
        findWin = record.find((item) => item.result == "W");
    } 
    return findWin? findWin.year : undefined;  
   
}
   

    
    
    
    
 
    console.log(superbowlWin(record))
    // record.result === "W" ? record.year: undefined;
    // return record.year;

  
// console.log(record.find(superbowlWin));
