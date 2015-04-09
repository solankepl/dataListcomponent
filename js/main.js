$(document).ready(function() {
		//showList();
		//checkedAll();
		//filterList();
		//checkBoxValue();
		//$("#allChecked").parent().hide();
		
		//var text =‘one one, two three, two’;
		//var result_text = preg_replace(“/\b(\w+)\s+\\1\b/i”, “$1″, $text);
			//console.log(“Result Text: ” result_text);
		
		$(window).click(function(){
			$(".popUp").hide();
		})		
		$(".field_07").bind("focus", selectbox); 
		//$(".field_07").bind("click", selectbox);
	})
	
	
	function selectbox(){
		var curselected = $(this).parent();
		$(".popUp").hide();
		curselected.find(".popUp").show();
		showList();
		checkedAll(curselected);
		filterList(curselected);
		checkBoxValue(curselected);
	}
	
	function  showList() {
		$(".form2 input").click(function(e) {
			e.stopPropagation();
			//$(this).next(".popUp").show();				
		});
				
	/*	$(".form2 input").click(function(e) {
			e.stopPropagation();
			//$(this).next(".popUp").show();				
		});*/
	}
	
	function checkedAll(val) {
		val.find('.allChecked').click(function() { 	 
			if(this.checked) {
				val.find('.chkbx').each(function() {
					this.checked = true; 
					                      
				});
			}
			else {
				val.find('.chkbx').each(function() {
					this.checked=false;
				});
			}
		});
	}
	
	function filterList(val) {
		val.find('.srch').keyup(function(e){			
		   var valThis = $(e.currentTarget).val().toLowerCase();
			val.find('.popUp li').each(function(){
			 var text = $(this).text().toLowerCase();
			 console.log(text.indexOf(valThis))
				if (text.indexOf(valThis) !== -1){
					 $(this).show()
				} else {
					 $(this).hide()
				}			 	
				/*if(text.indexOf(valThis) === 0){
					//$("#allChecked").parent().show();
					$(this).show()
				}else{
					//$(this).hide(); 
					
				} */
				if(valThis==""){
					//$("#allChecked").parent().hide();
				}				           
		   });
		});
	}
	
	function checkBoxValue(val) {
		val.find('.chkbx').change(function(){				
			var text = "";
			val.find('.chkbx:checked').each(function(){
				text += $(this).val()+',';
			});		
			text = text.substring(0,text.length-1);			
			val.find(".field_07").val(text);
		});
	}
	/* git hub commands
	git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:solankepl/dataListcomponent.git
git push -u origin master */