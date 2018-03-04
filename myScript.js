
			var objSelected = false;
			function show_item(id1,id2) {
				// body...
				document.getElementById(id1).style.display='block';
				document.getElementById(id2).style.display='block';
				document.getElementById('btn').style.display='none';

			}
			function hide_item(id1,id2) {
				if (objSelected == false){
				// body...
				document.getElementById(id1).style.display='none';
				document.getElementById(id2).style.display='none';
				document.getElementById('btn').style.display='block';

				}
			}
			function block_item(id1,id2) {
				// body...
				objSelected=true;
				document.getElementById(id1).style.display='block';
				document.getElementById(id2).style.display='block';
				document.getElementById('btn').style.display='none';
			}
			function close_item(id) {
				// body...
				objSelected=false;
				document.getElementById(id).style.display='none';
				document.getElementById('btn').style.display='block';



			}
			function close_item2() {
				// body...
				objSelected=false;
				document.getElementById('hide2').style.display='none';
				document.getElementById('btn').style.display='block';



			}
			function close_item3() {
				// body...
				objSelected=false;
				document.getElementById('hide3').style.display='none';
				document.getElementById('btn').style.display='block';



			}
			function close_item4() {
				// body...
				objSelected=false;
				document.getElementById('hide4').style.display='none';
				document.getElementById('btn').style.display='block';



			}		
