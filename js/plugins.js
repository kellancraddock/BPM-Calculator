
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
function BPM() {
    var self = this;
    var $output = $('h1 span');
    var date = new Date();
    var beats = [{'time': date.getTime(), 'frequency': 0}];
    var time;
    var bpm = 0;
    
    var outputInterval;
    var degradeInterval;
    var timeout;
    
    this.construct = function() {
        $('body').bind('click touchend', function() {
            
            clearTimeout(timeout);
            clearInterval(degradeInterval);
            
            if (beats.length >= 20)
                beats.shift();
            var date = new Date();  
            time = date.getTime();
            console.log(beats);
            beats.push({'time': time, 'frequency': time - beats[beats.length-1].time});
            
            var totalFrequency = 0;
            $.each(beats, function() {
                totalFrequency += this.frequency;
            });
            
            bpm = Math.round((60000*beats.length)/totalFrequency);
            
            timeout = setTimeout(function() {
                self.degrade();
            }, 5000);
        });
        
        outputInterval = setInterval(function() {
            self.setOutput(bpm);
        }, 100);
    };
    
    this.degrade = function() {
    
        var date = new Date();
        beats = [{'time': date.getTime(), 'frequency': 0}];
        
        degradeInterval = setInterval(function() {
            if (bpm <= 10) {
                bpm = 0;
                clearInterval(degradeInterval);
                self.setOutput(bpm);
            } else { 
                bpm = bpm-10;
                self.setOutput(bpm);
            }
        }, 500);
    }
    
    this.setOutput = function(output) {
        $output.text(output);
    }
    
    this.construct();
}