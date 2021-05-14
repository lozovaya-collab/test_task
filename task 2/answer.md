Для того, что адаптировать таблицу под побильную версию, нужно добавить в css файл следующий медиа-запрос:

@media only screen and (max-width: 500px) and (min-width: 320px) {
  
  *{
  
    overflow-x: hidden;
    
  }
  
  table {
  
    font-size: 12px;
      
   }
   
}
