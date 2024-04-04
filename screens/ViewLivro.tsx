import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';


export default function ViewLivro({ route }) {
  const { id } = route.params;
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetchLivro();
  }, []);

  const fetchLivro = async () => {
    try {
      const response = await axios.get(`https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi/${id}`);
      setLivro(response.data);
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
    }
  };

  return (
    <View>
      {livro && (
        <>
          <div style={style.container}>
            <div style={style.card}>
              <div style={style.cabecalhoLivro}>
                <Text>
                  <Text style={style.descricaoTitulo}><Text style={{fontWeight: "bold"}}>Título: </Text>{livro.titulo} </Text>
                </Text>
                <Text>
                  <Text style={style.descricaoAno}><Text style={{fontWeight: "bold", marginLeft: 12}}>Ano: </Text>{livro.ano} </Text>
                </Text>
              </div>
              <div>

              </div>
              <Text>
                <Text style={{fontWeight: "bold"}}>Lançamento:</Text> {livro.ano}
              </Text>      
              <Text>
                <Text style={{fontWeight: "bold"}}>Assuntos:</Text> {livro.assuntos}
              </Text>    
              <Text>
                <Text style={{fontWeight: "bold"}}>Editora:</Text> {livro.editora}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>Autor Principal:</Text> {livro.autorPrincipal}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>Autores:</Text> {livro.autores}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>Edição:</Text> {livro.edicao}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>Id:</Text> {livro.id}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>Idioma:</Text> {livro.idioma}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>ISBN/ISSN:</Text> {livro.isbnIssn}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>Material:</Text> {livro.material}
              </Text>
              <Text>
                <Text style={{fontWeight: "bold"}}>Obra:</Text> {livro.obra}
              </Text>
              <Image resizeMode='center' source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${livro.imagem}` }} style={{ width: 200, height: 200 }} />
            </div>
          </div>
        </>
      )}
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      width: "50%",
      margin: "auto",
      backgroundColor: "lightgray",
      borderRadius: 20,
    },

    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    cabecalhoLivro: {
      display: 'flex',
    },

    descricaoTitulo: {
      fontSize: 22
    },

    descricaoAno: {
      fontSize: 22
    }
  }
)

