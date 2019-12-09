function validar(){
	var nome = form1.txtnome.value;
	var email = form1.txtemail.value;
	var usuario = form1.txtusuario.value;
	var senha = form1.txtsenha.value;
	var estado = form1.cboestado.value;


	if(nome == ""){
		alert('Digite seu nome.');
		form1.txtnome.focus();
		return false;
	}

	if (nome.length < 4) {
		alert('Digite um nome válido!');
		form1.txtnome.focus();
		return false;
	}


	if (email == "") {
		alert('Email Obrigatório.');
		form1.txtemail.focus();
		return false;
	}
 
	
	// Validação Simples de Email
	if ((email != 0) && ((email.indexOf("@") < 1) || (email.indexOf('.') < 7)))
	  {
		 alert('Informe um email Válido.');
		 form1.txtemail.focus();
		 return false;
	  }
	 
	 //Validação se Usuário e Senha
	if (usuario == "") {
		alert('Usuário Obrigatório.');
		form1.txtusuario.focus();
		return false;
	}  
	 
	if (senha == "") {
		alert('Senha Obrigatório.');
		form1.txtsenha.focus();
		return false;
	}  
	 
	if (senha.length < 6) {
		alert('Informe uma senha com mais de 5 caracteres.');
		form1.txtsenha.focus();
		return false;
	}  

	if(estado == 0){
		alert('Selecione um estado.');
		form1.cboestado.focus();
		return false;
	}

	if((form1.rdtipo[0].checked == false)&&(form1.rdtipo[1].checked == false)){
		alert('Informe se é maior ou menor de idade.');
	    form1.rdtipo[0].focus();
	    return false;
	}
 
 
}