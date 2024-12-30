import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible, sectionName}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button 
      onClick={()=> setIsVisible("")} 
      className="cursor-pointer underline"
      >Hide
      </button>) : (
        <button 
      onClick={()=> setIsVisible(sectionName)} 
      className="cursor-pointer underline"
      >Show
      </button>)}     
      
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [visibleSection, setVisibleSection] = useState("");
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: false,
  //   showTeam: false,
  //   ShowCareer: false,
  // });
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section 
        title={"About Instamart"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin ullamcorper nisi volutpat volutpat. Curabitur at purus nec turpis finibus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at erat in nibh tincidunt elementum. Aenean porttitor interdum ipsum in varius. Pellentesque dolor tortor, eleifend sit amet facilisis et, vehicula vitae nibh. Nam volutpat dignissim elit, vitae porttitor mi posuere eu. Praesent tristique dictum maximus. Praesent pretium ac nibh at blandit. Sed neque dui, faucibus vel gravida in, maximus ac est. Maecenas mattis velit at purus volutpat iaculis. Nullam posuere leo vel aliquet fermentum. Phasellus ut nunc est. Nulla dapibus velit id dui malesuada, et pretium magna semper. "}
        // isVisible={sectionConfig.showAbout}
        isVisible={visibleSection === "about"}
        // setIsVisible={()=>setVisibleSection("about")}
        setIsVisible={setVisibleSection}
        sectionName= "about"
        // setIsVisible={()=>setSectionConfig({
        //   showAbout: true,
        //   showTeam: false,
        //   ShowCareer: false,
        // })}
      />
      <Section 
        title={"Team Instamart"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin ullamcorper nisi volutpat volutpat. Curabitur at purus nec turpis finibus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at erat in nibh tincidunt elementum. Aenean porttitor interdum ipsum in varius. Pellentesque dolor tortor, eleifend sit amet facilisis et, vehicula vitae nibh. Nam volutpat dignissim elit, vitae porttitor mi posuere eu. Praesent tristique dictum maximus. Praesent pretium ac nibh at blandit. Sed neque dui, faucibus vel gravida in, maximus ac est. Maecenas mattis velit at purus volutpat iaculis. Nullam posuere leo vel aliquet fermentum. Phasellus ut nunc est. Nulla dapibus velit id dui malesuada, et pretium magna semper. "}
        // isVisible={sectionConfig.showTeam}
        isVisible={visibleSection === "team"}
        // setIsVisible={()=>setVisibleSection("team")}
        setIsVisible={setVisibleSection}
        sectionName= "team"
        // setIsVisible={()=>setSectionConfig({
        //   showAbout: false,
        //   showTeam: true,
        //   ShowCareer: false,
        // })}
      />
      <Section 
        title={"Careers"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin ullamcorper nisi volutpat volutpat. Curabitur at purus nec turpis finibus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at erat in nibh tincidunt elementum. Aenean porttitor interdum ipsum in varius. Pellentesque dolor tortor, eleifend sit amet facilisis et, vehicula vitae nibh. Nam volutpat dignissim elit, vitae porttitor mi posuere eu. Praesent tristique dictum maximus. Praesent pretium ac nibh at blandit. Sed neque dui, faucibus vel gravida in, maximus ac est. Maecenas mattis velit at purus volutpat iaculis. Nullam posuere leo vel aliquet fermentum. Phasellus ut nunc est. Nulla dapibus velit id dui malesuada, et pretium magna semper. "}
        // isVisible={sectionConfig.ShowCareer}
        isVisible={visibleSection === "career"}
        // setIsVisible={()=>setVisibleSection("career")}
        setIsVisible={setVisibleSection}
        sectionName= "career"
        // setIsVisible={()=>setSectionConfig({
        //   showAbout: false,
        //   showTeam: false,
        //   ShowCareer: true,
        // })}
      />
    </div>
  );
};

export default Instamart;