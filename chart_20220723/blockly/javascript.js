Blockly.JavaScript['chart_doughnut_create'] = function(block) {
  var id = "chart_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var labelsize = Blockly.JavaScript.valueToCode(block, 'labelsize', Blockly.JavaScript.ORDER_ATOMIC);
  var valuesize = Blockly.JavaScript.valueToCode(block, 'valuesize', Blockly.JavaScript.ORDER_ATOMIC);
  var unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = "";
  code +=  'doughnutWidget.chartname['+name+'] = {\n'+
			'	container: "'+id+'",\n'+
			'	width: '+width+',\n'+
			'	height: '+height+',\n'+
			'	left: '+left+',\n'+
			'	top: '+top+',\n'+
			'	cutout: 50,\n'+
			'	data: {\n'+
			'		val: '+val+',\n'+
			'		min: '+min+',\n'+
			'		max: '+max+',\n'+
			'		color: '+color+',\n'+
			'		unit: " "+'+unit+',\n'+
			'		decimal: '+decimal+',\n'+	
			'		labelsize: '+labelsize+',\n'+
			'		valuesize: '+valuesize+',\n'+
			'		//link: "http://www.google.com",\n'+
			'		//click: function(e) {\n'+
			'		//	console.log("hi");\n'+
			'		//}\n'+
			'	}\n'+
			'};\n'+
			'doughnutWidget.createChart('+name+');\n';
												
  return code;
};

Blockly.JavaScript['chart_doughnut_set'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'doughnutWidget.updateData('+name+', '+val+');\n';
  return code;
};

Blockly.JavaScript['chart_gauge_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var labelsize = Blockly.JavaScript.valueToCode(block, 'labelsize', Blockly.JavaScript.ORDER_ATOMIC);
  var unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = "";
  code +=  'temperatureGauge({\n'+
			'	id: '+id+',\n'+
			'	name: '+name+',\n'+			
			'	width: '+width+',\n'+
			'	left: '+left+',\n'+
			'	top: '+top+',\n'+
			'	val: '+val+',\n'+
			'	min: '+min+',\n'+
			'	max: '+max+',\n'+
			'	fillColor: '+color+',\n'+
			'	borderWidth: 4,\n'+		
			'	unit: " "+'+unit+',\n'+
			'	decimal: '+decimal+',\n'+	
			'	showLabel: true,\n'+	
			'	labelSize: '+labelsize+',\n'+
			'});\n';
												
  return code;
};

Blockly.JavaScript['chart_gauge_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'temperatureGauge({id: '+id+',val: '+val+'});\n';
  return code;
};

Blockly.JavaScript['chart_waterbubble_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
  var watercolor = Blockly.JavaScript.valueToCode(block, 'watercolor', Blockly.JavaScript.ORDER_ATOMIC);
  var textcolor = Blockly.JavaScript.valueToCode(block, 'textcolor', Blockly.JavaScript.ORDER_ATOMIC);  
  
  var code = "";
  code +=  'waterbubble({\n'+
			'	id: '+id+',\n'+
			'	name: '+name+',\n'+			
			'	radius: '+radius+',\n'+
			'	left: '+left+',\n'+
			'	top: '+top+',\n'+
			'	val: '+val+',\n'+
			'	min: '+min+',\n'+
			'	max: '+max+',\n'+
			'	unit: " "+'+unit+',\n'+
			'	decimal: '+decimal+',\n'+
			'	waterColor: '+watercolor+',\n'+
			'	textColor: '+textcolor+',\n'+			
			'	lineWidth: 4,\n'+
			'	wave: true,\n'+
			'	animation: true\n'+		
			'});\n';
												
  return code;
};

Blockly.JavaScript['chart_waterbubble_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'waterbubble({id: '+id+',val: '+val+'});\n';
  return code;
};

Blockly.JavaScript['chart_line_create'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
  var title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var titlex = Blockly.JavaScript.valueToCode(block, 'titlex', Blockly.JavaScript.ORDER_ATOMIC);
  var titley = Blockly.JavaScript.valueToCode(block, 'titley', Blockly.JavaScript.ORDER_ATOMIC); 
  var dataset = Blockly.JavaScript.valueToCode(block, 'dataset', Blockly.JavaScript.ORDER_ATOMIC);
  if ((dataset.indexOf("[")==0)&&(dataset.lastIndexOf("]")==dataset.length-1))
    dataset = dataset.substring(1,dataset.length-1);
  else
	dataset = "{}";
  
  var code = "";
  code += 'var config = {\n'+
'	  id: '+id+',\n'+
'	  type: "line",\n'+
'	  data: {\n'+
'			  labels: [],\n'+
'			  datasets: [\n'+
'				'+dataset+'\n'+
'			  ]\n'+
'	  },\n'+
'	  options: {\n'+
'		responsive: true,\n'+
'		plugins: {\n'+
'		  legend: {\n'+
'			position: "top",\n'+
'		  },\n'+
'		  title: {\n'+
'			display: true,\n'+
'			text: '+title+'\n'+
'		  }\n'+
'		},\n'+
'		scales: {\n'+
'				yAxes: {\n'+
'					title: {\n'+
'						display: true,\n'+
'						text: '+titley+',\n'+
'					},\n'+
'					ticks: {\n'+
'						precision: 0\n'+
'					}\n'+
'				},\n'+
'				xAxes: {\n'+
'					title: {\n'+
'						display: true,\n'+
'						text: '+titlex+',\n'+
'					}\n'+
'				}\n'+
'			}\n'+
'	  },\n'+
'	  width: '+width+',\n'+
'	  height: '+height+',\n'+
'	  left: '+left+',\n'+
'	  top: '+top+',\n'+
'	  count: '+count+'\n'+
'	};\n'+
'	linechart(config);\n';
												
  return code;
};

Blockly.JavaScript['chart_line_dataset'] = function(block) {
  var label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC);
  var borderColor = Blockly.JavaScript.valueToCode(block, 'borderColor', Blockly.JavaScript.ORDER_ATOMIC);
  var backgroundColor = Blockly.JavaScript.valueToCode(block, 'backgroundColor', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{'+
			'  label: '+label+','+
			'  data: [],\n'+
			'  borderColor: '+borderColor+','+
			'  backgroundColor: '+backgroundColor+
			'}';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['chart_line_set'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var datax = Blockly.JavaScript.valueToCode(block, 'datax', Blockly.JavaScript.ORDER_ATOMIC);
  var dataset = Blockly.JavaScript.valueToCode(block, 'dataset', Blockly.JavaScript.ORDER_ATOMIC);
  if ((dataset.indexOf("[")==0)&&(dataset.lastIndexOf("]")==dataset.length-1))
      dataset = datax+', ' + dataset.substring(1,dataset.length-1);
  else
	  dataset = "";

  code = 'linechart({id: '+id+', data: ['+dataset+']});\n';
  return code;
};