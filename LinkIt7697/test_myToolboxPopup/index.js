/**
 * @license
 * Copyright 2013 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @license
 * Copyright 2023 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Toolbox Popup
 * @author https://www.facebook.com/francefu/
 * @Update 4/14/2023 08:00 (Taiwan Standard Time)
 */

function init() {
  // Inject primary workspace.
  var primaryWorkspace = Blockly.inject('primaryDiv',
      {
        media: 'media/',
        toolbox: document.getElementById('toolbox1'),
        trashcan: false,
		horizontalLayout: true,
      });
	  
  // Inject secondary workspace.
  var secondaryWorkspace = Blockly.inject('secondaryDiv',
      {
        media: 'media/',
        toolbox: document.getElementById('toolbox2'),
        trashcan: true,
		grid:{spacing: 20,length: 3,colour: '#eee',snap: true},
		zoom:{controls: true, wheel: false, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2},
		trashcan: true,
		move:{
			scrollbars: {
			  horizontal: true,
			  vertical: true
			},
			drag: true,
			wheel: true
		},
      });
	  
	hideFlyout();
	
	
	function primaryWorkspaceListener(event) {
		if (event.type=="create") {
			var block = primaryWorkspace.getBlockById(event.blockId);
			if (block) {
				block = Blockly.Xml.blockToDom(block, true);
				block = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">' + Blockly.Xml.domToText(block) + '</xml>');
				var id = Blockly.Xml.appendDomToWorkspace(block, secondaryWorkspace);
				
				
				var newBlock = secondaryWorkspace.getBlockById(id[0]);
				if (newBlock) {
					var position = Blockly.utils.svgMath.getRelativeXY(newBlock.getSvgRoot());
					var x = position.x;
					var y = position.y;
					var scrollX = secondaryWorkspace.scrollX;
					var scrollY = secondaryWorkspace.scrollY;
					
					var wsWidth = secondaryWorkspace.getParentSvg().width.baseVal.value;
					var wsHeight = secondaryWorkspace.getParentSvg().height.baseVal.value;
					newBlock.moveBy(wsWidth/2-newBlock.width/2-scrollX-x, wsHeight/2-newBlock.height/2-scrollY-y);
					
					newBlock.select();
					newBlock.bringToFront();
					primaryWorkspace.getAudioManager().play("click");
				}

				setTimeout(function () {
					hideFlyout();
				}, 300);
			}
		}
	}
	primaryWorkspace.addChangeListener(primaryWorkspaceListener);
	function secondaryWorkspaceListener(event) {
		if (event.type=="click") {
				hideFlyout();
		}
	}	
	secondaryWorkspace.addChangeListener(secondaryWorkspaceListener);	
  
	document.getElementById('logic').onclick = function () {
		var xmlDoc = '<xml id="toolbox"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></xml>';
		
		showFlyout(this.id, xmlDoc);
	} 
	
	document.getElementById('loop').onclick = function () {
		var xmlDoc = '<xml id="toolbox"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_flow_statements"></block></xml>';
		
		showFlyout(this.id, xmlDoc);
	}	
	
	function showFlyout(item, xmlDoc) {
		var primaryDiv = document.getElementById("primaryDiv");
		var btn = document.getElementById(item);
		primaryDiv.style.display = "block";
		
		primaryWorkspace.clear();
		primaryWorkspace.updateToolbox(xmlDoc);
		
		primaryDiv.style.position = "absolute";
		primaryDiv.style.left = (window.scrollX + btn.getBoundingClientRect().left) + "px";
		primaryDiv.style.top = (window.scrollY + btn.getBoundingClientRect().top + btn.clientHeight + 2) + "px";
		
		var ToolboxDiv = document.getElementsByClassName("blocklyFlyout");
		if (ToolboxDiv) {
			primaryDiv.style.height = ToolboxDiv[2].clientHeight + "px";
		}
	}
	
	function hideFlyout() {
	  var primaryDiv = document.getElementById("primaryDiv");
	  primaryDiv.style.display = "none";
	  
	  var blocklyFlyout = document.getElementsByClassName("blocklyFlyout");
	  for (var f=0;f<blocklyFlyout.length;f++) {
		  blocklyFlyout[f].style.display = "none";
	  } 
	}

}




/*
//create block near the cursor

    var mouse_pageX,mouse_pageY,mouse_offsetX,mouse_offsetY,mouse_clientX,mouse_clientY,mouse_screenX,mouse_screenY;
    document.body.addEventListener('mousemove', getMousePosition, false); 
    function getMousePosition(e){  
        e=e||window.event;
        mouse_pageX = e.pageX;
        mouse_pageY = e.pageY;
        mouse_offsetX = e.offsetX;
        mouse_offsetY = e.offsetY;   
        mouse_clientX = e.clientX;
        mouse_clientY = e.clientY;
        mouse_screenX = e.screenX;
        mouse_screenY = e.screenY;  		
    }
	
	var newBlock = null;
	function primaryWorkspaceListener(event) {
		if (event.type=="create") {
			var block = primaryWorkspace.getBlockById(event.blockId);
			if (block) {
				block = Blockly.Xml.blockToDom(block, true);
				block = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">' + Blockly.Xml.domToText(block) + '</xml>');
				var id = Blockly.Xml.appendDomToWorkspace(block, secondaryWorkspace);
				newBlock = secondaryWorkspace.getBlockById(id[0]);
				if (newBlock) {
					newBlock.select();
					newBlock.bringToFront();
					primaryWorkspace.getAudioManager().play("click");
				}

				setTimeout(function () {
					hideFlyout();
				}, 300);
			}
		}
	}
	primaryWorkspace.addChangeListener(primaryWorkspaceListener);
	
	function secondaryWorkspaceListener(event) {
		if (event.type=="finished_loading"&&newBlock) {
			//console.log(mouse_pageX);
			//console.log(mouse_pageY);				
			//console.log(window.scrollX);
			//console.log(window.scrollY);
			var mouseClient = new Blockly.utils.Coordinate(mouse_pageX-window.scrollX, mouse_pageY-window.scrollY); 
			var mousePos = Blockly.utils.svgMath.screenToWsCoordinates(secondaryWorkspace, mouseClient);
			
			var blockPos = Blockly.utils.svgMath.getRelativeXY(newBlock.getSvgRoot());
			var scrollX = secondaryWorkspace.scrollX;
			var scrollY = secondaryWorkspace.scrollY;
			//console.log(mousePos.x);
			//console.log(scrollX);
			//console.log(blockPos.x);
			//console.log(mousePos.y);
			//console.log(scrollY);
			//console.log(blockPos.y);
			
			newBlock.moveBy(mousePos.x-blockPos.x, mousePos.y-blockPos.y+50);
			newBlock = null;
		}
		
		if (event.type=="click") {
				hideFlyout();
		}
	}	
	secondaryWorkspace.addChangeListener(secondaryWorkspaceListener);	
	
*/
