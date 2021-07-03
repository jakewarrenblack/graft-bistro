window.onload = () => {
    let path = document.getElementsByClassName('path');
    let duration;

    for (let i = 0; i < path.length; i++) {
        let length = path[i].getTotalLength();
        /**
         * Normalizes a value from one range (current) to another (new).
         *
         * @param  { Number } val    //the current value (part of the current range).
         * @param  { Number } minVal //the min value of the current value range.
         * @param  { Number } maxVal //the max value of the current value range.
         * @param  { Number } newMin //the min value of the new value range.
         * @param  { Number } newMax //the max value of the new value range.
         *
         * @returns { Number } the normalized value.
         */
        const normalizeBetweenTwoRanges = (val, minVal, maxVal, newMin, newMax) => {
            return newMin + (val - minVal) * (newMax - newMin) / (maxVal - minVal);
        };

        duration = normalizeBetweenTwoRanges(length, 0, 15455, 1, 5);
        // Clear any previous transition
        path[i].style.transition = path[i].style.WebkitTransition = 'none';
        path[i].style.fill = 'none'
        // Set up the starting positions
        path[i].style.strokeDasharray = length + ' ' + length;
        path[i].style.strokeDashoffset = length;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        path[i].getBoundingClientRect();
        // Define our transition
        path[i].style.transition = path[i].style.WebkitTransition =
            'stroke-dashoffset ' + parseInt(duration) + 's ease-in-out';
    }

    let i = 0;
    let first = -1;

    myLoop = () => {
        if (first == -1) {
            first = i;
            if (i == 0) {
                // Go!
                path[i].style.strokeDashoffset = '0';
                i++;
                myLoop();
                return;
            } else {
                myLoop();
                return;
            }
        }
        setTimeout(() => {
            // Go!
            path[i].style.strokeDashoffset = '0';
            path[i].style.fill = 'white';
            if (path[i].classList.length > 1 && path[i].classList[1] == "end") {
                for (let j = i; j >= first; j--) {
                    path[j].style.fill = 'transparent';                    
                    path[j].animate([
                        { fillOpacity: 0 },
                        { fillOpacity: 0 },
                        { fillOpacity: 0 },
                        { fillOpacity: 0 },
                        { fillOpacity: 0 },
                        { fillOpacity: 1 }
                    ], {
                        duration: (parseInt(duration) * 500) * 2,
                        fill: "forwards"
                    });
                }

                first = -1;
            }
            i++;
            if (i < path.length) {
                myLoop();
            }
        }, parseInt(duration) * 800)
    }

    myLoop();

}
