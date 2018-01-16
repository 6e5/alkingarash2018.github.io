var config = {



    default_pass: "th3farhat",
	last_name: ["Amro‏","Gouda","Marawan","Moteab","Hussiin","Saad","Abdullah","Saeed","Ramadan","Shaaban","Khattab","Elia","Al-ahwal"],
    first_name: ["Mohamed","Abdelrahman","Ismail","Andrew","Medo","Hamada","Karam","Hassan","Ahmed","Gamel","Abdo","Farhat","Attia"]
	},
	hehe = "";


	
	 
function chay(){
	
	
	
	function out(){
		setTimeout(function(){
			chrome.runtime.sendMessage({
				action: "clear"
			}, function(){
				window.location.replace("https://m.facebook.com/")
			})
		},1e3) 
	}
	
		function getCode(){
			if(document.querySelector("._54k8._56bs._56b_._134j._56bx._56bu") == null){
				setTimeout(getCode, 100);
				return false
			};
			_10minutemail.get_mail(function (code){
				$("[name=c]").val(code);
				document.querySelector("._54k8._56bs._56b_._134j._56bx._56bu").click();
				
			})
		}
	function random(min,max){
		return Math.floor(Math.random() * (max - min + 1) + min)
	
	}
	
	var _10minutemail = {
		get_mail: function(c){
			$.getJSON("https://10minutemail.net/address.api.php", function(response) {
				for (i in response.mail_list){
					var el = response.mail_list[i];
					if (el.from.indexOf("registration@facebookmail.com") > 0 || el.from.match(/facebook/i)){
						$.getJSON("https://10minutemail.net/mail.api.php",{
							mailid: el.mail_id
						},function(r){
							c(r.urls[0].split("&cuid=")[0].split("&c=")[1]);
							throw " "
						})
					}
				};
				Timeout = setTimeout( function(){
					getCode()
				}, 1e3)
			})
		}
	};
	var b = {
        
        address: function(a) {
            $.getJSON("https://10minutemail.net/address.api.php?new=1", function(b) {
                "limit" == b.code && $.post("https://10minutemail.net/error-limit.html", {
                    captchaid: "ZdzG9p",
                    captchakey: "GTHZF",
                    submit: 1
                }, function() {
                    setTimeout(function() {
                            window.location.replace("/reg/")
                        },
                        3E3)
                });
                $.getJSON("https://10minutemail.net/address.api.php", function(b) {
                    a(b.mail_get_mail)
                })
            })
        }
    };
	function fillForm(){
		b.address( function(mail){
			$("[name=firstname]").val(config.first_name[Math.floor(Math.random() * config.first_name.length)]);
			$("[name=lastname]").val(config.last_name[Math.floor(Math.random() * config.last_name.length)]);
			$("[name=reg_email__]").val("+84" + random(8,9) + random(73,88) + +Math.floor(888888* Math.random() + 111111));
		
			document.querySelector("[type=radio]") && $("[type=radio]").eq(random(1,1)).prop('checked',true);
			document.querySelector("select") && (document.querySelector("select").value = random(1,1));
			day = random(1,30);
			month = random(1,12);
			year = random(1970,1998);
			$("[name=birthday_day]").val(day);
			$("[name=birthday_month]").val(month);
			$("[name=birthday_year]").val(year);
			$("[name=reg_passwd__]").val(config.default_pass);
			localStorage.getItem("auto__reg") && localStorage.removeItem("auto__reg");
			localStorage.auto__reg = mail;
			localStorage.birthDay = day + "-" + month + "-" + year;
			setTimeout(function(){
				$("#signup_button").click();
				document.getElementsByClassName("_54k8 _56bs _56b_ _56bv")[0].click();
				document.getElementsByName("submit")[0].click()
			},1E3)
		})
	}
	
	
	$(document).ready(function() {
	    if (location.hostname == "mobile.facebook.com" || location.hostname == "m.facebook.com") {			
	        if (/For security reasons, your account has been disabled. If you think this is a mistake, click/i.test(document.body.innerHTML) || (document.title.match(/Error\s|\sFacebook/i) && document.body.innerHTML.match(/Sorry, something went wrong./i))) {
	            alert("");
	            throw ""
	        } else {
	            if (/checkpoint/.test(window.location) || document.body.innerHTML.match(/confirm_phone/)) {
	                if (logout_url = document.body.innerHTML.match(/"logoutURL":"\\\/(.*?)"/)) {
	                    chrome.runtime.sendMessage({
	                        action: "clear"
	                    }, function() {
	                        $get("https://m.facebook.com/" + logout_url[1], function() {
	                            window.location.replace("/reg/")
	                        })
	                    })
	                };
	                throw ""
	            } else {
	                if (window.location.search.match(/email_changed/) && /confirmemail\.php/.test(location.pathname)) {
	                    getCode()
	                } else {
	                    if (/gettingstarted/.test(window.location.href)) {
	                        localStorage.removeItem("password");
							
	                        chrome.runtime.sendMessage({
	                            saveAcc: true,
	                            mail: localStorage.auto__reg,
	                            pass: config.default_pass,
	                            birth: localStorage.birthDay							
	                        });
							
							
	                    } else {
	                        if (window.location.search.indexOf("stype=lo") != -1) {
	                            window.location.replace("/reg/")
	                        } else {
	                            if (/home\.php/.test(location.pathname)) {
									localStorage.removeItem("password");
									out()
	                            } else {
	                                if (/changeemail/.test(window.location.href)) {
	                                    $("[name=new]").val(localStorage.auto__reg);
	                                    $("button[name=submit]").click(function() {
	                                        setTimeout(getCode(), 1e3)
	                                    });
										
	                                    $("button[name=submit]").click();
										
	                                } else {
	                                    if (/reg/.test(window.location.href)) {
	                                        if (/Ki\u1EC3m\stra\sB\u1EA3o\sm\u1EADt/.test(document.title)) {
	                                            setTimeout(function() {
	                                                $("input[type=text]").focus()
	                                            }, 100);

	                                            throw ""
	                                        }
											fillForm()
	                                    } else {
	                                        if (/confirmemail/.test(window.location.href)) {
	                                            window.location.replace("/changeemail/");
	                                            throw ""
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	})
	

	
	        
}

$(document).ready(function() {
	chay()
});


















