 // Toggle play/pause button
        const playPauseBtn = document.querySelector('.play-pause');
        const playIcon = playPauseBtn.querySelector('i');
        
        playPauseBtn.addEventListener('click', function() {
            if (playIcon.classList.contains('fa-play')) {
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
            } else {
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        });
        
        // Update progress bar on click
        const progressContainer = document.querySelector('.progress-container');
        const progress = document.querySelector('.progress');
        
        progressContainer.addEventListener('click', function(e) {
            const containerWidth = progressContainer.clientWidth;
            const clickX = e.offsetX;
            const progressPercent = (clickX / containerWidth) * 100;
            
            progress.style.width = `${progressPercent}%`;
        });
        
        // Update volume level on click
        const volumeSlider = document.querySelector('.volume-slider');
        const volumeLevel = document.querySelector('.volume-level');
        
        volumeSlider.addEventListener('click', function(e) {
            const containerWidth = volumeSlider.clientWidth;
            const clickX = e.offsetX;
            const volumePercent = (clickX / containerWidth) * 100;
            
            volumeLevel.style.width = `${volumePercent}%`;
        });