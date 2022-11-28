import React from 'react';
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    children?: React.ReactNode
}

export default function Botao({onClick, type, children}: Props){
    return (
        <button onClick={onClick} type={type} className={style.botao}        >
            {children}
        </button>
    )
}
// class Botao1 extends React.Component <{ 
//     children: any, 
//     type?: "button" | "submit" | "reset" | undefined
//     onClick?: () => void
// }>{
//     render() {
//         const {type = 'button', onClick} = this.props;
//         // const backgroundColor = 'green';

//         // const styles = {
//         //     backgroundColor
//         // }
        
//         return (
//             <button onClick={onClick} type={type} className={style.botao}
//             // className='botao'
//             // style=
//             // // Formas de estilar CSS mas o INLINE STYLE não é uma boa pratica
//             // // {{
//             // //     // backgroundColor: 'blue'
//             // //     // backgroundColor: backgroundColor
//             // //     backgroundColor
//             // // }}
//             // {styles}
//             >
//                 {this.props.children}
//             </button>
//         )
//     }
// }

// export default Botao;