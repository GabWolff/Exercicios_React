type RetanguloProps = {
    largura: number;
    altura: number;
    corDeFundo: string;
};

export default function Retangulo(props : RetanguloProps) {
    const estilo = {
        width: props.largura,
        height: props.altura,
        backgroundColor: props.corDeFundo,};
    return <div style={estilo}></div>;
}