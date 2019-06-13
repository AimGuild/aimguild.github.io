let region = document.querySelector("body"); // whole screen
    html2canvas(region, {
      onrendered: function(canvas) {
        let pngUrl = canvas.toDataURL(); // png in dataURL format
        let result = document.querySelector(".result");
        result.innerHTML = pngUrl;
  
        //console.log(pngUrl);
        // here you can allow user to set bug-region
        // and send it with 'pngUrl' to server
      },
    });