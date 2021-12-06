import React from 'react'
import {  AiFillBell} from "react-icons/ai";
import './Figma.css'
import udevs from './img/udevs.svg'
import Textss from './Textss'
import { Cont, Container, Images } from './styled';
import { Bell, Exit, Header, OneRed, TextAll, Udevs } from './Head/Head';
import smoking from './img/smoking.svg'
import girl from './img/girl.svg'
import woman from './img/woman.svg'
import udevs1 from './img/udevs1.svg'
import { Box1, Box2, MainLower, Ros, Text1, Text2, Text3 } from './Lower/Lower';
import Axios from './Axios/axios';
export default function index() {
    return (
        <div>
            <Container>
<Cont>
<Header >
    <Udevs>
        <a href="https://udevs.io/"><img className="str" src={udevs}></img></a>
        </Udevs>
      
        
<Exit>
{/* <button className="btn btn-outline btn-outline-danger btn-sm" > <i className="fa fa-bell-o" /></button> */}

<AiFillBell style={{color:'black', fontSize:'30px'} }/> <OneRed>1</OneRed> </Exit>
    
<Bell>
   <a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Выход</button></a> </Bell>
    </Header>

{/* <Header text1='AAAAAAAAAAAAAAAAAAA'/> */}
<TextAll>
<a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Все-потоки</button></a>
<a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Разработка</button></a>
<a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Администрирование</button></a>
<a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Дизайн</button></a>
<a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Менеджмент</button></a>
<a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Маркетинг</button></a>
<a href="https://udevs.io/"><button type="submit" className="btn btn-outline btn-outline-primary btn-sm" >Научпоп</button></a>

</TextAll>


        

           
        <MainLower>
            <Box1>

        <a href="https://udevs.io/"><img className="str" src={udevs1}></img></a>
        <Text1>Помощник в публикации статей, журналов.<br/> 
Список популярных международных конференций.
Всё для студентов и преподавателей.</Text1>
<Text2>Copyright © 2020. LogoIpsum. All rights reserved.</Text2>

            </Box1>
<Box2>
    <Ros>Ресурсы</Ros>

<Text3>Статьи</Text3>
<Text3>Журналы</Text3>
<Text3>Газеты</Text3>
<Text3>Газеты</Text3>
</Box2>
<Box2>
<Ros>О нас</Ros>
<Text3>Контакты</Text3>
<Text3>Помощь</Text3>
<Text3>Заявки</Text3>
<Text3>Политика</Text3>
</Box2>
<Box2>
<Ros>Помощь</Ros>

<Text3>Часто задаваемые вопросы</Text3>

</Box2>
        </MainLower>
</Cont>
            </Container>
        </div>
    )
}
