	var followers = $('li.ProfileNav-item.ProfileNav-item--followers > a > span.ProfileNav-value').text().replace(/,/g, "");
	var following = $('li.ProfileNav-item.ProfileNav-item--following > a > span.ProfileNav-value').text().replace(/,/g, "");

	var rts = $('li.js-stat-count.js-stat-retweets.stat-count > a > strong').text().replace(/,/g, "");
	var favs = $('li.js-stat-count.js-stat-favorites.stat-count > a > strong').text().replace(/,/g, "");
	
	if(followers.indexOf(".") > -1){
		followers = followers.replace(/./g, "").replace(/K/g,"00").replace(/M/g,"0000");
	} else if (followers.indexOf("K") > -1 || followers.indexOf("M") > -1) {
		followers = followers.replace(/K/g,"000").replace(/M/g,"000000");
	};
	
	if(following.indexOf(".") > -1){
		following = following.replace(/./g, "").replace(/K/g,"00").replace(/M/g,"0000");
	} else if (following.indexOf("K") > -1 || following.indexOf("M") > -1){
		following = following.replace(/K/g,"000").replace(/M/g,"000000");
	};

	if(rts.indexOf(".") > -1){
		rts = rts.replace(/./g, "").replace(/K/g,"00").replace(/M/g,"0000");
	} else if (rts.indexOf("K") > -1 || rts.indexOf("M") > -1){
		rts = rts.replace(/K/g,"000").replace(/M/g,"000000");
	};
	
	if(favs.indexOf(".") > -1){
		favs = favs.replace(/./g, "").replace(/K/g,"00").replace(/M/g,"0000");
	} else if (favs.indexOf("K") > -1 || favs.indexOf("M") > -1){
		favs = favs.replace(/K/g,"000").replace(/M/g,"000000");
	};

	var user_ratio = (followers/following).toFixed(2);
	var tweet_ratio = (rts/favs).toFixed(2);
	
	if($('#swift-page-name').attr('content') == "profile"){		
		$('<li class="ProfileNav-item ProfileNav-item--ratio"><a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="followers" href="/" data-original-title="nice ratio"><span class="ProfileNav-label">Ratio</span><span class="ProfileNav-value" data-is-compact="false">'+user_ratio+'</span></a></li>').insertAfter('li.ProfileNav-item.ProfileNav-item--followers')
		};
		
	if($('#swift-page-name').attr('content') == "me"){		
		$('<li class="ProfileNav-item ProfileNav-item--ratio"><a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="followers" href="/" data-original-title="nice ratio"><span class="ProfileNav-label">Ratio</span><span class="ProfileNav-value" data-is-compact="false">'+user_ratio+'</span></a></li>').insertAfter('li.ProfileNav-item.ProfileNav-item--followers')
		};
		
	if($('#swift-page-name').attr('content') == "permalink"){
		$('<li class="js-stat-count js-stat-ratio stat-count" aria-hidden="true"><a tabindex="0" role="button" data-tweet-stat-count="6"data-compact-localized-count="6"class="request-favorited-popup" data-activity-popup-title="nice ratio">Ratio<strong>'+tweet_ratio+'</strong></a></li>').insertAfter('li.js-stat-count.js-stat-favorites.stat-count')
		};
