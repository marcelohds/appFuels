import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Component} from 'react-native';

export default function App() {
	
	const[alcool, setAlcool] = useState();
	const[gasolina, setGasolina] = useState();
	const[resultado, setResultado] = useState();
	const[opcao, setOpcao] = useState();
	
	function imc(){
		let r = alcool / gasolina;
		setResultado(r.toFixed(2));
		
		if (r > 0.7){
			let o = ("É melhor abastecer com gasolina!");
			setOpcao(o);		
		}
		
		else{
			let o = ("É melhor abastecer com álcool!");
			setOpcao(o);
		}
	}
	
	function limpar(){
		setResultado("");
		setAlcool("");
		setGasolina("");
		setOpcao("");
	}

  return (
        <View style={styles.container}>
		  <View style={styles.titulo}>
			  <Text style={styles.textoTitulo}>Gasolina ou Álcool?</Text>
		  </View>
		  
		  <View style={styles.blocoImagem}>
		  		<Image
				 	style={styles.imagem}
				 	source={require('./assets/frentista.png')}
				/>
		  </View>
		  
		  
		  <View style={styles.bloco}>
				<Text style={styles.label}>Álcool (R$): </Text>
			  	<TextInput
					maxLength={6}
					style={styles.input}
					value={alcool}
					onChangeText={(valor)=>setAlcool(valor)}
					placeholder="Exemplo 4.350"
					placeholderTextColor="#b1aeae"
				/>
			  
		  		<Text style={styles.label}>Gasolina (R$): </Text>
			  	<TextInput
					maxLength={6}
					style={styles.input}
					value={gasolina}
					onChangeText={(valor)=>setGasolina(valor)}
					placeholder="Exemplo 4.350"
					placeholderTextColor="#b1aeae" 
				/>
			  
			  <View style={styles.blocoBotao}>
				<TouchableOpacity style={styles.botao} onPress={imc}>
					<Text style={styles.textoBotao}>Calcular</Text>
				</TouchableOpacity>
				  
				<TouchableOpacity style={styles.botao} onPress={limpar}>
					<Text style={styles.textoBotao}>Limpar</Text>
				</TouchableOpacity>
			  </View>
			  
			<View style={styles.label1}>
				<Text style={styles.label1}> Resultado: {resultado} </Text>
			</View>
			
			<View style={styles.label1}>
				<Text style={styles.label1}> Opção: {opcao} </Text>
			</View>
			
		  </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	  },
	
	titulo: {
		backgroundColor: '#8FBC8F',
		height: '10%',
		justifyContent: 'center'
	},
	
	textoTitulo: {
		fontSize: 20,
		textAlign: 'center',
		color: '#fff'
	},
				  
	imagem: {
		width: 120,
		height: 120
	},
	
	blocoImagem: {
		alignItems: 'center',
		marginTop: 30
	},
	
	bloco:{
		width: '70%',
		marginLeft: '15%'
		
	},

	input: {
	 	backgroundColor: '#fff',
		borderWidth: 1,
		fontSize: 15,
		borderRadius: 5
	},
	
	label: {
		fontSize: 15,
		marginTop: 10
	},
	
	label1: {
		fontSize: 15,
		marginTop: 10,
		textAlign: 'center'
	},
	
	
	blocoBotao:{
		flexDirection: 'row',
		justifyContent: 'center'
	},
	
	botao:{
		width: '25%',
		marginTop: 20,
		marginLeft: '05%',
		marginRight: '05%',
		alignItems: 'center',
		backgroundColor: '#8FBC8F',
		borderWidth: 1
	},
	
	textoBotao: {
		fontSize: 15,
		textAlign: 'center'	
	},
});
