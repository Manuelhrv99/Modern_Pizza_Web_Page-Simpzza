$(function()
{
    var playerTrack = $("#player-track"), 
        albumName = $('#album-name'), 
        trackName = $('#track-name'), 
        albumArt = $('#album-art'), 
        sArea = $('#s-area'), 
        seekBar = $('#seek-bar'), 
        trackTime = $('#track-time'), 
        insTime = $('#ins-time'), 
        sHover = $('#s-hover'), 
        playPauseButton = $("#play-pause-button"),  
        i = playPauseButton.find('i'), 
        tProgress = $('#current-time'), 
        tTime = $('#track-length'), 
        seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime,
        nTime = 0, 
        buffInterval = null, 
        tFlag = false, 
        albums = ['Turbulence','The Pump Panel','UwU','Dangerous Days','Losing It'], 
        trackNames = ['Miami Nights 1984 - Ocean Drive','New Order - Confusion Dub','Halogen - U Got That','Perturbator - Future Club','Fisher - Losing It'], 
        albumArtworks = ['_1','_2','_3','_4','_5'], 
        trackUrl = ['https://raw.githubusercontent.com/Manuelhrv99/Simpzza/main/public/Canciones/Miami_Nights_1984%20-%20Ocean_Drive.mp3',
        'https://raw.githubusercontent.com/Manuelhrv99/Simpzza/main/public/Canciones/New%20Order%20-%20Confusion%20dub.mp3',
        'https://raw.githubusercontent.com/Manuelhrv99/Simpzza/main/public/Canciones/Halogen%20-%20U%20Got%20That.mp3',
        'https://raw.githubusercontent.com/Manuelhrv99/Simpzza/main/public/Canciones/Perturbator%20-%20Future%20Club.mp3',
        'https://raw.githubusercontent.com/Manuelhrv99/Simpzza/main/public/Canciones/FISHER%20-%20Losing%20It.mp3'], 
        playPreviousTrackButton = $('#play-previous'), 
        playNextTrackButton = $('#play-next'), 
        currIndex = -1;

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
                var img_Play_Pausa = document.getElementById("img_Play_Pausa")
                img_Play_Pausa.src = "./Iconos/Pausa R.png"
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
                var img_Play_Pausa = document.getElementById("img_Play_Pausa")
                img_Play_Pausa.src = "./Iconos/Play R.png"
            }
        },300);
    }

    	
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
            selectTrack(1)
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < albumArtworks.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img.active').removeClass('active');
            $('#'+currArtwork).addClass('active');
            
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer()
	{	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);
        
        playNextTrackButton.on('click',function(){ 
                selectTrack(1);
                var img_Play_Pausa = document.getElementById("img_Play_Pausa")
                img_Play_Pausa.src = "./Iconos/Pausa R.png"
        });

        playPreviousTrackButton.on('click',function(){ 
            selectTrack(-1);
            var img_Play_Pausa = document.getElementById("img_Play_Pausa")
            img_Play_Pausa.src = "./Iconos/Pausa R.png"
        });
        
	}
    
	initPlayer();
});

//Metodos para cambiar de color los iconos

//Anterior
var OverA = () => {
    var img_Anterior = document.getElementById("img_Anterior")
    img_Anterior.src = "./Iconos/Anterior M.png"
}
var No_OverA = () => {
    var img_Anterior = document.getElementById("img_Anterior")
    img_Anterior.src = "./Iconos/Anterior R.png"
}
//Play y pausa
var OverPP = () => {
    var img_Play_Pausa = document.getElementById("img_Play_Pausa")
    if(img_Play_Pausa.getAttribute("src") === "./Iconos/Play R.png")
    {
        img_Play_Pausa.src = "./Iconos/Play M.png"
    }
    else if (img_Play_Pausa.getAttribute("src") === "./Iconos/Pausa R.png")
    {
        img_Play_Pausa.src = "./Iconos/Pausa M.png"
    }
}
var No_OverPP = () => {
    if(img_Play_Pausa.getAttribute("src") === "./Iconos/Play M.png")
    {
        img_Play_Pausa.src = "./Iconos/Play R.png"
    }
    else if (img_Play_Pausa.getAttribute("src") === "./Iconos/Pausa M.png")
    {
        img_Play_Pausa.src = "./Iconos/Pausa R.png"
    }
}
//Siguiente
var OverS = () => {
    var img_Siguiente = document.getElementById("img_Siguiente")
    img_Siguiente.src = "./Iconos/Siguiente M.png"
}
var No_OverS = () => {
    var img_Siguiente = document.getElementById("img_Siguiente")
    img_Siguiente.src = "./Iconos/Siguiente R.png"
}