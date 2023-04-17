import BookList from "../components/BookList";
import Everyday from "../components/Everyday.png";
import watertab from "../components/watertab.png";
import Thai from "../components/Thai.png";
import Afternoon from "../components/Afternoon.png";

 
function Allbook() {
    const books = [
        {
          image: Everyday,  
          title: "English Every Month",
          author: "Kenov Vadowfsk",
          price: 359.00
        },
        {
          image: Thai,
          title: "ONET ภาษาไทย vol.1",
          author: "วิชัย เมืองคล้ำ",
          price: 199.00
        },
        {
          image: Thai,
          title: "ONET ภาษาไทย vol.2",
          author: "วิชัย เมืองคล้ำ",
          price: 199.00
  
        },
        {
          image: Afternoon,
          title: "Good After Noon",
          author: "Jimmy Bujova",
          price: 159.00
         
        },
        {
            image: watertab,
          title: "เกิดใหม่เป็นตู้กดน้ำซะแล้ว 1",
          author: "Ichiga Tarou",
          price: 85.00
   
        },
        {
            image: watertab,
          title: "เกิดใหม่เป็นตู้กดน้ำซะแล้ว 2",
          author: "Ichiga Tarou",
          price: 85.00
     
        },
        {
            image: watertab,
          title: "เกิดใหม่เป็นตู้กดน้ำซะแล้ว 3",
          author: "Ichiga Tarou",
          price: 85.00
     
        }
      ];
    return (
        <div className="App">
       <BookList books={books} />
    </div>
    );
}
export default Allbook;