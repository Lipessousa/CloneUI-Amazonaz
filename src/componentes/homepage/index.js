import React from 'react';
import './estilohome.css';
 
import Card  from '../cards';
import CardsImgs from '../cards_2';
import Bg_Img from '../bg_carrossel';
import Carousel from '../carousel';



export default function Home(){
    return(

    <div className='pai'>

        <div className='crsl'>
            <Bg_Img
            imagem1= 'assets/img_carrosel.jpg'
            imagem2='assets/img_carrosel2.jpg'
            imagem3='assets/img_carrosel3.jpg'/>
        </div>


        <div className='main'>
            <div className='grid-container'>
                    <div className="grid-item">
                        <Card
                        produto='Curta 3 meses GRÁTIS de músicas'
                        imagem = 'assets/img_testeMusic.jpg'
                        link= 'Experimente agora'/>
                    </div>

                    <div className="grid-item">
                        <Card
                        produto='Leia à vontade com Kindle Unlimited'
                        imagem = 'assets/img_testeKindle.jpg'
                        link= 'Experimente agora'/>
                    </div>

                    <div className="grid-item">
                        <Card
                       produto = 'Echo Dot com relógio: com display de LED'
                       imagem = 'assets/img_testeEchoDot2.jpg'
                       link = 'Veja mais'/>
                    </div>

                    <div className="grid-item">
                        <Card
                        produto = 'Amazon Music Unlimited: 30 dias gratis'
                        imagem = 'assets/img_testeMusic2.jpg'
                        link = 'Experimente agora'/>
                    </div>  


                 
                    <div className="grid-item">
                        <Card
                        produto='Curta 3 meses GRÁTIS de músicas'
                        imagem = 'assets/img_testeMusic.jpg'
                        link= 'Experimente agora'/>
                    </div>

                    <div className="grid-item">
                        <Card
                        produto='Oferta do dia'
                        imagem = 'assets/img_assets2.jpg'
                        link= 'Veja mais'/>
                    </div>

                    <div className="grid-item">
                        <Card
                       produto = 'Frete GRÁTIS no seu primeiro pedido'
                       imagem = 'assets/img_assets1.jpg'
                       link = 'Saiba mais'/>
                    </div>

                    <div className="grid-item">
                        <CardsImgs
                        produto = 'Veja os dispositivos do Amazonaz'
                        imagem1 = 'assets/img_cards2_1.jpg'
                        desc1 = 'EchoDot 3ºGeração'
                        imagem2 = 'assets/img_cards2_2.jpg'
                        desc2 = 'EchoDot 4ºGeração'
                        imagem3 = 'assets/img_cards2_3.jpg'
                        desc3 = 'Fire TV Stick 4K'
                        imagem4 = 'assets/img_cards2_4.jpg'
                        desc4 = 'Kindle 10ºgeração'
                        link = 'Confira agora'/>
                    </div>  

            </div>
            <Carousel/>
        </div>
    </div>
       
    );
}