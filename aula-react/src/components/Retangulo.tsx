export default function Retangulo(props){
    const estilo = {
        width: props.largura,
        height: props.altura,
        backgroundColor: props.corDeFundo,};
    return <div style={estilo}></div>;
}