var catWebUSB ='<xml>'+
'<category name="%{BKY_CATWEBUSB}" id="catwebusb" colour="160">'+
	'<block type="webusb_button">'+ 
	'</block>'+	
	'<block type="webusb_button_position">'+
		'<value name="left_">'+
			'<block type="math_number">'+
				'<field name="NUM">0</field>'+
			'</block>'+
		'</value>'+ 
		'<value name="top_">'+
			'<block type="math_number">'+
				'<field name="NUM">0</field>'+
			'</block>'+
		'</value>'+ 
	'</block>'+	
	'<block type="webusb_button_onclick">'+
		'<value name="id_">'+
			'<block type="text">'+
				'<field name="TEXT"></field>'+
			'</block>'+
		'</value>'+
	'</block>'+
	'<block type="webusb_getdata">'+
	'</block>'+	
	'<block type="webusb_get">'+ 
	'</block>'+
	'<block type="webusb_getstate">'+ 
	'</block>'+ 
	'<block type="webusb_wait">'+ 
	'</block>'+ 
	'<block type="webusb_send">'+
	'	<value name="cmd_">'+
	'		<block type="text">'+
	'			<field name="TEXT"></field>'+
	'		</block>'+
	'	</value>'+
	'</block>'+
'</category>'+
'</xml>';