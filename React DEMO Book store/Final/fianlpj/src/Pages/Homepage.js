import ImageSlider from "../components/ImageSlider";
import Everyday from "../components/Everyday.png";
import watertab from "../components/watertab.png";
import Thai from "../components/Thai.png";
import Afternoon from "../components/Afternoon.png";

function Homepage() {
    const images = [
        Everyday,
        watertab,
        Thai,
        Afternoon
      ];
    return (
        <div>
           <h1> NEW RELEASE </h1>
           <ImageSlider images={images} />;

        </div>
    );
}
export default Homepage;