
  $(document).ready(function() {
  /* 
  $( "#select_catalog" ).change(function () {
      var id = $("#selectId option:selected").attr("id")
      $( ".search_catalog_site" ).hide();
      $( "."+str ).show();
  })
  */
  var hideAll = function() {
      $('.search_catalog_site').hide();
      $('.Course_Reserves').hide();
      $('.journal_finder').hide();
  }    
  $('#select_catalog').on('change', function() {
      hideAll();
      var category = $(this).val();
      $('.' + category).show();
      if(category == "Everything"){
          $("#select_catalog").removeClass("course_reserves-icon worldcat-icon journal-finder-icon googlescholar-icon umb-icon");
          $("#select_catalog").addClass("umbrella-icon");
          var select = $(this).find('option:selected').val();
          $('#search_scope').val(select);
          //$('#tab').val(select.toLowerCase()); 
          var placeholder = $(this).find(':selected').data('placeholder');
          $('#primoQueryTemp').attr('placeholder', placeholder);
      }
      if(category == "Course_Reserves"){
          $("#select_catalog").removeClass("umbrella-icon googlescholar-icon worldcat-icon journal-finder-icon umb-icon");
          $("#select_catalog").addClass("course_reserves-icon");
          var select = $(this).find('option:selected').val();
          $('#search_scope').val(select);
          $('#tab').val(select.toLowerCase()); 
          var placeholder = $(this).find(':selected').data('placeholder');
          $('#primoQueryTemp').attr('placeholder', placeholder);
      }

        if(category == "WorldCat"){
            $("#select_catalog").removeClass("umbrella-icon course_reserves-icon journal-finder-icon googlescholar-icon umb-icon");
            $("#select_catalog").addClass("worldcat-icon"); 
            var select = $(this).find('option:selected').val();
            $('#search_scope').val(select);
            $('#tab').val(select.toLowerCase()); 
            var placeholder = $(this).find(':selected').data('placeholder');
            $('#primoQueryTemp').attr('placeholder', placeholder);
        }
        if(category == "journal_finder"){
            $("#select_catalog").removeClass("umbrella-icon course_reserves-icon worldcat-icon googlescholar-icon umb-icon");
            $("#select_catalog").addClass("journal-finder-icon");
        }
        if(category == "googlescholar"){
            $("#select_catalog").removeClass("umbrella-icon course_reserves-icon worldcat-icon journal-finder-icon umb-icon");
            $("#select_catalog").addClass("googlescholar-icon");
        }
        if(category == "umb"){
            $("#select_catalog").removeClass("umbrella-icon course_reserves-icon worldcat-icon journal-finder-icon googlescholar-icon");
            $("#select_catalog").addClass("umb-icon");
        }
  });
});
  //search  function
  function searchPrimo() {
      document.getElementById("primoQuery").value = "any,contains," + document.getElementById("primoQueryTemp").value.replace(/[,]/g, " ");
          document.forms["searchForm"].submit();
      document.getElementById("primoQueryCR").value = "any,contains," + document.getElementById("primoQueryTempCR").value.replace(/[,]/g, " ");
          document.forms["searchForm-coursereserves"].submit();
      document.getElementById("primoQueryWC").value = "any,contains," + document.getElementById("primoQueryTempWC").value.replace(/[,]/g, " ");
          document.forms["searchForm-worldcat"].submit();
  }  
  function jSearchPrimo() {
      document.getElementById("journalQuery").value = "any,contains," + document.getElementById("journalQueryTemp").value.replace(/[,]/g, " ");
      document.getElementById("journals").value = "any," + document.getElementById("journalQueryTemp").value.replace(/[,]/g, " ");
      document.forms["searchForm-journal"].submit();
  }