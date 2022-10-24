 $(document).ready(function mySearch(){
 var data = [
    {
        "Record":"1",
           "Model":"<h3>Ford Mustang</h3>",
           "Image":"./images/mustang.jpg",
           "Color":"red",
           "Engine":"309 ls",
           "Steering_wheel":"left",
           "Year_of_issue":"1966"
    },
    
    {
            "Record":"2",
            "Model":"<h3>Subaru Impreza</h3>",
            "Image":"./images/subaru.jpg",
            "Color":"black",
           "Engine":"107 ls",
           "Steering_wheel":"left",
           "Year_of_issue":"2008"
    },
   
    {
            "Record":"3",
            "Model":"<h3>Chevrolet Impala</h3>",
            "Image":"./images/chevrolet.jpg",
            "Color":"black",
           "Engine":"265 ls",
           "Steering_wheel":"left",
           "Year_of_issue":"1995"
    },
    
    {
            "Record":"4",
            "Model":"<h3>Chrysler Sebring</h3>",
            "Image":"./images/chrysler.jpg",
             "Color":"grey",
           "Engine":"200 ls",
           "Steering_wheel": "left",
           "Year_of_issue": "2001"
    },
    
    {
            "Record":"5",
            "Model":"<h3>Pontiac Solstice</h3>",
            "Image":"./images/pontiac.jpg",
            "Color":"red",
           "Engine":"173 ls",
           "Steering_wheel":"left",
           "Year_of_issue": "2008"
    },
    
    {
            "Record":"6",
            "Model":"<h3>Alfa Romeo MiTo</h3>",
            "Image": "./images/alfa romeo.jpg",
             "Color": "red",
           "Engine": "140 ls",
           "Steering_wheel": "left",
           "Year_of_issue": "2014"
    }

 ];
     
        $('#txt-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#content').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.Model.search(regex) !== -1) || (val.Color.search(regex) !== -1)|| (val.Steering_wheel.search(regex) !== -1)|| (val.Year_of_issue.search(regex) !== -1)) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-3"><img class="img-responsive" src="'+ val.Image +'" alt="'+ val.Model +'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.Model + '</h5>';
				  output += '<p>' + val.Color + '</p>'
                                   output += '<p>' + val.Engine + '</p>'
                                   output += '<p>' + val.Steering_wheel + '</p>'
                                   output += '<p>' + val.Year_of_issue + '</p>'
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#content').html(output);
        });
  });