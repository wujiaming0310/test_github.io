var catGEMINI = '<xml>'+
'<category name="%{BKY_CATGEMINI}" id="CATGEMINI" colour="190">'+
'  <block type="gemini_chat_initial">'+
'    <value name="token">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="tokens">'+
'    	<block type="math_number">'+
'    		<field name="NUM">1000</field>'+
'    	</block>'+
'    </value>'+
'    <value name="role">'+
'      <block type="text">'+
'        <field name="TEXT">你是繁體中文的助理，請簡短回覆我的問題。</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+
'  <block type="gemini_chat_request">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <block type="gemini_chat_response">'+
'  </block>'+ 
'  <block type="gemini_chat_response_data">'+
'  </block>'+
'  <block type="gemini_chat_insert">'+
'    <value name="words">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+   
'  </block>'+
'  <block type="gemini_chat_content_file_remote_insert">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+   
'  <block type="gemini_chat_clear">'+
'  </block>'+
'  <block type="gemini_chat_content_file">'+
'  </block>'+
'  <block type="gemini_chat_content_file_remote">'+
'    <value name="url">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+  
'</category>'+
'</xml>';
