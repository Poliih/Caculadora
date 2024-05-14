import React from 'react';
import './App.css';

class RentalContractForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeEmpresarial: '',
      cnpj: '',
      enderecoEmpresarial: '',
      fiador: '',
      nacionalidade: '',
      cpfFiador: '',
      rgFiador: '',
      enderecoFiador: '',
      vigenciaContrato: '',
      avisoPrevio: '',
      multa: '',
      nomeContato: '',
      unidadesConsumidoras: '',
      grupoSubgrupo: '',
      modalidadeTarifacao: '',
      previsaoFaturamento: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
    console.log(this.state); // Exemplo: enviando os dados para a API
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div className="content-login">
          <h1 className="active">Contrato de Locação</h1>
          <h2 className="active">Empresa</h2>
          <form className="box-login" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="nomeEmpresarial"
              className="campo"
              name="nomeEmpresarial"
              value={this.state.nomeEmpresarial}
              onChange={this.handleInputChange}
              placeholder="Nome Empresarial"
            />
            <input
              type="text"
              id="cnpj"
              className="campo"
              name="cnpj"
              value={this.state.cnpj}
              onChange={this.handleInputChange}
              placeholder="CNPJ"
            />
            {/* Adicione outros campos semelhantes para os outros dados */}
            <div className="fiador-section">
              <h2>Fiador</h2>
              <input
                type="text"
                id="fiador"
                className="campo"
                name="fiador"
                value={this.state.fiador}
                onChange={this.handleInputChange}
                placeholder="Nome"
              />
              <input
                type="text"
                id="nacionalidade"
                className="campo"
                name="nacionalidade"
                value={this.state.nacionalidade}
                onChange={this.handleInputChange}
                placeholder="Nacionalidade"
              />
              <input
                type="text"
                id="CPF"
                className="campo"
                name="CPF"
                value={this.state.cpfFiador}
                onChange={this.handleInputChange}
                placeholder="CPF"
              />
              <input
                type="text"
                id="RG"
                className="campo"
                name="RG"
                value={this.state.rgFiador}
                onChange={this.handleInputChange}
                placeholder="RG"
              />
              <input
                type="text"
                id="Endereço"
                className="campo"
                name="Endereço"
                value={this.state.enderecoFiador}
                onChange={this.handleInputChange}
                placeholder="Endereço"
              />
            </div>
            <div className="contrato-inf-section">
              <h2>Dados do contrato</h2>
              <input
                type="text"
                id="vigenciaContrato"
                className="campo"
                name="vigenciaContrato"
                value={this.state.vigenciaContrato}
                onChange={this.handleInputChange}
                placeholder="Vigência do Contrato"
              />
              <input
                type="text"
                id="avisoPrevio"
                className="campo"
                name="avisoPrevio"
                value={this.state.avisoPrevio}
                onChange={this.handleInputChange}
                placeholder="Aviso Prévio"
              />
              <input
                type="text"
                id="multa"
                className="campo"
                name="multa"
                value={this.state.avisoPrevio}
                onChange={this.handleInputChange}
                placeholder="Multa"
              />
              {/* Adicione outros campos relacionados ao contrato conforme necessário */}
            </div>
            <input type="submit" className="botao" value="Enviar" />
          </form>
        </div>
      </div>
    );
  }
}

export default RentalContractForm;
