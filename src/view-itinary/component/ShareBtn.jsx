import { Button } from "@/components/ui/button";
import { GrSend } from "react-icons/gr";
function ShareBtn() {
    const handleShare = () => {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href
        }).then(() => console.log("Shared successfully"))
          .catch((error) => console.log("Error sharing", error));
      } else {
        alert("Sharing not supported in this browser.");
      }
    };
  
    return (
        <Button onClick={handleShare} className={"size-7 sm:size-12 md:size-12 lg:size-12 xl:size-12 cursor-pointer"}>
            <GrSend className=''/>
        </Button>
    );
  }
  
  export default ShareBtn;
  