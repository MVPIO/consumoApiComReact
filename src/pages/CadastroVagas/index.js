import {useState, useEffect} from 'react';
import axios from 'axios';
import * as Sty from './styled';



const CadastroVaga = () =>  {

  const[ status, setStatus ] = useState ({
    type: '',
    mensagem: ''
  });

  //comunicação com a API
  const criarVaga = async (vaga) => {
    vaga.preventDefault();

    if(!validarForm()) return;

    const vagaEmprego = await axios.post('http://localhost:8080/cadastroVagas', form)
    .then((response) => {
      
      alert("Vaga Cadastrada");
      setStatus({
        type:'sucesso',
        mensagem: 'Cadastro Realizado'
      })

      setForm({
        nomeVaga: '',
        descricaoVaga: '',
        cidade: '',
        salario: '',
        dataPublicacaoVaga: ''

      });

      }).catch ((err) => {

      if(err.response){
        console.log(err.response);
      
      }else {

        alert("Falha na Conexão");
        setStatus({
          type:'erro',
          mensagem: 'Falha conexão : Tente novamente ou mais tarde'

        })
      }
    });
  };

    const [form, setForm] =  useState ({
      nomeVaga: '',
      descricaoVaga: '',
      cidade: '',
      salario: '',
      dataPublicacaoVaga: '',
  });

  //printa no console a cada alteração do input
  useEffect(() => {
    console.log(form);
  }, [form]);

  function validarForm (){
    if(!form.nomeVaga || !form.descricaoVaga || !form.cidade || !form.salario || !form.dataPublicacaoVaga )
    return setStatus ({
      type: "erro",
      mensagem: "Por Favor, preencha todos os campos"
    });
    return true;
  }

  return (
   
    
    <Sty.Body>
      <Sty.Container> 
        <Sty.Div>
            <label><Sty.FormH1>Cadastrar Vaga</Sty.FormH1></label>
          <form onSubmit= {criarVaga}> 

            {status.type === 'sucesso' ? <p style={{color: 'green', textAlign: 'center'}}>
            {status.mensagem}</p> : ""}
            {status.type === 'erro' ? <p style={{color: '#ff0000', textAlign: 'center'}}>
            {status.mensagem}</p> : ""}

            <div><label>Nome: </label></div> 
              <Sty.Input  onChange= {(e) => { 
                setForm({ ...form, nomeVaga: e.target.value});
              }} value={form.nomeVaga} placeholder="Nome da Vaga"></Sty.Input>
        
            <div><label>Cidade: </label></div> 
              <Sty.Input  onChange= {(e) => { 
                setForm({ ...form, cidade: e.target.value});
              }} value={form.cidade} placeholder="Cidade"></Sty.Input>
      
            <div><label>Salário: </label></div> 
              <Sty.Input type="number"  onChange= {(e) => { 
                setForm({ ...form, salario: e.target.value});
              }} value={form.salario} placeholder="Salário" ></Sty.Input>
            
            <div><label>Data: </label></div> 
              <Sty.Input type="date"  onChange= {(e) => { 
                setForm({ ...form, dataPublicacaoVaga: e.target.value});
              }} value={form.dataPublicacaoVaga} placeholder="Data" ></Sty.Input>
        
            <div><label>Descrição: </label></div> 
                <Sty.Textarea  onChange= {(e) => { 
              setForm({ ...form, descricaoVaga: e.target.value});
            }} value={form.descricaoVaga} placeholder="Descrição" ></Sty.Textarea>
        

              <Sty.Button type="submit">Cadastrar</Sty.Button>
        
          </form>
        </Sty.Div>
      </Sty.Container>
    </Sty.Body>

          
  );
}

export default CadastroVaga;
