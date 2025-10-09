type TituloProps = {
    children: string;
    corDeTexto: string;
    corDeFundo: string;
};

export default function Titulo(props : TituloProps) {
    const estilo = {
        color: props.corDeTexto,
        backgroundColor: props.corDeFundo,
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center' as const
    };
    return <h1 style={estilo}>{props.children}</h1>;
}