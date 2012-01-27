/* Author: Kellan Craddock

*/

$(function() {
    var $output = $('h1 span');
    var seconds = 0;
    var interval;
    var milliseconds = 0;
    var count1 = 0;
    var count2 = 0;
    var bpm = 0;
    
    interval = setInterval(function() {
        milliseconds++;
        /*
if ($seconds >= 60) {
            $seconds = 0;
            $count = 0;
        }
        $seconds++;
        $output.text();
*/
        $output.text(Math.round(bpm));
    }, 1);
    
    
    $('body').bind('click', function() {
        count1 = count2;
        count2 = milliseconds;
        milliseconds = 0;
        
        console.log(count1);
        console.log(count2);
        //add the two counts and divide by 2
        bpm = 60000/((count1 + count2)/2);
        
        
        
    });
});



//number of clicks
//distance between each click
//find the average between the two clicks by add the milliseconds and dividing by two
//then find the bpm by divide 60,000 milliseconds by the resulting number

















