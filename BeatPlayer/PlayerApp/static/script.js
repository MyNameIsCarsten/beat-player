// variable function audio that controls all the components of the music link we passed by calling the components method
var audio = {    
    init: function() {        
    var $that = this;        
        $(function() {            
            $that.components.media();        
        });    
    },

    // defined the components method 
    components: {    
        // initialized a variable function media    
        media: function(target) {
            var media = $('audio.fc-media', (target !== undefined) ? target : 'body'); 

            // checks if the length of the music in the music link is undefined             
            if (media.length) {                
                media.mediaelementplayer({        
                    // sets the value of the audioHeight            
                    audioHeight: 40, // default volume
                    // features attribute that carries all the allowed controls for the audio file.
                    features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                    // specifies if the controls in the features attribute are shown for the users to see or not
                    alwaysShowControls      : true,
                    timeAndDurationSeparator: '<span></span>',
                    // sets the native device attributes
                    iPadUseNativeControls: true,
                    iPhoneUseNativeControls: true,
                    AndroidUseNativeControls: true                
                });            
            }        
        },
            
    },
};

audio.init();