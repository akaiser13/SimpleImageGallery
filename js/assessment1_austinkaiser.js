var ImageGallery = {
    
    init : function() {
        
        picArray = ['1', '2', '3', '4'];
     
        canvas = document.getElementById("bigPic");
        
        var thumbsDiv = document.getElementById("thumbnails");
        
        var thumbs = thumbsDiv.querySelectorAll("img");
        
        for (var i = 0; i < thumbs.length; i++) {
            
            thumbs[i].onmouseover = ImageGallery.newPic;
            thumbs[i].onmouseout = ImageGallery.origPic;
            
        }       
        
    },
    
    newPic : function() {
        
        var imgNumber = this.id;
        
        var imgPath = "images/bigPics/" + picArray[imgNumber] + ".jpg";
        
        canvas.src = imgPath;
        
    },
    
    origPic : function() {
        
        canvas.src = "images/bigPics/initialPic.jpg";
        
    }
    
};

