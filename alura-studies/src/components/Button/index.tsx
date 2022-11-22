import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component <{ children: any }>{
    render() {
        // const backgroundColor = 'green';

        // const styles = {
        //     backgroundColor
        // }
        
        return (
            <button className={style.botao}
            // className='botao'
            // style=
            // // Formas de estilar CSS mas o INLINE STYLE não é uma boa pratica
            // // {{
            // //     // backgroundColor: 'blue'
            // //     // backgroundColor: backgroundColor
            // //     backgroundColor
            // // }}
            // {styles}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Botao;