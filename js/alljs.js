//----------------------------------------------------------------------------------
//Load JSON when Premier League Teams are going to be shown
//----------------------------------------------------------------------------------
$('#prem').bind('pageinit', function() {
	//Load json file
	$.getJSON("js/p_teams.json", function(premTeams){   
	    //Add premier league team names to ListView
	    $.each(premTeams, function(i, premTeam){
		$('#prem_list').append(createPremTeams(premTeam));
	    });
	    //Refresh ListView
	    $('#prem_list').listview('refresh'); 
	});
});
	//Creates link for all teams within Premier League teams
	function createPremTeams(premTeam){
	    //This function passes the Team data to the details page
	    return '<li><a href="javascript:void(0)" onclick="premTeamDetailPage(\''
        + premTeam.name+ '\',\''
		+ premTeam.image+ '\',\''
        + premTeam.nickname+ '\',\''
        + premTeam.founded+ '\',\''
        + premTeam.website+ '\',\''
	    + premTeam.description+ '\',\''
		+ premTeam.coords+ '\')">'
	    + premTeam.name+ '</a></li>';
	}
    function premTeamDetailPage(premTeamName, premTeamImage, premTeamNickName, premTeamFounded, premTeamWebsite, premTeamDesc, mapCoords){
	//Create Team Description Page
	var premTeamPage =
	    $("<div data-role='page' id='teamDesc' data-url='teamDesc'><div data-role='header' ><h1>"
	    + premTeamName + "</h1><a href='#' data-rel='back' data-role='button' data-icon='back' data-transition='none'>Back</a></div><div id='content' data-role='content'><img class='teamLogoImg' src='"
            + premTeamImage + "'><p><h4 class='tinyinfo'>"
			+ premTeamNickName +"</h4><h4 class='tinyinfo'>"
			+ premTeamFounded +"</h4><h4><b>Website: </b><br><a href="+ premTeamWebsite +" target='_blank' data-role='button' data-inline='true' data-mini='true' data-icon='arrow-r' data-iconpos='right'>"
			+ premTeamWebsite + "</a></h4><b>Directions: </b><br>"
            + premTeamDesc + "</h4></p>"
			//adds map coordinates from JSON to map page
			+ "<a href='stad_find.html?"+mapCoords+"'data-role='button' data-icon='navigation' data-iconpos='right'>Click for directions</a></div><div data-role='footer' data-position='fixed'><h3>Premier League Team</h3></div></div>");
            //append the new page to the page container
	    premTeamPage.appendTo( $.mobile.pageContainer );

	    //directs to created page
	    $.mobile.changePage( premTeamPage );
    }

//Load JSON when Championship Teams are going to be shown
$('#champ').bind('pageinit', function() {
	//Load json file
	$.getJSON("js/ch_teams.json", function(champTeams){   
	    //Add Championship team names to ListView
	    $.each(champTeams, function(i, champTeam){
		$('#ch_list').append(createChampTeams(champTeam));
	    });
	    //Refresh ListView
	    $('#ch_list').listview('refresh');
	});
});
	//Creates link for all teams within Championship League
	function createChampTeams(champTeam){
	    //This passes championship team data to the details page
	    return '<li><a href="javascript:void(0)'
	    + '" onclick="champTeamDetailPage(\''
        + champTeam.name
	    + '\',\''
	    + champTeam.image
	    + '\',\''
        + champTeam.nickname
	    + '\',\''
        + champTeam.founded
	    + '\',\''
        + champTeam.website
	    + '\',\''
	    + champTeam.description +'\',\''
		+ champTeam.coords+ '\')">'
	    + champTeam.name
	    + '</a></li>';
	}
    function champTeamDetailPage(champTeamName, champTeamImage, champTeamNickName, champTeamFounded, champTeamWebsite, champTeamDesc, mapCoords){
	//Create Team Description Page
	var champTeamPage =
	    $("<div data-role='page' id='teamDesc' data-url='teamDesc'><div data-role='header' ><h1>"
	    + champTeamName + "</h1><a href='#' data-rel='back' data-role='button' data-icon='back' data-transition='none'>Back</a></div><div id='content' data-role='content'><img class='teamLogoImg' src='"
            + champTeamImage + "'><p><h4 class='tinyinfo'>"
			+ champTeamNickName +"</h4><h4 class='tinyinfo'>"
			+ champTeamFounded +"</h4><h4><b>Website: </b><br><a href="+ champTeamWebsite +" target='_blank' data-role='button' data-inline='true' data-mini='true' data-icon='arrow-r' data-iconpos='right'>"
			+ champTeamWebsite + "</a></h4><b>Directions: </b><br>"
            + champTeamDesc + "</h4></p>"
			//adds map coordinates from JSON to map page
			+ "<a href='stad_find.html?"+mapCoords+"'data-role='button' data-icon='navigation' data-iconpos='right'>Click for directions</a></div><div data-role='footer' data-position='fixed'><h3>Championship League Team</h3></div></div>");
            //append the new page to the page container
	    champTeamPage.appendTo( $.mobile.pageContainer );

	    //directs to created page
	    $.mobile.changePage( champTeamPage );
    }

