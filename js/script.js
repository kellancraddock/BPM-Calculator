/* Author: Kellan Craddock

*/

$(function() {
    var $output = $('h1 span');
    var  date = new Date();
    var beats = [{'time': date.getTime(), 'frequency': date.getTime()}];
    var time;
    var bpm = 0;
    
    var interval;
    
    /*
interval = setInterval(function() {
        $.each(beats, function() {
            totalFrequency += this['frequency'];
        });
        //console.log(beats.length);
        bpm = (60000*beats.length)/totalFrequency;
        //console.log(totalFrequency);
        console.log(bpm);
        //$output.text(Math.round(bpm));
    }, 1000); 
*/ 
    
    $('body').bind('click', function() {
        /*
count1 = count2;
        count2 = milliseconds;
        milliseconds = 0;
        
        console.log(count1);
        console.log(count2);
        //add the two counts and divide by 2
        bpm = 60000/((count1 + count2)/2);
*/
        
        if (beats.length >= 10)
            beats.shift();
        var date = date = new Date();  
        time = date.getTime();
        
        beats.push({'time': time, 'frequency': time - beats[beats.length-1]['time']});
        
        var totalFrequency = 0;
        $.each(beats, function() {
            totalFrequency += this['frequency'];
        });
        //console.log(totalFrequency);
        //console.log(beats.length);
        //console.log(beats.length);
        bpm = (60000*beats.length)/totalFrequency;
        //console.log(totalFrequency);
        //console.log(bpm);
        $output.text(Math.round(bpm));
        
    });
});



//number of clicks
//distance between each click
//find the average between the two clicks by add the milliseconds and dividing by two
//then find the bpm by divide 60,000 milliseconds by the resulting number

















