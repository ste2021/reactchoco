import styled from 'styled-components';

export const Container = styled.div`

 padding: 30px;
 display: flex;
 flex-direction: column;
 background-color: #fff;
 align-items: center;
 border-radius: 4px;
 margin: 80px auto;

 h1{
   font-size: 40px;
   margin-top: 15px;
   align-items: center;
   display: flex;
   flex-direction: row;
 }

 img{
   max-width: 150px;
 }
`;

export const ChocolateList = styled.ul`
   border-top: 1px solid #eee;
   list-style: none;
   margin-top: 20px;

   li {
     & + li{
       margin-top: 10px;
       border-top: 1px solid #eee;
     }

     div{
       display: flex;
       flex-direction: row;
       align-items: center;
       padding: 15px 10px;
       border-radius: 4px;

       h1{
         margin-bottom: 5px;
     }

       img{
         width: 60px;
         height: 60px;
         border-radius: 50%;
         border: 2px solid #eee;
       }

       div{
         display: block;
         margin-left: 10px;
    }

     }

     margin-top: 10px;
     border-top: 1px solid #eee;
   }
`
